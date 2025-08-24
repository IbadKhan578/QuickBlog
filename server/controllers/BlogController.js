import fs from 'fs';
import ImageKit from 'imagekit';
import imagekit from '../configs/imageKit.js';
import Blog from '../models/blog.js';

 const addBlog = async (req,res)=>{

    try {
        const {title , subTitle , description , category , isPublished } = JSON.parse(req.body.blog);
        const imageFile = req.file;

        // check if all fields are present

        if( !title || !description || !category || !imageFile ){
            return res.json({success:false, message:"All fields are Required"})
        }
          

        const fileBuffer = fs.readFileSync(imageFile.path);// convert the image into buffer format
             //  upload image to imagekit
        const response = await  ImageKit.upload({
            file: fileBuffer, // file buffer
      fileName: file.originalname, // original filename
      folder: "/blogs"

        })


        // optimize through imagekit url transformation 

        const optimizedImageUrl = imagekit.url({
            path:response.filePath,
            transformation:[
                {quality:'auto'},  // auto compression
                {format:'webp'},   // convert to modern format
                {width:'1280'}     // image resizing
            ]

        });

        const image = optimizedImageUrl;

        await Blog.create({title,subTitle,description,category,image, isPublished});

        return res.json({success:true, message:"Blog added Successfully"})
        
    } catch (error) {
     return res.json({success:false, message: error.message})

        
    }

}

export default addBlog;
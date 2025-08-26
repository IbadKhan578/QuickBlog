import fs from 'fs';
import ImageKit from 'imagekit';
import imagekit from '../configs/imageKit.js';
import Blog from '../models/blog.js';
import comment from '../models/Comment.js';

 export const    addBlog = async (req,res)=>{

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


export const getAllBlog=async( req,res)=>{
    try {
        const blogs = await Blog.find({isPublished:true});
        res.json({success:true, blogs })
        
    } catch (error) {
     return res.json({success:false, message: error.message})

        
    }

}

export  const getBlogById = async (req,res)=>{
    try {
        const {blogId} = req.params;
        const blog = await Blog.find(blogId);
        if(!blog){
                 return res.json({success:false, message: "Blog not Found"})
        }

                res.json({success:true, blog })


        
    } catch (error) {
             return res.json({success:false, message: error.message})

        
    }
}

export const DeleteBlogById = async (req,res)=>{
    try {
        const {blogId} = req.body;
        await Blog.findByIdAndDelete(blogId)

        // delete comments associate with this blog too
        await comment.deleteMany({blog:id})


        res.json({success:true, message:"Blog deleted Successfully" })

    } catch (error) {
             return res.json({success:false, message: error.message})

        
    }
}

export const TogglePublish = async (req,res)=>{
    try {
        const {blogId} = req.body;
        const blog =await Blog.find(blogId)
        blog.isPublished = !blog.isPublished;
        await Blog.save();

    res.json({success:true, message:"Blog status Updated" })
   
    } catch (error) {
             return res.json({success:false, message: error.message})

        
    }
}



export const addComment =async(req,res)=>{
try {
    const{blog,name,content} = req.body;
    await comment.create({blog,name,content});
        res.json({success:true, message:"Comment Added for  Review" })

    
} catch (error) {
                 return res.json({success:false, message: error.message})    
}

}


export const getBlogComment = async  (req,res)=>{

    try {
        const {blogId} = req.body;
  const comments =   await comment.find({blog: blogId, isApproved:true}).sort({createdAt:-1})
      res.json({success:true, comments })


    } catch (error) {
     return res.json({success:false, message: error.message})    

        
    }
}




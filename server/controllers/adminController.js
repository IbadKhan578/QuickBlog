import jwt from 'jsonwebtoken';
import Blog from '../models/blog.js';
import comment from '../models/Comment.js';

export const adminLogin = async ( req,res)=>{
    const {email,password} = req.body;
    try {
        if(email!== process.env.ADMIN_EMAIL || password!== process.env.ADMIN_PASSWORD ){
           return res.json({success:false, message:"Invalid Credentials"});
        }else{

        const token = jwt.sign({email},process.env.JWT_SECRET)
        return res.json({success:true, message:token});  }
        
        
    } catch (error) {
         return res.json({success:false , message:error.message});
        
    }

}


export const getAllBlogAdmin = async (req,res)=>{
    try {
        const blogs = await Blog.find({}).sort({createdAt:-1})
        res.json({success:true, blogs})
    } catch (error) {
                 return res.json({success:false , message:error.message});

    }

}

export const  getAllCommentAdmin = async (req,res)=>{
    try {
        const comments = await comment.find({}).populate("blog").sort({createdAt:-1})
        res.josn({success:false, comments})
    } catch (error) {
        res.json({success:false , message:error.message })
    }

}

export const getDashboard =  async (req, res)=>{
    try {
        const recentBlogs = await Blog.find({}).sort({createdAt:-1}).limit(5);
        const blogs = await Blog.countDocument();
        const comments = await comment.countDocument();
        const drafts = await Blog.countDocument({isPublished:false})
        const dashboardData = {
            recentBlogs , blogs , comments , drafts , dashboardData
        }
        res.josn({succeess:true, dashboardData  })
    } catch (error) {
      res.json({success:false , message:error.message })

    }

}


export const deleteCommentById = async (req,res)=>{
    try {
        const {id} = req.body;
        await comment.findByIdAndDelete(id)
        res.json({succeess:true, message:" Comment deleted Successfully" })
        
    } catch (error) {
    res.json({success:false , message:error.message })

    }

}


export const ApproveCommentById = async (req,res)=>{
    try {
        const {id} = req.body;
        await comment.findByIdAndUpdate(id, {isApproves:true})
        res.json({succeess:true, message:" Comment Updated Successfully" })
        
    } catch (error) {
    res.json({success:false , message:error.message })

    }

}


import express from "express";
import  {addBlog ,addComment,DeleteBlogById, generateContent, getAllBlog, getBlogById, getBlogComment, TogglePublish } from "../controllers/BlogController.js";




import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRouter = express.Router();

blogRouter.post('/add',upload.single('image'), auth, addBlog);
blogRouter.get('/all',getAllBlog);
blogRouter.get('/:blogId',getBlogById);
blogRouter.post('/delete',auth, DeleteBlogById);
blogRouter.post('/toggle-publish',auth, TogglePublish);


blogRouter.post('/add-comment', addComment);
blogRouter.post('/comments', getBlogComment);

blogRouter.post('/generate',auth, generateContent)


export default blogRouter;
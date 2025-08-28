

import express from 'express';
import  { adminLogin,  ApproveCommentById,  deleteCommentById,  getAllBlogAdmin,  getAllCommentAdmin, getDashboard } from '../controllers/adminController.js';
import auth from '../middleware/auth.js';


const adminRouter = express.Router();

adminRouter.post('/login',adminLogin);
adminRouter.get('/comments', auth ,getAllCommentAdmin);
adminRouter.get('/blogs',auth,getAllBlogAdmin);
adminRouter.post('/delete-comment',auth,deleteCommentById);
adminRouter.post('/approve-comment',auth,ApproveCommentById);
adminRouter.get('/dashboard',auth,getDashboard);


export default adminRouter;
import jwt from 'jsonwebtoken';

const adminLogin = async ( req,res)=>{
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

export default adminLogin;
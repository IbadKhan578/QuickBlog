import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { ImEyeBlocked } from "react-icons/im";
import { useAppContext } from '../../Context/Appcontext';
import toast from 'react-hot-toast';



function Login() {
    const {axios,setToken} = useAppContext();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [visibility,  setvisibility] = useState(false);

  const handleSubmit =  async(e)=>{
    e.preventDefault();

    try {

      let {data} =await  axios.post('/api/admin/login',{email,password});

      if(data.success){
        setToken(data.token);
        localStorage.setItem('token',data.token);
        axios.defaults.headers.common['Authorization'] = data.token;
      }else{
        toast.error(data.message);
      }
      
    } catch (error) {
      toast.error(error.message)
      
    }



  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full max-w-sm p-6  max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg'>
      <div className='flex flex-col items-center justify-center  '>
        <div className='w-full py-6 text-center' >
          <h1 className='text-3xl font-bold' > <span className='text-primary'>Admin </span> Login</h1>
          <p>Enter your credentials to access the admin panel</p>
        </div>
        <form onSubmit={handleSubmit} className='mt-6 w-full sm:max-w-md text-gray-600' >
          <div className='flex flex-col'>
            <label>Email</label>
          <input onChange={(e)=> setEmail(e.target.value)} value={email} className='border-b-2 border-gray-300 p-2 outline-none mb-6 ' type="email" placeholder='your email id' required/>
          </div>

           <div className='flex flex-col relative'>
            <label>Password</label>
          <input onChange={(e)=> setPassword(e.target.value)} value={password} className='border-b-2 border-gray-300 p-2 outline-none mb-6 ' type={visibility ? 'text' : 'password' } placeholder='your password' required/>
            <div onClick={()=> setvisibility(prev=>!prev)} className='absolute right-7 bottom-10 cursor-pointer'>
               { (visibility)?   <ImEyeBlocked /> :<FaRegEye /> 
               }
                </div>
          </div>
          <button  type='submit'className='w-full bg-primary text-white font-medium rounded cursor-pointer py-3 hover:bg-primary/90 ' >Login</button>

        </form>
      </div>
      </div>
    </div>
  )
}

export default Login 
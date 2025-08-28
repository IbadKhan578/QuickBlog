import React from 'react'
import { assets } from '../../assets/assets';
import { useAppContext } from '../../Context/Appcontext';
import toast from 'react-hot-toast';

function CommentTableItem({comment,fetchComment}) {
    const {blog, createdAt , _id} = comment;
    const blogDate = new Date(createdAt);

    const {axios} = useAppContext();
      const approveComment = async ()=>{
        try {

          const {data} = await axios.post('/api/admin/approve-comment',{id:_id});
          if(data.success){
            toast.success(data.message);
            fetchComment()
          }else{
            toast.error(data.message)
          }
          
        } catch (error) {
          toast.error(error.message)
        }
      } 

      const deleteComment = async ()=>{
        try {
          const confirm = window.confirm('Are you sure you want to delete the comment?')
          if(!confirm) return;

          const {data} = await axios.post('/api/admin/delete-comment',{id:_id});
          if(data.success){
            toast.success(data.message);
            fetchComment()
          }else{
            toast.error(data.message)
          }
          
        } catch (error) {
          toast.error(error.message)
        }
      } 


  return (
    <tr className='border-y text-gray-500'>
        <td className='px-6 py-4 '>
            <b className='font-medium text-gray-600' >Blog</b> : {blog.title}
            <br />
            <br />
            <b className='font-medium text-gray-600' >Name</b> : {comment.name}
            <br />
            <b className='font-medium text-gray-600' >Comment</b> : {comment.content}
        </td>

        <td className='px-6 py-4 max-sm:hidden' >{blogDate.toLocaleDateString()}</td>
            
            <td className='px-6 py-4'>
                <div className='inline-flex items-center gap-4' >
                    {!comment.isApproved ? <img src={assets.tick_icon} onClick={approveComment}
                     className='w-5 hover:scale-110 transition-all cursor-pointer' />
                     : <p className='text-xs border px-3 bg-green-100 border-green-600 text-green-600 py-1 cursor-pointer  rouned-full'>
                        Approved</p> }
                        <img onClick={deleteComment} src={assets.bin_icon} className='w-5 cursor-pointer hover:scale-110 transition-all' alt="" />

                </div>
            </td>

    </tr>
  )
}

export default CommentTableItem
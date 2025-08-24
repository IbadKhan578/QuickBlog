import React from 'react'
import { assets } from '../../assets/assets';

function CommentTableItem({comment,fetchComment}) {
    const {blog, createdAt , _id} = comment;
    const blogDate = new Date(createdAt);
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
                    {!comment.isApproved ? <img src={assets.tick_icon}
                     className='w-5 hover:scale-110 transition-all cursor-pointer' />
                     : <p className='text-xs border px-3 bg-green-100 border-green-600 text-green-600 py-1 cursor-pointer  rouned-full'>
                        Approved</p> }
                        <img src={assets.bin_icon} className='w-5 cursor-pointer hover:scale-110 transition-all' alt="" />

                </div>
            </td>

    </tr>
  )
}

export default CommentTableItem
import React, { useEffect, useState } from 'react'
import { comments_data } from '../../assets/assets';
import CommentTableItem from '../../components/admin/CommentTableItem';
import { useAppContext } from '../../Context/Appcontext';
import toast from 'react-hot-toast';

function Comments() {
  const [comment, setComment] = useState([]);
  const [filter,setFilter] = useState('Not Approved');
  const {axios} = useAppContext()
  const fetchComment= async()=>{
    try {
      const {data} = await axios.get('/api/admin/comments')
      data.success ? setComment(data.comments) : toast.error(data.message)
      
    } catch (error) {
      toast.error(error.message);
    }
  } 
  useEffect(()=>{
    fetchComment();
  },[])
  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 bg-blue-50/50 sm:pl-16">
      <div className="flex items-center justify-between max-w-3xl">
        <h1>Comments</h1>
        <div className="flex gap-4">
          <button onClick={()=>setFilter('Approved')}
            className={` ${filter=='Approved'&& `text-primary`  } border shadow-custom-sm text-xs px-4 py-1 rounded-full cursor-pointer `}
          >
            Approved
          </button>
          <button   onClick={()=>setFilter('Not Approved')}
            className={` ${filter=='Not Approved'&& `text-primary`  }  border shadow-custom-sm text-xs px-4 py-1 rounded-full cursor-pointer `}
          >
            Not Approved
          </button>
        </div>
      </div>
      
      <div className='relative h-4/5 max-w-3xl overflow-x-auto bg-white mt-4 scrollbar-hide shadow rounded-lg '>
       <table className='w-full text-sm text-gray-500'>
        <thead className='text-xs text-gray-700 text-left uppercase' >
          <tr>
            <th scope='col' className='px-6 py-3' >Blog Title & Comment	</th>
            <th scope='col' className='px-6 py-3 max-sm:hidden ' >Date	</th>
            <th scope='col' className='px-6 py-3' >Action	</th>
          </tr>
        </thead>
        <tbody>
          {comment.filter((cmnt)=>{
            if(filter=='Approved') return cmnt.isApproved===true;
            return cmnt.isApproved===false;
          }).map((cmnt, index)=> <CommentTableItem  key={cmnt._id} comment={cmnt}  index={index+1} fetchComment={fetchComment} /> )
          }
        </tbody>

       </table>
      
      </div>



    </div>
  );
}

export default Comments
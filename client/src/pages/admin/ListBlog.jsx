import React, { useState, useEffect } from 'react'
import { blog_data } from '../../assets/assets';
import BlogTableItems from '../../components/admin/BlogTableItems.jsx'

function ListBlog() {
  const [blogs,setBlogs] = useState([]);

  const fetchBlogs = async ()=>{
    setBlogs(blog_data);
  }
  useEffect(()=>{
    fetchBlogs();

  },[])

  return (
    <div className='flex-1 px-5 pt-5 sm:pt-12 sm:pl-16 bg-blue-50/50' >
      <h1>All blogs</h1>
          <div className='relative h-4/5 max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>

          <table className='w-full text-sm text-gray-500' >
            <thead className='text-xs text-gray-600 text-left uppercase' >
              <tr>
                <th scope='col' className='px-2 py-4 xl:px-6'>#</th>
                <th scope='col' className='px-2 py-4'>BLOG TITLE</th>
                <th scope='col' className='px-2 py-4 max-sm:hidden'>DATE</th>
                <th scope='col' className='px-2 py-4 max-sm:hidden'>STATUS</th>
                <th scope='col' className='px-2 py-4'>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
  {blogs.map((blog, index) => (
    <BlogTableItems
      key={blog._id}
      blog={blog}
      fetchBlogs={fetchBlogs}
      index={index + 1}
    />
  ))}
</tbody>

           
          </table>
        </div>



    </div>
  )
}

export default ListBlog
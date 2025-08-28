import React from 'react'
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import Layout from './pages/admin/Layout.jsx'
import Dashboard from './pages/admin/Dashboard.jsx'
import Addblog from './pages/admin/Addblog.jsx'
import ListBlog from './pages/admin/ListBlog.jsx'
import Comments from './pages/admin/Comments.jsx'
import {Routes,Route} from 'react-router-dom'
import Login from './components/admin/Login.jsx';
import 'quill/dist/quill.snow.css'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './Context/Appcontext.jsx';


function App() {
  const {token} = useAppContext();
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/admin' element={token ? <Layout /> : <Login />}>
          <Route index  element={<Dashboard />} />
          <Route path='addBlog'  element={<Addblog />} />
          <Route path='listBlog'  element={<ListBlog />} />
          <Route path='comments'  element={<Comments />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
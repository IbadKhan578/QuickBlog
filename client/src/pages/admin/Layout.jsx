import React from "react";
import { assets } from "../../assets/assets";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";

function Layout() {
  const navigate = useNavigate();

  const logout = ()=>{
    navigate('/')
  }
  return <>
        <div className="flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200 ">
          <img src={assets.logo} onClick={()=>navigate('/')} className="w-32 sm:w-40 cursor-pointer" alt="" />
          <button onClick={logout} className="text-sm border py-2 px-8 text-white bg-primary rounded-full cursor-pointer">Logout</button>
        </div>
        <div className="flex h-[calc(100vh-70px)]">
          <Sidebar />
           <Outlet />
        </div>

  </>;
}

export default Layout;

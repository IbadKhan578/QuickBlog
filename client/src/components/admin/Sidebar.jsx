import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

function Sidebar() {
  return (
    <div>
      <NavLink
        end={true}
        to="/admin"
        className={({ isActive }) =>
          ` ${
            isActive && `bg-primary/10  border-r-4 border-primary`
          } flex items-center px-3 md:px-9 md:min-w-64 gap-3 py-3.5  cursor-pointer`
        }
      >
        <img src={assets.home_icon} alt="" />
        <p className="hidden md:inline-block">Dashboard</p>
      </NavLink>

      <NavLink
        end={true}
        to="/admin/addblog"
        className={({ isActive }) =>
          ` ${
            isActive && `bg-primary/10  border-r-4 border-primary`
          } flex items-center px-3 md:px-9 md:min-w-64 gap-3 py-3.5  cursor-pointer`
        }
      >
        <img src={assets.add_icon} alt="" />
        <p className="hidden md:inline-block">Add Blog</p>
      </NavLink>

      <NavLink
        end={true}
        to="/admin/listBlog"
        className={({ isActive }) =>
          ` ${
            isActive && `bg-primary/10  border-r-4 border-primary`
          } flex items-center px-3 md:px-9 md:min-w-64 gap-3 py-3.5  cursor-pointer`
        }
      >
        <img src={assets.list_icon} alt="" />
        <p className="hidden md:inline-block">Blog lists</p>
      </NavLink>

      <NavLink
        end={true}
        to="/admin/comments"
        className={({ isActive }) =>
          ` ${
            isActive && `bg-primary/10  border-r-4 border-primary`
          } flex items-center px-3 md:px-9 md:min-w-64 gap-3 py-3.5  cursor-pointer`
        }
      >
        <img src={assets.comment_icon} className="sm:w-[24px] sm:h-[24px]" alt="" />
        <p className="hidden md:inline-block">Comments</p>
      </NavLink>
    </div>
  );
}

export default Sidebar;

import React from "react";
import { NavLink } from "react-router-dom";
import { FaCalendarPlus } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { LuPackageOpen } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className="w-[15%] md:w-[20%] lg:w-[10%] min-h-screen bg-[#fff] fixed">
      <div className="flex flex-col gap-4 pt-6 px-[0.7rem] sm:px-[1rem] text-[15px]">
        <NavLink className="flex items-center gap-3 px-2 bg-gray-100 py-2 rounded" to="/">
          <FaCalendarPlus className="text-[1rem] sm:text-[1.5rem]" />
          <p className="hidden md:block">Add</p>
        </NavLink>
        <NavLink className="flex items-center gap-3  px-2 bg-gray-100 py-2 rounded" to="/list">
          <FaListCheck className="text-[1rem] sm:text-[1.5rem]"/>
          <p className="hidden md:block">List</p>
        </NavLink>
        <NavLink className="flex items-center gap-3 px-2 bg-gray-100 py-2 rounded" to="/orders">
          <LuPackageOpen className="text-[1rem] sm:text-[1.5rem]"/>
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;

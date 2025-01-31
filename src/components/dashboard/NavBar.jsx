
import React, { useState, memo } from "react";
import SearchIcon from '../../assets/pngs/search.png';
import UsFlag from '../../assets/pngs/us-flag.png';
import Cloud from '../../assets/pngs/cloud.png';
import ArrowDown from '../../assets/pngs/arrow-down.png';
import Notification from '../../assets/pngs/notification.png';
import Settings from '../../assets/pngs/settings.png';
import ProfilePic from '../../assets/pngs/profile-pic.png';
import { FaCartShopping, FaBell } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function NavBar({ title, menu, setMenu }) {
  const navigate = useNavigate();

  return (
    <nav className="p-2 flex items-center justify-between bg-white shadow-md md:shadow-none">
      {/* Title */}
      <div
        onClick={() => {
          setMenu(!menu);
        }}
        className="cursor-pointer block mr-2 md:hidden transition-all ease-in-out duration-300"
      >
        {!menu ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>
      <h1 className="font-bold text-gray-600 text-sm md:text-[25px] truncate mr-auto md:mr-0">
        {title}
      </h1>

      {/* Search Bar (Hidden on Small Screens) */}
      <div className="flex-1 max-w-[400px] mx-1 hidden md:flex h-8 items-center gap-2 bg-gray-200 rounded-lg px-2 border">
        <img src={SearchIcon} alt="Search" className="h-[20px]" />
        <input
          type="text"
          placeholder="Search here..."
          className="w-full h-[80%] text-gray-700 placeholder:text-sm bg-gray-200 focus:outline-none"
        />
      </div>

      {/* Icons and Profile Section */}
      <div className="flex items-center gap-4">
        <img
          src={ProfilePic}
          alt="Profile"
          className="h-10 w-10 rounded-full object-cover"
        />

      </div>
    </nav>
  );
}

export default memo(NavBar); 

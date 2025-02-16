import React, { useEffect, useState } from "react";
import BoardMen from "../assets/jpgs/boardroom.jpg";
import Computer from "../assets/pngs/computer.png";
import Dialog from "../assets/pngs/dialog.png";
//import { Helmet } from "react-helmet";
import Calenderr from "../assets/pngs/calender.png";
import {useNavigate} from 'react-router-dom'
function Dashboard() {
 const navigate=useNavigate();
  return (
    <div className="flex flex-wrap gap-5 w-full min-h-full px-4 md:px-[2%] pt-[1%]">
  {/* <Helmet>
    <title>Mayrahkee - Africa | Dashboard</title>
  </Helmet> */}

  {/* Left Section */}
  <section className="w-full flex flex-col gap-6 pt-[3%]">
    <ul className="grid grid-cols-responsive gap-4">
      <li className="h-60 w-full rounded-[10px] bg-red-100 overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-150">
        <img
          src={BoardMen}
          alt="Board Men"
          className="h-full w-full object-cover"
        />
      </li>

      <li onClick={()=>navigate("/dashboard/attendance")} className="h-60 w-full bg-white rounded-[10px] flex flex-col items-center justify-center overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-150">
        <img className="w-[80px] md:w-[100px]" src={Computer} alt="" />
        <span className="text-green text-sm">Enter Class Room</span>
      </li>

      <li onClick={()=>navigate("/dashboard/courses")} className="h-60 w-full bg-[brown] rounded-[10px] flex flex-col items-center justify-center overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-150">
        <img className="w-[80px] md:w-[100px]" src={Dialog} alt="" />
        <span className="text-white text-sm">Courses</span>
      </li>

      <li className="h-60 w-full bg-blue-500 rounded-[10px] flex flex-col items-center justify-center overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-150">
        <img className="w-[80px] md:w-[90px]" src={Calenderr} alt="" />
        <span className="text-white text-sm">
          Course Schedule / Time Table
        </span>
      </li>
    </ul>

  
  </section>

</div>

  );
}

export default Dashboard;

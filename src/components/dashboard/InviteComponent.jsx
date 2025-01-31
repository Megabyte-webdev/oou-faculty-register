import React, { memo } from "react";
import Medal from '../../assets/pngs/medal.png'
import { Link } from "react-router-dom";

function InviteComponent() {
  return (
    <div className="mt-4 w-[60%] shadow-lg shadow-gray-400 rounded-[5px] p-2 flex justify-between h-[120px] flex-col">
      <div className="w-full flex h-[50%]">
        <p className="font-semibold text-sm">Invite Friends and get 5%</p>
        <img src={Medal} className="h-[60%]"/>
      </div>

      <Link to='/dashboard/invite_friends' >
      <button className="py-[5px] w-full bg-green text-white rounded-[5px] hover:scale-105 duration-150 text-sm font-semibold">Invite</button>
      </Link>
    </div>
  );
}

export default memo(InviteComponent);

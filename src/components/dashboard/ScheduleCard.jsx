import React, { memo } from "react";
import Wallet from "../../assets/pngs/wallet.png";
import Clock from "../../assets/pngs/clock.png";

function ScheduleCard({current}) {
    return (
        <div className='w-full h-[120px] gap-[10px] overflow-hidden rounded-[10px] bg-white flex'>
            <hr className={`w-[10px] h-full ${current.tagColor}`}/>
            <div className='w-[85%] text-gray-600 h-full items-start justify-between flex flex-col py-[3%]'>
                <h6 className='text-sm'>{current?.title}</h6>

                <div className='flex flex-wrap gap-[5%] w-[90%]'>
                    <p className='flex-1 flex flex-col text-small gap-[3px]'><img src={Wallet} className='w-[12px]'/>{current.day}</p>
                    <hr className='border-l h-full border-gray-400'/>
                    <p className='flex-1 flex flex-col text-small gap-[3px]'><img src={Clock} className='w-[12px]'/>{current.start_time} - {current.end_time}</p>
                </div>

                <div className='flex gap-[3px] items-center'>
                  <img className='h-[30px] w-[30px] rounded-[10px] bg-gray-400'/>
                  <span className='text-gray-600 text-small'>{current.status}</span>
                </div>

            </div>
        </div>
    )
}

export default memo(ScheduleCard);

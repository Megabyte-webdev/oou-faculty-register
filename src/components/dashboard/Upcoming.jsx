import React, { memo } from "react";
import { MdAddCircle } from "react-icons/md";
import ScheduleCard from './ScheduleCard';
import { scheduleDummy } from '../../utils/dashboard/dummys';
import { ResourceContext } from "../../context/ResourceContext";
import { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../../context/AuthenticationContext";
function Upcoming() {
    const { authDetails } = useContext(AuthenticationContext);
    const { setGetAllSchedule, getAllSchedule } = useContext(ResourceContext);
    const [schedule, setSchedule] =useState(null);
   useEffect(() => {
      setGetAllSchedule((prev) => ({
        ...prev,
        isDataNeeded: true,
      }));
  }, [setGetAllSchedule]);
  
  useEffect(() => {
    setSchedule(getAllSchedule?.data?.filter(item=> item?.instructor_id === authDetails?.user.id) || [])
}, [getAllSchedule]);


    const getSchedule = () => {
        return getAllSchedule?.data?.slice(0, 5)?.map((current,index) => <ScheduleCard key={index} current={current} />)
    }

  return (
    <div className="w-full flex flex-col px-[5px] gap-[5px] pb-[5px]">
      <div className="flex w-full items-end justify-between">
        <div className="flex flex-col text-gray-600 gap-[5px]">
          <h6 className="font-semibold text-lg ">Upcoming Schedule</h6>
        </div>

        <div className="p-[5px] shadow-sm bg-white cursor-pointer shadow-gray-300 rounded-[10px]">
          <MdAddCircle className="text-green text-[25px]" />
        </div>
      </div>

            <ul className='w-full grid grid-cols-1 gap-[10px]'>
                {getSchedule()}
            </ul>

            <button className=' w-full hover:bg-white border rounded-full border-gray-600 py-[5px] mb-3'>
               More Schedules
            </button>
            
        </div>
    )
}

export default memo(Upcoming);

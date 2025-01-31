import React, {memo} from "react";
import { SlOptions } from "react-icons/sl";
import { assigentDummy } from "../../utils/dashboard/dummys";
import CurrentAssignment from "./CurrentAssignment";

function HomeWork() {
  const getAssignments = () => {
    return assigentDummy.map((current, index) => <CurrentAssignment current={current} key={index}/>);
  };

  return (
    <div className="w-full h-[30%] bg-white gap-[10%] rounded-[5px] p-[5%] flex flex-col">
      <div className="w-full flex justify-between">
        <h5 className="font-semibold text-gray-600 text-md">Home Work</h5>
        <SlOptions className="cursor-pointer"/>
      </div>

      <ul className="w-full flex flex-col gap-[15px]">{getAssignments()}</ul>
    </div>
  );
}

export default memo(HomeWork);

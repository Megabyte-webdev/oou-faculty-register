import React, { memo } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressPieChart() {
  return (
    <div className="w-full h-full rounded-[10px] bg-gray-300 flex flex-col items-center p-[10px]">
      {/* Updated styles for responsiveness */}
      <div className="w-full flex justify-center items-center">
        {/* Set a responsive wrapper for the CircularProgressbar */}
        <div className="w-[120px]">
          <CircularProgressbar
            value={50}
            styles={buildStyles({
              textColor: "#313131",
              textSize: "20px",
              pathColor: "#313131",
              trailColor: "#f3f4f6",
            })}
            text={`${50}%`}
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-[8px] text-center">
        <h6 className="font-semibold text-md text-customBrown">My Progress</h6>
        <p className="font-normal text-customBrown text-sm px-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </p>
        <button className="py-[5px] w-[80%] bg-[#4cbc9a] text-white text-sm rounded-[5px] hover:scale-105 duration-150 font-medium">
          More Details
        </button>
      </div>
    </div>
  );
}

export default memo(ProgressPieChart);

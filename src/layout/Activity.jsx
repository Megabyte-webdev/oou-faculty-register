import { useState } from "react";
import ActivityNavBar from "../components/activity/ActivityNavBar";
import { activityNavStates } from "../utils/constants";
import { Outlet } from "react-router-dom";
import {Helmet} from 'react-helmet'


function Activity() {
 const [navState, setNavState] = useState(activityNavStates.you)

 return (
    <section className="flex flex-col w-full h-full gap-[5%] mb-[10px] py-[2%] overflow-y-auto px-[2%] items-start ">
      <Helmet>
        <title>Mayrahkee - Africa | Activity</title>
      </Helmet>
      
        <ActivityNavBar navState={navState} setNavState={setNavState}/>
       <Outlet/>
    </section>
  );
}

export default Activity;

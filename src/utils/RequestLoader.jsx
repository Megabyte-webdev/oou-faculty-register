import React, { useEffect, useRef } from "react";
import { ScaleLoader } from "react-spinners";
import ScienceTools from "../assets/anim/science-tools.json";
import Lottie from "lottie-react";

function RequestLoader() {
  const lottieRef = useRef();


  useEffect(() => {
    if(lottieRef){

        lottieRef.current.setSpeed(1.5);
    }
  }, [lottieRef]);

  return (
    <main className="w-full h-[50%] flex justify-center items-center">
      <Lottie
        lottieRef={lottieRef}
        style={{ height: "70%" }}
        animationData={ScienceTools}
      />
    </main>
  );
}

export default RequestLoader;

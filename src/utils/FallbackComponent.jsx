import React, { useEffect, useRef } from "react";
import { ScaleLoader } from "react-spinners";
import ScienceTools from "../assets/anim/science-tools.json";
import Lottie from "lottie-react";

function FallbackComponent() {
  const lottieRef = useRef();


  useEffect(() => {
    if(lottieRef){

        lottieRef.current.setSpeed(1.5);
    }
  }, [lottieRef]);

  return (
    <main className="w-full h-screen bg-green/95 flex justify-center items-center">
      <Lottie
        lottieRef={lottieRef}
        style={{ height: "40%" }}
        animationData={ScienceTools}
      />
    </main>
  );
}

export default FallbackComponent;

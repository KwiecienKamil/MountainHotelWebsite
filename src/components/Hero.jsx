import React from "react";
import hotelBackgroundVideo from "../assets/heroVideo.mp4";

const Hero = () => {
  return (
    <>
      <div className="relative h-[800px] overflow-hidden">
        <video autoPlay loop muted>
          <source src={hotelBackgroundVideo} type="video/mp4" />
        </video>
      </div>
      <div className="absolute w-full h-[100px] bottom-8 left-0 bg-accDark flex items-center justify-center gap-4 shadow-md">
        <h2 className="text-white font-semibold">
          Book Now<br></br>
          Your Ideal<br></br>
          <span className="underline">stay</span>
        </h2>
      </div>
    </>
  );
};

export default Hero;

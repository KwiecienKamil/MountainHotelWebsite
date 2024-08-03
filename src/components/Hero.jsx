import React from "react";
import hotelBackgroundVideo from "../assets/heroVideo.mp4";

const Hero = () => {
  return (
    <div className="relative">
      <video autoPlay loop muted>
        <source src={hotelBackgroundVideo} type="video/mp4" />
      </video>
      <div className="absolute w-full h-[200px] bottom-0 left-0 bg-acc flex items-center justify-center gap-4">
        <h2 className="text-white font-semibold">
          Book Now<br></br>
          Your Ideal<br></br>
          <span className="underline">stay</span>
        </h2>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import hotelBackgroundVideo from "../assets/heroVideo.mp4";

const Hero = () => {
  return (
    <div>
      <video autoPlay loop muted>
        <source src={hotelBackgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;

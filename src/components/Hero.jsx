import React from "react";
import Booking from "./Booking";
import HeroBackgroundVideo from "./ui/HeroBackgroundVideo";
import HeroHeading from "./ui/HeroHeading";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center">
        <HeroBackgroundVideo />
        <HeroHeading />
        <Booking />
      </div>
    </>
  );
};

export default Hero;

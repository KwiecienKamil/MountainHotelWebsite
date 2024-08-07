import React from "react";
import Booking from "./Booking";
import HeroBackgroundVideo from "../components/ui/HeroBackgroundVideo";
import HeroHeading from "../components/ui/HeroHeading";

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

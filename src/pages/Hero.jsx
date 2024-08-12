import React from "react";
import Booking from "./Booking";
import HeroBackgroundVideo from "../components/ui/HeroBackgroundVideo";
import HeroHeading from "../components/ui/HeroHeading";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center bg-dark">
        <HeroBackgroundVideo />
        <HeroHeading />
      </div>
    </>
  );
};

export default Hero;

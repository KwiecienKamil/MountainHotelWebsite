import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaRegCalendarPlus } from "react-icons/fa6";
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

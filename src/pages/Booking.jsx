import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaRegCalendarXmark } from "react-icons/fa6";
import { FaPersonCircleCheck } from "react-icons/fa6";
import Logo from "../assets/Logo.png";

const Booking = () => {
  return (
    <div className="h-screen w-full bg-no-repeat bg-bookingBackground bg-cover brightness-[60%] grid place-items-center">
      <div className="bg-light">
        <div className="flex items-center justify-between px-[.3rem]">
          <img src={Logo} alt="Mountain Hideaway" className="w-[12rem]" />
          <span>Reserve Your stay</span>
        </div>
      </div>
    </div>
  );
};

export default Booking;

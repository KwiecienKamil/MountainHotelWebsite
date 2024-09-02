import React from "react";
import Logo from "../assets/Logo.png";
import { MdOutlineModeNight } from "react-icons/md";

const Booking = () => {
  return (
    <div className="h-screen w-full bg-no-repeat bg-bookingBackground bg-cover grid place-items-center">
      <div className="bg-white p-4 rounded-lg">
        <div className="flex items-center justify-center px-[.3rem]">
          <img src={Logo} alt="Mountain Hideaway" className="w-[12rem]" />
        </div>
        <div className="flex items-center justify-between gap-12 mt-4">
          <div>
            <p>Check-In</p>
            <input
              type="date"
              className="mt-1 border-[1px] border-dark rounded-lg px-1"
            />
          </div>
          <div>
            <p>Duration</p>
            <button className="flex items-center px-2 py-1 bg-accLight rounded-lg text-white">
              <span>2 nights</span>
              <MdOutlineModeNight className="ml-4" />
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Booking;

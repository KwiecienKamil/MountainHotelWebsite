import React from "react";
import Logo from "../assets/Logo.png";
import { MdOutlineModeNight } from "react-icons/md";

const Booking = () => {
  return (
    <div className="h-screen w-full bg-no-repeat bg-bookingBackground bg-cover grid place-items-center bg-brightness-[60%] text-light">
      <div className="bg-dark p-6 rounded-lg">
        <div className="flex items-center justify-center px-[.3rem]">
          <img src={Logo} alt="Mountain Hideaway" className="w-[14rem]" />
        </div>
        <div className="flex items-center justify-between gap-12 mt-4">
          <div>
            <p>Check-In</p>
            <input
              type="date"
              className="mt-1 p-[.2rem] border-[1px] border-dark rounded-lg px-1 text-dark"
            />
          </div>
          <div>
            <p>Duration</p>
            <button className="flex items-center gap-1 px-2 py-[.4rem] bg-light rounded-lg text-dark mt-1">
              <span>2 nights</span>
              <MdOutlineModeNight />
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="mt-8 px-2 py-1 bg-accLight text-light rounded-lg">
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;

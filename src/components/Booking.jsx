import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaRegCalendarXmark } from "react-icons/fa6";

const Booking = () => {
  return (
    <div className="absolute w-full bottom-40 left-0 flex items-center justify-center z-10 ">
      <div className="flex items-center justify-center gap-12 bg-white rounded-l-xl px-8 py-4">
        <div className="flex items-center gap-12">
          <h2 className="text-black font-semibold">
            Book Now<br></br>
            Your Ideal<br></br>
            <span className="underline">stay</span>
          </h2>
          <button className="flex items-center gap-2">
            <FaRegCalendarCheck />
            Check-In Date
          </button>
          <button className="flex items-center gap-2">
            <FaRegCalendarXmark />
            Check-Out Date
          </button>
        </div>
      </div>
      <button className="p-10 bg-accLight rounded-r-xl font-semibold hover:brightness-90 duration-300">
        Check Availability
      </button>
    </div>
  );
};

export default Booking;

import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaRegCalendarXmark } from "react-icons/fa6";
import { FaPersonCircleCheck } from "react-icons/fa6";

const Booking = () => {
  return (
    <div className="flex items-center justify-center z-20 text-sm md:text-md bg-white">
      <div className="flex items-center justify-center gap-12 bg-white rounded-l-xl px-8 py-2">
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
          <button className="flex items-center gap-2">
            <FaPersonCircleCheck />1 Person
          </button>
        </div>
      </div>
      <button className="p-7 bg-accLight rounded-r-xl font-semibold hover:brightness-90 duration-300 text-sm md:text-md">
        Check Availability
      </button>
    </div>
  );
};

export default Booking;

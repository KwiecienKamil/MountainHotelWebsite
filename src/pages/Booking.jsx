import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import Reveal from "../components/ui/Reveal";
import { AiOutlineLoading } from "react-icons/ai";
import { toast } from "react-toastify";

const Booking = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [loading, setLoading] = useState(false);

  const CheckRoomsAvailability = () => {
    if (checkInDate.length === 0 || checkOutDate.length === 0) {
      toast.error("Add check-in/out dates");
    } else {
      setLoading(true);
    }
  };

  return (
    <div className="h-screen w-full bg-no-repeat bg-bookingBackground bg-cover grid place-items-center bg-brightness-[60%] text-light">
      <Reveal>
        <div className="bg-dark p-4 screen3:p-6 rounded-lg">
          <div className="flex items-center justify-center px-[.3rem]">
            <img src={Logo} alt="Mountain Hideaway" className="w-[14rem]" />
          </div>
          <div className="flex items-center justify-between gap-12 mt-4 ">
            <div>
              <p>Check-In</p>
              <input
                type="date"
                className="mt-1 p-[.2rem] border-[1px] border-dark rounded-lg px-1 text-dark cursor-pointer"
                onChange={(event) => setCheckInDate(event.target.value)}
              />
            </div>
            <div>
              <p>Check-Out</p>
              <input
                type="date"
                className="mt-1 p-[.2rem] border-[1px] border-dark rounded-lg px-1 text-dark cursor-pointer"
                onChange={(event) => setCheckOutDate(event.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <a
              href="/"
              className="px-2 py-1 bg-gray-500 rounded-lg hover:opacity-[70%] duration-300"
            >
              Cancel
            </a>
            <button
              className=" px-2 py-1 bg-accLight text-light rounded-lg hover:opacity-[70%] duration-300"
              onClick={CheckRoomsAvailability}
            >
              {loading ? (
                <AiOutlineLoading className="animate-spin text-xl" />
              ) : (
                <p>Check Availability</p>
              )}
            </button>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Booking;

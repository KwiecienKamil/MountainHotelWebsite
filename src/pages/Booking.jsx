import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import Reveal from "../components/ui/Reveal";
import { AiOutlineLoading } from "react-icons/ai";
import { toast } from "react-toastify";
import {
  availableRooms,
  formattedTodaysDate,
  todaysDate,
} from "../utils/Helpers";
import dayjs from "dayjs";

const Booking = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [showRooms, setShowRooms] = useState(false);

  // Checking if user saved date in future
  const isNextDateAfterTodaysDate = (todaysDate, checkInDate) => {
    const today = dayjs();
    const nextDate = dayjs(checkInDate);
    const comparisonDate = dayjs(todaysDate);
    return nextDate.isAfter(comparisonDate);
  };

  const CheckRoomsAvailability = () => {
    if (checkInDate.length === 0 || checkOutDate.length === 0) {
      toast.error("Add check-in/out dates");
    } else {
      setLoading(true);
      setTimeout(() => {
        isNextDateAfterTodaysDate(todaysDate, checkInDate);
        setShowRooms(true);
        setLoading(false);
      }, "2000");
    }
  };

  return (
    <div className="h-screen w-full bg-no-repeat bg-bookingBackground bg-cover flex items-center justify-center flex-col gap-4 bg-brightness-[60%] text-light">
      <Reveal>
        <div className="bg-dark p-4 screen3:p-6 rounded-lg">
          <div className="flex items-center justify-center px-[.3rem]">
            <img src={Logo} alt="Mountain Hideaway" className="w-[14rem]" />
          </div>
          <h1 className="text-center font-semibold pr-2">
            {formattedTodaysDate}
          </h1>
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
      <div className="flex items-center gap-8">
        {availableRooms.map((room) => (
          <div>
            <img className="w-28" src={room.image} alt="w/e" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;

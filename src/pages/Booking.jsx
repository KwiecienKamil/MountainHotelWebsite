import React, { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { toast } from "react-toastify";
import {
  availableRooms,
  formattedTodaysDate,
  todaysDate,
} from "../utils/Helpers";
import dayjs from "dayjs";
import RoomCard from "../components/ui/RoomCard";
import Logo from "../assets/Logo.png";

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
    <div className="min-h-screen flex items-center flex-col text-light bg-no-repeat bg-bookingBackground bg-cover bg-brightness-[60%] font-mont">
      <div className="flex flex-col screen3:flex-row items-center screen3:justify-center screen3:gap-8 w-full bg-dark px-[4rem] z-10 pb-4 screen3:pb-0">
        <div className="flex flex-col screen3:flex-row screen3:items-center gap-8 py-4 screen3:py-8">
          <div className="relative w-[300px] flex items-center  gap-4 text-sm screen5:text-md">
            <p>Check-In</p>
            <input
              type="date"
              className="w-[50%] p-[.1rem] border-[1px] border-dark rounded-lg px-1 text-dark cursor-pointer"
              onChange={(event) => setCheckInDate(event.target.value)}
            />
          </div>
          <div className="w-[300px] flex items-center gap-4 text-sm screen5:text-md">
            <p>Check-Out</p>
            <input
              type="date"
              className="w-[50%] p-[.1rem] border-[1px] border-dark rounded-lg px-1 text-dark cursor-pointer"
              onChange={(event) => setCheckOutDate(event.target.value)}
            />
          </div>
        </div>
        <button
          className=" px-2 py-1 bg-accLight text-light rounded-lg hover:opacity-[70%] duration-300"
          onClick={CheckRoomsAvailability}
        >
          {loading ? (
            <AiOutlineLoading className="animate-spin text-lg screen5:text-xl" />
          ) : (
            <p className="text-sm screen5:text-md">Search Rooms</p>
          )}
        </button>
      </div>
      <div className="min-h-screen w-[80%] screen6:w-[60%] bg-white z-0 flex justify-center ">
        {showRooms ? (
          <div className="w-full relative flex flex-col gap-4">
            {availableRooms.map((room) => (
              <RoomCard
                src={room.image}
                title={room.title}
                price={room.price}
                rating={room.rating}
                description={room.description}
              />
            ))}
          </div>
        ) : (
          <h2 className="text-gray-500 text-lg">
            Pick the perfect dates for your stay and click "Search Rooms"
          </h2>
        )}
      </div>
    </div>
  );
};

export default Booking;

import React from "react";
import RoomRating from "./RoomRating";

const RoomCard = ({ src, price, title, rating, description }) => {
  return (
    <div className="flex flex-col screen3:flex-row justify-between text-dark shadow-md w-full px-2 py-4">
      <div className="flex justify-center screen3:justify-normal gap-4 w-full">
        <img src={src} alt="alt" className="w-[9rem] screen6:w-[11rem]" />
        <div className="flex flex-col gap-2">
          <p className="text-md screen5:text-xl font-semibold">{title}</p>
          <RoomRating Rating={rating} />
          <p className="line-clamp-3 text-sm screen5:text-md max-w-[10rem] screen3:w-[14rem]">
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center screen3:justify-between px-[1.5rem] py-2 w-full relative">
        <div className="flex items-center gap-2 py-4"></div>
        <div className="h-full screen3:border-l-[1px] border-gray-400 ">
          <div className="h-full flex items-center screen3:flex-col gap-4 screen3:gap-0 justify-between px-2 py-2">
            <p className="font-semibold text-sm screen5:text-md">{`${price}$ / night`}</p>
            <button className="px-8 py-1 bg-accLight rounded-sm text-light font-semibold text-sm screen5:text-md">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;

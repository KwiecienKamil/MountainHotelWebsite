import React from "react";
import RoomRating from "./RoomRating";

const RoomCard = ({ src, price, title, rating, description }) => {
  return (
    <div className="flex justify-between text-dark shadow-md w-full px-2 py-2">
      <div className="flex gap-4 w-full">
        <img src={src} alt="alt" className="w-[14rem]" />
        <div className="flex flex-col gap-2">
          <p className="text-xl font-semibold">{title}</p>
          <RoomRating Rating={rating} />
          <p className="line-clamp-3">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between px-[1.5rem] py-2 w-full relative">
        <div className="flex items-center gap-2 py-4"></div>
        <div className="h-full w-[12rem] border-l-[1px] border-gray-400">
          <div className="h-full flex flex-col justify-between px-2 py-2">
            <p className="font-semibold">{`${price}$ / night`}</p>
            <button className="w-full px-3 py-1 bg-accLight rounded-sm text-light font-semibold">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;

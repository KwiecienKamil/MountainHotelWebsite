import React from "react";
import RoomRating from "./RoomRating";

const RoomCard = ({ src, price, title, rating }) => {
  return (
    <div className="flex justify-between text-dark w-full  shadow-md">
      <div className="flex gap-4 text-xl font-semibold">
        <img src={src} alt="alt" className="w-[14rem]" />
        <div className="">
          <p>{title}</p>
          <RoomRating Rating={rating} />
        </div>
      </div>
      <div className="flex items-center justify-between px-[1.5rem]">
        <div className="flex items-center gap-2 py-4">
          <p>{`${price}$`}</p>
        </div>
        <div className="text-right">
          <button className="px-3 py-1 bg-accLight rounded-sm text-light font-semibold">
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;

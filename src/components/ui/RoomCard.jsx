import React from "react";

const RoomCard = ({ src, price, title }) => {
  return (
    <div className="bg-dark text-light w-1/4">
      <img src={src} alt="alt" className="w-[30rem]" />
      <div className="flex items-center justify-between px-[1.5rem]">
        <div className="flex items-center gap-2 text-xl font-semibold py-4">
          <p>{`${price}$`}</p>
          <p>{title}</p>
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

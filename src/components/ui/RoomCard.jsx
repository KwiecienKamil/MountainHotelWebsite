import React from "react";

const RoomCard = ({ src, price, title }) => {
  return (
    <div className="bg-dark text-accLight w-1/4">
      <img src={src} alt="alt" className="w-" />
      <div className="flex items-center justify-between px-4 text-xl font-semibold py-4">
        <p>{price}</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default RoomCard;

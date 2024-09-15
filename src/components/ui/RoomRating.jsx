import React from "react";
import { FaStar } from "react-icons/fa6";

const RoomRating = ({ Rating }) => {
  const renderStars = (Rating) => {
    return Array.from({ length: Rating }, (_, index) => <FaStar key={index} />);
  };

  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {renderStars(Rating)}
    </div>
  );
};

export default RoomRating;

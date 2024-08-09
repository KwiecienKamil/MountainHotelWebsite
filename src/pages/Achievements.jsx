import React from "react";
import { FaStar } from "react-icons/fa";
import achievements from "../assets/achievements.png";

const Achievements = () => {
  return (
    <div className="bg-light mb-20 w-full px-[9rem] text-gray-500 flex items-center justify-between">
      <div>
        <h3 className="text-3xl pb-6 border-b-[1px] border-gray-500">
          Elevating Luxury and Comfort Since 1995
        </h3>
        <div className="flex items-center gap-4 mt-6">
          <p>Five Star Hotel</p>
          <div className="flex items-center gap-2 text-3xl">
            <span className="text-yellow-400">
              <FaStar />
            </span>
            <span className="text-yellow-400">
              <FaStar />
            </span>
            <span className="text-yellow-400">
              <FaStar />
            </span>
            <span className="text-yellow-400">
              <FaStar />
            </span>
            <span className="text-yellow-400">
              <FaStar />
            </span>
          </div>
          <span className="text-2xl">5.0</span>
        </div>
      </div>
      <img src={achievements} alt="Achievements" className="w-[500px]" />
    </div>
  );
};

export default Achievements;

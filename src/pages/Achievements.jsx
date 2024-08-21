import React from "react";
import { FaStar } from "react-icons/fa";
import achievements from "../assets/achievements.png";

const Achievements = () => {
  return (
    <div className="bg-light mb-20 w-full px-[2rem] screen4:px-[9rem] text-gray-500 flex items-center justify-between flex-col gap-16 scree6:gap-0 screen6:flex-row ">
      <div>
        <h3 className="text-sm screen1:text-md screen4:text-xl screen8:text-3xl pb-6 border-b-[1px] border-gray-500">
          Elevating Luxury and Comfort Since 1995
        </h3>
        <div className="flex items-center gap-4 mt-6 text-xs screen1:text-sm screen4:text-md">
          <p>Five Star Hotel</p>
          <div className="flex items-center gap-2 text-md screen1:text-xl screen4:text-3xl">
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
          <span className="text-sm screen1:text-lg screen4:text-2xl">5.0</span>
        </div>
      </div>
      <img
        src={achievements}
        alt="Achievements"
        className=" screen1:w-[85%]  screen6:w-[400px] screen7:w-[500px] "
      />
    </div>
  );
};

export default Achievements;

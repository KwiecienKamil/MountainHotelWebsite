import React from "react";
import wellnessImg3 from "../assets/Wellness3.png";
import { MdOutlinePool } from "react-icons/md";
import { BiSolidDrink } from "react-icons/bi";
import { CgGym } from "react-icons/cg";
import { LiaMountainSolid } from "react-icons/lia";
import { PiPersonSimpleHikeFill } from "react-icons/pi";

const Wellness = () => {
  return (
    <div
      className="flex justify-between flex-col screen5:flex-row px-[2rem] screen3:px-[5rem] screen6:px-[9rem] text-dark mt-8"
      id="wellness"
    >
      <div className="flex flex-col items-center screen5:items-start justify-center px-8 mt-4">
        <h5 className="screen5:text-start text-center text-lg screen2:text-2xl screen4:text-5xl font-bold">
          Find your perfect balance
        </h5>
        <p className="screen5:text-start text-center mt-2 text-xs screen2:text-sm screen4:text-md">
          We believe in offering our guests a serene and rejuvenating
          environment where they can relax, recharge, and connect with both
          nature and themselves.
        </p>
        <div className="flex items-center gap-4 my-8 text-xl screen3:text-3xl text-accLight">
          <MdOutlinePool />
          <BiSolidDrink />
          <CgGym />
          <LiaMountainSolid />
          <PiPersonSimpleHikeFill />
        </div>
      </div>
      <img
        src={wellnessImg3}
        alt="Woman Hiking"
        className="w-full screen5:max-w-[30rem]"
      />
    </div>
  );
};

export default Wellness;

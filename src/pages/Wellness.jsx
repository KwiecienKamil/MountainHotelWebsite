import React from "react";
import wellnessImg from "../assets/Wellness.png";
import wellnessImg2 from "../assets/Wellness2.png";
import { MdOutlinePool } from "react-icons/md";
import { BiSolidDrink } from "react-icons/bi";
import { CgGym } from "react-icons/cg";
import { LiaMountainSolid } from "react-icons/lia";
import { PiPersonSimpleHikeFill } from "react-icons/pi";

const Wellness = () => {
  return (
    <div className="flex justify-between px-[9rem] text-dark">
      <img src={wellnessImg} alt="Woman Hiking" className="w-[400px]" />
      <div className="flex flex-col items-center justify-center px-8 mt-4">
        <h5 className="text-center text-5xl font-bold">
          Find your perfect balance
        </h5>
        <p className="text-center mt-2">
          We believe in offering our guests a serene and rejuvenating
          environment where they can relax, recharge, and connect with both
          nature and themselves.
        </p>
        <div className="flex items-center gap-4 mt-8 text-3xl text-accLight">
          <MdOutlinePool />
          <BiSolidDrink />
          <CgGym />
          <LiaMountainSolid />
          <PiPersonSimpleHikeFill />
        </div>
      </div>
      <img src={wellnessImg2} alt="pool" className="w-[400px]" />
    </div>
  );
};

export default Wellness;

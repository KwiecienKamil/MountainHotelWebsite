import React from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="bg-navBackground h-[80px] w-full bg-center flex items-center justify-between px-[4rem]">
      <div className="flex items-center gap-4">
        <a href="#" className="font-semibold z-10">
          Rooms
        </a>
        <a href="#" className="font-semibold z-10">
          Gastronomy
        </a>
        <a href="#" className="font-semibold z-10">
          Wellness
        </a>
        <a href="#" className="font-semibold z-10">
          Gallery
        </a>
      </div>
      <img src={Logo} alt="Hotel Logo" className="pr-24" />
      <button className="font-semibold px-4 py-2 bg-[#333945] text-white mt-1">
        Book Now
      </button>
    </div>
  );
};

export default Navbar;

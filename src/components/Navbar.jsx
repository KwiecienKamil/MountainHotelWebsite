import React from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="bg-transparent h-[80px] w-full bg-center flex items-center justify-between px-[9rem] fixed z-10">
      <img src={Logo} alt="Hotel Logo" />
      <div className="flex items-center gap-4 text-xl mt-1 text-white pr-4">
        <a href="#" className="z-10">
          Rooms
        </a>
        <a href="#" className="z-10">
          Gastronomy
        </a>
        <a href="#" className="z-10">
          Wellness
        </a>
        <a href="#" className="z-10">
          Gallery
        </a>
      </div>
      <button className="font-semibold px-4 py-2 bg-white text-black mt-1 rounded-xl">
        Book Now
      </button>
    </div>
  );
};

export default Navbar;

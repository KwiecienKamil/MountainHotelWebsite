import React from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="bg-navBackground h-[94px] bg-center flex items-center justify-between px-[6rem] shadow-md">
      <div className="flex items-center gap-2"></div>
      <img src={Logo} alt="Hotel Logo" />
      <button className="font-semibold px-4 py-2 bg-[#333945] text-white mt-1">
        Book Now
      </button>
    </div>
  );
};

export default Navbar;

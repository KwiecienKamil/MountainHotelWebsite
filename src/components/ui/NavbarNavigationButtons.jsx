import React from "react";
import { FaBars } from "react-icons/fa6";

const NavbarNavigationButtons = ({ openNavigation, openResponsiveNav }) => {
  return (
    <>
      <div
        className={`fixed left-0 ${
          openNavigation ? "-top-[1400px]" : "top-0"
        } `}
      >
        <a href="#" className="z-10 hover:brightness-75 duration-300">
          Rooms
        </a>
        <a href="#" className="z-10 hover:brightness-75 duration-300">
          Gastronomy
        </a>
        <a href="#" className="z-10 hover:brightness-75 duration-300">
          Wellness
        </a>
        <a href="#" className="z-10 hover:brightness-75 duration-300">
          Gallery
        </a>
        <button onClick={openResponsiveNav}>X</button>
      </div>
      <button className="font-semibold px-4 py-2 bg-accLight text-black mt-1 rounded-xl hover:brightness-90 duration-300 hidden lg:block">
        Book Now
      </button>
      <button
        className="text-dark md:text-2xl block lg:hidden"
        onClick={openResponsiveNav}
      >
        <FaBars />
      </button>
    </>
  );
};

export default NavbarNavigationButtons;

import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";

import { FaCircleArrowUp } from "react-icons/fa6";

const NavbarNavigationButtons = ({
  openNavigation,
  openResponsiveNav,
  isScrolled,
}) => {
  return (
    <>
      <div
        className={`absolute lg:static left-0 ${
          openNavigation ? "top-20" : "-top-[1000px]"
        }  w-full transition-all duration-500 
          text-dark flex items-center justify-center lg:justify-end 
          gap-8 font-semibold text-md `}
      >
        <div className="flex items-center gap-8">
          <div
            className={`relative flex items-center gap-6 px-8 py-4 lg:p-0 rounded-full lg:bg-transparent  bg-light shadow-lg lg:shadow-none ${
              isScrolled ? `text-dark` : `text-dark lg:text-light `
            }`}
          >
            <a href="#" className="hover:brightness-75 duration-300">
              Rooms
            </a>
            <a href="#" className="hover:brightness-75 duration-300">
              Gastronomy
            </a>
            <a href="#" className="hover:brightness-75 duration-300">
              Wellness
            </a>
            <a href="#" className="hover:brightness-75 duration-300">
              Gallery
            </a>
            <button
              className="absolute -bottom-3 left-[200px] lg:hidden text-dark text-2xl rounded-full"
              onClick={openResponsiveNav}
            >
              <FaCircleArrowUp />
            </button>
          </div>
          <button className="font-semibold px-4 py-2 bg-accLight text-black  rounded-xl hover:brightness-90 duration-300 hidden lg:block">
            Book Now
          </button>
        </div>
      </div>
      <button
        className="text-light md:text-2xl block lg:hidden"
        onClick={openResponsiveNav}
      >
        <FaBars />
      </button>
    </>
  );
};

export default NavbarNavigationButtons;

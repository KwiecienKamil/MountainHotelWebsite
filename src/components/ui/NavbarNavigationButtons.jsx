import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";

import { FaCircleArrowUp } from "react-icons/fa6";
import { Link } from "react-scroll";

const NavbarNavigationButtons = ({
  openNavigation,
  openResponsiveNav,
  isScrolled,
}) => {
  return (
    <>
      <div
        className={`absolute screen6:static left-0 ${
          openNavigation ? "top-20" : "-top-[1000px]"
        }  w-full transition-all duration-500 
          text-dark flex items-center justify-center screen6:justify-end 
          gap-8 font-semibold text-md `}
      >
        <div className="flex items-center gap-8">
          <div
            className={`relative flex items-center gap-6 px-8 py-4 lg:p-0 rounded-full screen5:bg-transparent  bg-light shadow-lg screen5:shadow-none ${
              isScrolled ? `text-dark` : `text-dark screen5:text-light `
            }`}
          >
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={800}
              className="hover:brightness-75 duration-300 cursor-pointer"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="rooms"
              spy={true}
              smooth={true}
              offset={-150}
              duration={800}
              className="hover:brightness-75 duration-300 cursor-pointer"
            >
              Rooms
            </Link>
            <Link
              activeClass="active"
              to="gastronomy"
              spy={true}
              smooth={true}
              offset={50}
              duration={800}
              className="hover:brightness-75 duration-300 cursor-pointer"
            >
              Gastronomy
            </Link>
            <Link
              activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              offset={-150}
              duration={800}
              className="hover:brightness-75 duration-300 cursor-pointer"
            >
              Gallery
            </Link>
            <Link
              activeClass="active"
              to="location"
              spy={true}
              smooth={true}
              offset={-150}
              duration={800}
              className="hover:brightness-75 duration-300 cursor-pointer"
            >
              Location
            </Link>
            <button
              className="absolute -bottom-3 left-[200px] screen5:hidden text-dark text-2xl rounded-full"
              onClick={openResponsiveNav}
            >
              <FaCircleArrowUp />
            </button>
          </div>
          <button className="font-semibold px-4 py-2 bg-accLight text-black  rounded-xl hover:brightness-90 duration-300 hidden screen6:block">
            Book Now
          </button>
        </div>
      </div>
      <button
        className={`md:text-3xl block screen6:hidden  ${
          isScrolled ? `text-accLight` : `text-light`
        }`}
        onClick={openResponsiveNav}
      >
        <FaBars />
      </button>
    </>
  );
};

export default NavbarNavigationButtons;

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
          openNavigation ? "top-12" : "-top-[1000px]"
        }  w-full transition-all duration-500 
          text-dark flex items-center justify-center screen6:justify-end 
          gap-8 font-semibold text-md `}
      >
        <div className="flex items-center gap-8">
          <div
            className={`relative flex items-center gap-6 px-8 py-4 lg:p-0 rounded-full text-lg  screen6:bg-transparent  shadow-lg screen5:shadow-none ${
              isScrolled ? `text-light screen6:text-dark ` : `text-light`
            }`}
          >
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={800}
              className={`duration-300 cursor-pointer
                ${isScrolled ? `hover:text-black` : `hover:brightness-75`}
                `}
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
              className={`duration-300 cursor-pointer
                ${isScrolled ? `hover:text-black` : `hover:brightness-75`}
                `}
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
              className={`duration-300 cursor-pointer
                ${isScrolled ? `hover:text-black` : `hover:brightness-75`}
                `}
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
              className={`duration-300 cursor-pointer
                ${isScrolled ? `hover:text-black` : `hover:brightness-75`}
                `}
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
              className={`duration-300 cursor-pointer
                ${isScrolled ? `hover:text-black` : `hover:brightness-75`}
                `}
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
          <a
            href="/booking"
            className="font-semibold px-4 py-2 bg-accLight text-black  rounded-xl hover:opacity-[70%] duration-300 hidden screen6:block"
          >
            Book Now
          </a>
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

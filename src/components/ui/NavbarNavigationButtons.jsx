import React from "react";

const NavbarNavigationButtons = () => {
  return (
    <>
      <div className="flex items-center gap-4 text-xl mt-1 pr-8 text-dark ">
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
      </div>
      <button className="font-semibold px-4 py-2 bg-accLight text-black mt-1 rounded-xl hover:brightness-90 duration-300">
        Book Now
      </button>
    </>
  );
};

export default NavbarNavigationButtons;

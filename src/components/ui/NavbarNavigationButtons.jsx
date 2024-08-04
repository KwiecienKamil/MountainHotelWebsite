import React from "react";

const NavbarNavigationButtons = () => {
  return (
    <div className="flex items-center gap-4 text-xl mt-1 text-white pr-4">
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
  );
};

export default NavbarNavigationButtons;

import React from "react";
import Logo from "../assets/Logo.png";
import NavbarNavigationButtons from "./ui/NavbarNavigationButtons";
import ButtonLight from "./ui/ButtonLight";

const Navbar = () => {
  return (
    <div className="bg-transparent h-[80px] w-full bg-center flex items-center justify-between px-[9rem] fixed z-10">
      <img src={Logo} alt="Hotel Logo" />
      <NavbarNavigationButtons />
      <ButtonLight title="Book Now" />
    </div>
  );
};

export default Navbar;

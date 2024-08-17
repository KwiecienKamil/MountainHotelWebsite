import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/Logo.png";
import NavbarNavigationButtons from "../components/ui/NavbarNavigationButtons";

const Navbar = ({ openNavigation, openResponsiveNav }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    if (position > 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`z-20 py-4 w-full flex items-center justify-between px-2 xs:px-[5em] lg:px-[9em] fixed transition-colors duration-300   ${
        isScrolled
          ? "bg-light text-dark shadow-lg"
          : "bg-transparent text-light "
      }`}
    >
      <img src={Logo} alt="Hotel Logo" className="w-[150px] md:w-auto" />
      <NavbarNavigationButtons
        openResponsiveNav={openResponsiveNav}
        openNavigation={openNavigation}
        isScrolled={isScrolled}
      />
    </div>
  );
};

export default Navbar;

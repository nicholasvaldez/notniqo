import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { scrollToSection } from "../../utils/scrollUtils";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-8 right-8 z-50">
      <div className="relative">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={32}
          color="#000000"
          duration={0.6}
          easing="ease-in-out"
          rounded
          label="Show menu"
        />

        {/* Navigation Items */}
        <div className={`absolute top-12 right-0 flex flex-col items-end text-sm space-y-3 font-bold text-black transition-all duration-500 ${
          isOpen ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 translate-x-8 pointer-events-none'
        }`}>
          <button
            onClick={() => {
              scrollToSection("home");
              setIsOpen(false);
            }}
            className="hover:opacity-70 transition-opacity bg-none border-none p-0 cursor-pointer"
          >
            HOME
          </button>
          <button
            onClick={() => {
              scrollToSection("about");
              setIsOpen(false);
            }}
            className="hover:opacity-70 transition-opacity bg-none border-none p-0 cursor-pointer"
          >
            ABOUT
          </button>
          <button
            onClick={() => {
              scrollToSection("updates");
              setIsOpen(false);
            }}
            className="hover:opacity-70 transition-opacity bg-none border-none p-0 cursor-pointer"
          >
            UPDATES
          </button>
          <button
            onClick={() => {
              scrollToSection("contact");
              setIsOpen(false);
            }}
            className="hover:opacity-70 transition-opacity bg-none border-none p-0 cursor-pointer"
          >
            CONTACT
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;

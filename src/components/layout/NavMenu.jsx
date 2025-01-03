import React from "react";
import { Menu } from "lucide-react";
import { scrollToSection } from "../../utils/scrollUtils";

const NavMenu = () => {
  return (
    <nav className="fixed bottom-8 right-8 z-50">
      <div className="relative hover-menu">
        <Menu size={24} className="hamburger cursor-pointer text-zinc-600" />

        <div className="menu-items flex flex-col items-end text-sm space-y-1 font-bold text-zinc-600">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:opacity-70 transition-opacity"
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:opacity-70 transition-opacity"
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection("updates")}
            className="hover:opacity-70 transition-opacity"
          >
            GET UPDATES
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:opacity-70 transition-opacity"
          >
            CONTACT
          </button>
        </div>

        <style jsx>{`
          .hover-menu .menu-items {
            position: absolute;
            bottom: 0;
            right: 0;
            transform: translateX(100%);
            transition: transform 0.3s ease-out;
            opacity: 0;
          }

          .hover-menu:hover .menu-items {
            transform: translateX(0);
            opacity: 1;
          }

          .hover-menu:hover .hamburger {
            opacity: 0;
          }

          .hamburger {
            transition: opacity 0.3s ease-out;
          }

          .menu-items button {
            background: none;
            border: none;
            padding: 0;
            cursor: pointer;
            text-align: right;
            display: block;
            white-space: nowrap;
          }
        `}</style>
      </div>
    </nav>
  );
};

export default NavMenu;

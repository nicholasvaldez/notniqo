import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { scrollToSection } from "../../utils/scrollUtils";
import UpdatesModal from "../ui/UpdatesModal";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        }`} style={{ fontFamily: 'Inter', fontWeight: 700, letterSpacing: '-0.05em' }}>
          <button
            onClick={() => {
              // If not on homepage, navigate to it, otherwise scroll to top
              if (window.location.pathname !== '/') {
                window.location.href = '/';
              } else {
                scrollToSection("home");
              }
              setIsOpen(false);
            }}
            className="hover:opacity-70 transition-opacity bg-none border-none p-0 cursor-pointer"
          >
            HOME
          </button>
          <button
            onClick={() => {
              window.location.href = '/about';
              setIsOpen(false);
            }}
            className="hover:opacity-70 transition-opacity bg-none border-none p-0 cursor-pointer"
          >
            ABOUT
          </button>
          <button
            onClick={() => {
              setIsModalOpen(true);
              setIsOpen(false);
            }}
            className="hover:opacity-70 transition-opacity bg-none border-none p-0 cursor-pointer"
          >
            UPDATES
          </button>
          <button
            onClick={() => {
              window.location.href = '/contact';
              setIsOpen(false);
            }}
            className="hover:opacity-70 transition-opacity bg-none border-none p-0 cursor-pointer"
          >
            CONTACT
          </button>
        </div>
      </div>
      
      <UpdatesModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </nav>
  );
};

export default NavMenu;

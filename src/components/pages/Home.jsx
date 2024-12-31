import React, { useState, useEffect } from "react";

export const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showLogo, setShowLogo] = useState(false);

  // Initialize logo fade-in
  useEffect(() => {
    // Slight delay before starting the animation
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Clear version */}
      <img
        src="../../src/assets/frame-no-water-blur.png"
        alt="EXILISCOPE"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Frosted version with mask */}
      <div
        className="absolute inset-0"
        style={{
          maskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent 50px, black 100px)`,
          WebkitMaskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent 50px, black 100px)`,
        }}
      >
        <img
          src="../../src/assets/frame-frosted.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-[3000ms] ease-linear ${
          showLogo ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="../../src/assets/notniqo.svg"
          alt="Logo"
          className="w-60 h-auto" // Adjust size as needed
        />
      </div>
    </div>
  );
};

export default Home;

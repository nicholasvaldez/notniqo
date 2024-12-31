import React from "react";

const FrostedGlassContainer = ({ children }) => {
  return (
    // Container with relative positioning to hold our absolute elements
    <div className="relative w-full h-full min-h-screen bg-white">
      {/* Base container for content */}
      <div className="relative z-10 w-full h-full">{children}</div>

      {/* Overlay image with blend mode - adjust opacity as needed */}
      <div
        className="absolute inset-0 z-0 mix-blend-overlay opacity-100"
        style={{
          backgroundImage: "../../assets/fog-window.jpg",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Frosted glass effect layer */}
      <div className="absolute inset-0 z-0 bg-white/5 backdrop-blur-3xl" />
    </div>
  );
};

export default FrostedGlassContainer;

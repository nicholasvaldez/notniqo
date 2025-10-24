import { useState, useEffect, useRef } from "react";
import audioFile from "../../assets/teaser.wav";
import { animate, handleMouseMove } from "../../utils/animationUtils";
import NavMenu from "../layout/NavMenu";

export const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showLogo, setShowLogo] = useState(false);
  const audioRef = useRef(null);
  const currentPosition = useRef({ x: 0, y: 0 });
  const animationFrame = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    animationFrame.current = requestAnimationFrame(() =>
      animate(currentPosition, mousePosition, setMousePosition, animationFrame)
    );

    const handleMouseMoveWrapper = (e) => handleMouseMove(e, mousePosition);

    window.addEventListener("mousemove", handleMouseMoveWrapper);

    return () => {
      window.removeEventListener("mousemove", handleMouseMoveWrapper);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      <NavMenu />

      {/* Home Section */}
      <section id="home" className="min-h-screen relative">
        <img
          src="/frame-no-water-blur.png"
          alt="EXILISCOPE"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            maskImage: `radial-gradient(circle at ${currentPosition.current.x}px ${currentPosition.current.y}px, transparent 50px, black 100px)`,
            WebkitMaskImage: `radial-gradient(circle at ${currentPosition.current.x}px ${currentPosition.current.y}px, transparent 50px, black 100px)`,
          }}
        >
          <img
            src="/frame-frosted.png"
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
            src="/notniqo.svg"
            alt="Logo"
            className="w-60 h-auto cursor-pointer"
            onClick={() => {
              if (audioRef.current.paused) {
                audioRef.current.currentTime = 0;
                audioRef.current.play();
              } else {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
              }
            }}
          />
        </div>
        <audio ref={audioRef} src={audioFile} />
      </section>

      {/* Social Media Feed Section */}
      {/* <section
        id="socials"
        className="min-h-screen bg-white flex items-center justify-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-8 text-zinc-600">Social Media Feed</h2>
        </div>
      </section> */}

      {/* Updates Section */}
      {/* <section
        id="updates"
        className="min-h-screen bg-zinc-50 flex items-center justify-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-8 text-zinc-600">Get Updates</h2>
        </div>
      </section> */}

      {/* Contact Section */}
      {/* <section
        id="contact"
        className="min-h-screen bg-white flex items-center justify-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-8 text-zinc-600">Contact</h2>
        </div>
      </section> */}
    </div>
  );
};

export default Home;

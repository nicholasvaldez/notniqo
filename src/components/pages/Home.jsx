import { useState, useEffect, useRef } from "react"
import audioFile from "../../assets/teaser.wav"

export const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showLogo, setShowLogo] = useState(false)
  const audioRef = useRef(null)
  const currentPosition = useRef({ x: 0, y: 0 })
  const animationFrame = useRef()

  // Initialize logo fade-in
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Smooth animation function
  const animate = () => {
    // Lerp factor - adjust this value to change the smoothing amount
    // Lower values = more smoothing/slower movement (0.05 to 0.15 recommended)
    const lerpFactor = 0.08

    // Calculate new position using lerp
    currentPosition.current = {
      x:
        currentPosition.current.x +
        (mousePosition.x - currentPosition.current.x) * lerpFactor,
      y:
        currentPosition.current.y +
        (mousePosition.y - currentPosition.current.y) * lerpFactor,
    }

    // Update the position state
    setMousePosition(currentPosition.current)

    // Continue animation
    animationFrame.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    // Start animation loop
    animationFrame.current = requestAnimationFrame(animate)

    // Mouse move handler
    const handleMouseMove = (e) => {
      mousePosition.x = e.clientX
      mousePosition.y = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Clear version */}
      <img
        src="/frame-no-water-blur.png"
        alt="EXILISCOPE"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Frosted version with mask */}
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
              audioRef.current.currentTime = 0
              audioRef.current.play()
            } else {
              audioRef.current.pause()
              audioRef.current.currentTime = 0
            }
          }}
        />
      </div>

      {/* Audio element */}
      <audio ref={audioRef} src={audioFile} />
    </div>
  )
}

export default Home

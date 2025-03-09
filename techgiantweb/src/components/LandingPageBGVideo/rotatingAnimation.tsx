import Icon from "../../icons/techgiant";
import React, { useEffect, useState } from "react";

interface SigmaLogoProps {
  text?: string;
  rotationSpeed?: number;
}

export const RotatingAnimation: React.FC<SigmaLogoProps> = ({
  text = "· Crafting Digital Excellence for a Smarter Future ·",
  rotationSpeed = 0.7,
}) => {
  const [rotation, setRotation] = useState(0);
  const [size, setSize] = useState(800); // Default for desktop

  // Throttle resize event to avoid excessive re-renders
  useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth < 768 ? 400 : 800); // Adjust for mobile
    };

    updateSize();

    // Throttle the resize event
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateSize, 100); // Adjust throttle time as needed
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Rotate the SVG
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + rotationSpeed) % 360);
    }, 50);

    return () => clearInterval(interval); // Clear interval on unmount
  }, [rotationSpeed]);

  const center = size / 2;
  const radius = size * 0.47;
  const iconSize = size * 0.3; // Scale icon size

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Main Rotating Text and Icon */}
      <div
        className="absolute inset-0 flex items-center justify-center bg-[#11071F]"
        style={{
          background:
            "radial-gradient(circle, rgba(118,60,172,1) 9%, rgba(17,7,31) 49%)",
        }}
      >
        <Icon height={iconSize} width={iconSize} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="absolute right-0 inset-0 w-full h-full animate-spin-slow"
          style={{
            transformOrigin: "center",
            transform: `rotate(${rotation}deg)`,
            transition: "transform 0.05s linear",
          }}
        >
          <path
            id="textPath"
            d={`
            M ${center + radius} ${center}
            a ${radius},${radius} 0 1,1 -${radius * 2},0
            a ${radius},${radius} 0 1,1 ${radius * 2},0
          `}
            fill="none"
          />
          <text
            className="fill-white font-light"
            style={{ fontSize: size * 0.05 }}
          >
            <textPath href="#textPath" startOffset="0%">
              {text.repeat(3)}
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

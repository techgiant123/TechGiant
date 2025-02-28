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

  useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth < 768 ? 400 : 800); // Adjust for mobile
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + rotationSpeed) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, [rotationSpeed]);

  const center = size / 2;
  const radius = size * 0.47;
  const iconSize = size * 0.3; // Scale icon size

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Glowing Gradient Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-blue-400/50 via-blue-500/30 to-transparent rounded-full blur-xl animate-pulse shadow-2xl" />
        <div className="absolute inset-0 bg-gradient-radial from-blue-600/50 via-transparent to-transparent rounded-full blur-2xl opacity-70" />
      </div>

      {/* Main Rotating Text and Icon */}
      <div
        className="absolute inset-0 flex items-center justify-center "
        style={{
          background:
            "radial-gradient(circle, rgba(118,60,172,1) 9%, rgba(15,4,32,1) 49%)",
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

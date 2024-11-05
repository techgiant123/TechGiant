import Icon from "../../icons/techgiant";
import React, { useEffect, useState } from "react";

interface SigmaLogoProps {
  text?: string;
  size?: number;
  rotationSpeed?: number;
}

export const RotatingAnimation: React.FC<SigmaLogoProps> = ({
  text = " Partnership · Delivering projects · Digital transformation ·",
  size = 200,
  rotationSpeed = 0.2,
}) => {
  const [rotation, setRotation] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + rotationSpeed) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, [rotationSpeed]);

  const center = size / 2;
  const radius = size * 0.35;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Outer glow container */}
      <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl" />

      {/* Main container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          {/* Inner glow effects */}
          <div className="absolute inset-0 bg-gradient-radial from-black-500/30 via-blue-900/20 to-transparent rounded-full" />
          <div className="absolute inset-0 bg-gradient-radial from-black-500/20 via-transparent to-transparent rounded-full animate-pulse" />

          {/* Sigma symbol */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon height={50} width={50} />
            {/* <span className="text-white text-7xl font-thin select-none">Σ</span> */}
          </div>

          {/* Rotating text */}
          <svg
            viewBox={`0 0 ${size} ${size}`}
            className="absolute inset-0 w-full h-full animate-spin-slow"
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
              className="text-white"
            />

            <text className="fill-white text-[16px] font-light">
              <textPath
                href="#textPath"
                startOffset="0%"
                className="tracking-wider"
              >
                {text.repeat(2)}
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

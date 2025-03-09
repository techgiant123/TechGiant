import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface TechnologyLogo {
  name: string;
  logoUrl: string;
  alt: string;
}

const TechnologiesWeUse: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const technologies: TechnologyLogo[] = [
    {
      name: "React",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "React logo",
    },
    {
      name: "JavaScript",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "JavaScript logo",
    },
    {
      name: "TypeScript",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      alt: "TypeScript logo",
    },
    {
      name: "Node.js",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      alt: "Node.js logo",
    },
    {
      name: "Tailwind CSS",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      alt: "Tailwind CSS logo",
    },
    {
      name: "MySQL",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      alt: "MySQL logo",
    },
    {
      name: "PHP",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      alt: "PHP logo",
    },
    {
      name: "WordPress",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
      alt: "WordPress logo",
    },
    {
      name: "CSS3",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      alt: "CSS3 logo",
    },
    {
      name: "HTML5",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      alt: "HTML5 logo",
    },
  ];

  // Duplicate logos for infinite seamless scrolling effect
  const scrollingLogos = [...technologies, ...technologies];

  useEffect(() => {
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        x: "-50%", // Move by half the width to ensure seamless looping
        duration: 20, // Adjust speed (lower is faster)
        ease: "linear",
        repeat: -1, // Infinite loop
      });
    }
  }, []);

  return (
    <div className="w-full py-12 bg-bgColor overflow-hidden relative mt-[120px] md:mt-[150px]">
      <div className="max-w-[110rem] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center text-orange-400 mb-8 md:mb-12">
          Technologies We Use
        </h2>

        {/* Marquee Wrapper with Blur Effect */}
        <div className="relative w-full overflow-hidden">
          {/* Left Blur */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-bgColor to-transparent z-10 pointer-events-none"></div>

          {/* Right Blur */}
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-bgColor to-transparent z-10 pointer-events-none"></div>

          <div
            ref={marqueeRef}
            className="flex gap-10 md:gap-16 whitespace-nowrap w-max"
          >
            {scrollingLogos.map((tech, index) => (
              <div
                key={index}
                className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center"
              >
                <img
                  src={tech.logoUrl}
                  alt={tech.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesWeUse;

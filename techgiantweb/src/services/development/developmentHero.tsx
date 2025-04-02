import React, { useEffect, useState } from "react";

const DevelopmentHero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen width on component mount and window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // 640px is the Tailwind `sm` breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  return (
    <div className="relative w-full h-screen  overflow-hidden bg-bgColor">
      {/* YouTube Video Background - Conditionally rendered */}
      {!isMobile && (
        <div className="absolute inset-0 z-0">
          <iframe
            className="w-full h-full object-cover overflow-auto bg-bgColor"
            src="https://www.youtube.com/embed/rA7fwt-cBuc?autoplay=1&mute=1&loop=1&playlist=rA7fwt-cBuc&controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <div className="relative z-10 max-w-6xl mx-auto h-[80%] flex flex-col justify-center px-4 sm:px-6 lg:px-8 ">
        <div className="bg-black/50 z-5 p-4 rounded-md">
          {/* Heading with highlight */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
            <span className="text-carousel2">Web Development</span>
            <span className="text-white"> Services</span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-300 text-lg sm:text-xl mb-8 sm:mb-12 max-w-2xl ">
            We design and build industry-leading web-based products that delight
            your customers
          </p>

          {/* Rating and CTA section */}
        
        </div>
      </div>

      {/* Bracket design element */}
      <div className="absolute right-4 sm:right-8 top-1/8 sm:top-1/3 text-green-400/30">
        {/* <div className="text-[100px] sm:text-[150px] md:text-[200px] font-light">
          ⌜ TECH GIANT ⌝
        </div> */}
      </div>
    </div>
  );
};

export default DevelopmentHero;

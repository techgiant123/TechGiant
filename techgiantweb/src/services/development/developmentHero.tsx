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

      {/* Semi-transparent overlay for better readability */}
      {/* <div className="absolute inset-0 bg-black/50 z-5"></div> */}

      {/* Content container */}
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            {/* Rating */}
            <div className="flex items-center">
              <div className="bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mr-2 sm:mr-3">
                <span className="text-gray-900 font-bold text-sm sm:text-lg">
                  C
                </span>
              </div>
              <div>
                <div className="text-white text-sm">★★★★★</div>
                <div className="text-gray-400 text-xs">4.8/5 on Clutch</div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-green-400 hover:bg-green-500 transition-colors text-gray-900 font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-md flex items-center">
              Estimate project
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bracket design element */}
      <div className="absolute right-4 sm:right-8 top-1/8 sm:top-1/3 text-green-400/30">
        <div className="text-[100px] sm:text-[150px] md:text-[200px] font-light">
          ⌜ TECH GIANT ⌝
        </div>
      </div>
    </div>
  );
};

export default DevelopmentHero;

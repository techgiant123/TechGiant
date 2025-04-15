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

          {/* <iframe
            className="w-full h-full object-cover overflow-auto bg-bgColor"
            src="https://www.youtube.com/embed/Pfy2U0XrHdI?autoplay=1&mute=1&loop=1&playlist=Pfy2U0XrHdI&controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe> */}
        </div>
      )}
      <div className="relative z-10 max-w-6xl mx-auto h-[80%] flex flex-col justify-center px-4 sm:px-6 lg:px-8 ">
      <div className="bg-navBg/50 backdrop-blur-[10px] z-5 p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl shadow-carousel2/10">
  {/* Heading with highlight */}
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-950 via-purple-800 to-fuchsia-900
 font-sans">Web Development</span>
    <span className="text-white font-sans"> Services</span>
  </h1>

  {/* Subheading */}
  <p className="text-gray-300/90 text-lg sm:text-xl mb-8 sm:mb-10 max-w-2xl leading-relaxed font-sans">
    We design and build industry-leading digital experiences that engage your customers and drive business growth.
  </p>

  {/* Rating and CTA section */}
  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
    <div className="flex items-center">
      {/* <div className="flex -space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon key={star} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div> */}
      <span className="ml-2 text-sm font-sans text-gray-300">Rated 5.0 by 200+ clients</span>
    </div>
    <button className="px-6 py-3 bg-gradient-to-r from-carousel2 to-carousel1 hover:from-carousel1 hover:to-carousel2 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-carousel2/20 font-sans">
      Get Your Free Consultation
    </button>
  </div>
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

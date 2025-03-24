import React from "react";
import testLogo from "../../assets/logo.svg";
import axis from "../../assets/ourPartners/axis.svg";
import falahzar from "../../assets/ourPartners/falahzar.png";
import imflux from "../../assets/ourPartners/imflux.png";
import istaff from "../../assets/ourPartners/iStaff.png";
import forest from "../../assets/ourPartners/forest.webp";
import keycube from "../../assets/ourPartners/keycube.png";

const images = [testLogo, axis, falahzar, imflux, istaff, forest, keycube];

const ImageSlider: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center space-y-4 pt-[120px] pb-[120px] xs:pt-[60px] xs:pb-[60px]">
      {/* Responsive Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
        Our{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Partners
        </span>
      </h1>
      <p className="text-white pb-20">
        What drives our passion for excellence and innovation in everything we
        do
      </p>

      {/* First Row */}
      <div className="slider w-full h-[100px] md:h-[80px] sm:h-[60px] xs:h-[40px] shadow-lg overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full w-[200px] md:w-[150px] sm:w-[100px] xs:w-[50px] bg-gradient-to-r from-bgColor to-transparent z-10"></div>
        <div className="absolute top-0 right-0 h-full w-[200px] md:w-[150px] sm:w-[100px] xs:w-[50px] bg-gradient-to-l from-bgColor to-transparent z-10"></div>
        <div className="flex w-[3500px] gap-[15rem] md:gap-[10rem] sm:gap-[5rem] xs:gap-[2rem] animate-scroll">
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className="w-[250px] md:w-[200px] sm:w-[150px] xs:w-[100px] h-[100px] md:h-[80px] sm:h-[60px] xs:h-[40px] flex-shrink-0"
            >
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second Row */}
      <div className="slider w-full h-[100px] md:h-[80px] sm:h-[60px] xs:h-[40px] shadow-lg overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full w-[200px] md:w-[150px] sm:w-[100px] xs:w-[50px] bg-gradient-to-r from-bgColor to-transparent z-10"></div>
        <div className="absolute top-0 right-0 h-full w-[200px] md:w-[150px] sm:w-[100px] xs:w-[50px] bg-gradient-to-l from-bgColor to-transparent z-10"></div>
        <div className="flex w-[3500px] gap-[15rem] md:gap-[10rem] sm:gap-[5rem] xs:gap-[2rem] animate-scrollReverse">
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className="w-[250px] md:w-[200px] sm:w-[150px] xs:w-[100px] h-[100px] md:h-[80px] sm:h-[60px] xs:h-[40px] flex-shrink-0"
            >
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;

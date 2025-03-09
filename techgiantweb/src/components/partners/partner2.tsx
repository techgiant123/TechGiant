import React from "react";

const images = [
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
];

const ImageSlider: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-bgColor space-y-4 pt-[120px] pb-[120px]">
      <span className="text-[50px] text-carousel2">Our Partners</span>
      {/* First Row */}
      <div className="slider w-full h-[100px] bg-bgColor shadow-lg overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full w-[200px] bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute top-0 right-0 h-full w-[200px] bg-gradient-to-l from-black to-transparent z-10"></div>
        <div className="flex w-[3500px] animate-scroll">
          {[...images, ...images].map((src, index) => (
            <div key={index} className="w-[250px] h-[100px] flex-shrink-0">
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="slider w-full h-[100px] bg-bgColor shadow-lg overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full w-[200px] bg-gradient-to-r from-bgColor to-transparent z-10"></div>
        <div className="absolute top-0 right-0 h-full w-[200px] bg-gradient-to-l from-bgColor to-transparent z-10"></div>
        <div className="flex w-[3500px] animate-scrollReverse bg-bgColor">
          {[...images, ...images].map((src, index) => (
            <div key={index} className="w-[250px] h-[100px] flex-shrink-0">
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

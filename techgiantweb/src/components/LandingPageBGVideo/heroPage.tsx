import video from "../../assets/RtoLWave.mp4"; // Ensure the file path is correct
// import posterImage from "../../assets/3163534-uhd_3840_2160_30fps.jpg"; // Ensure the file path is correct
import { RotatingAnimation } from "./rotatingAnimation";

export const HeroSection = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden" id="intro">
      {/* Video Background */}
      <video
       
        loop
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50">
        <span className="pt-[5rem] text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Benefit from our software solutions.
        </span>
        <div className="pt-[2rem]">
          <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            Empowering the future through <br />
            innovative software <br />
            solutions
          </span>
        </div>
        <RotatingAnimation />
      </div>
    </div>
  );
};

import video from "../../assets/RtoLWave .mp4";
import { RotatingAnimation } from "./rotatingAnimation";

export const HeroSection = () => {
  return (
    <div className="relative flex h-full w-full" id="intro">
      <video
        poster="./assets/3163534-uhd_3840_2160_30fps.mp4"
        loop
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="relative z-10 flex flex-col w-full h-full items-center justify-center">
        <span className="text-white pt-[5rem] text-center">
          Benefit from our software solutions.
        </span>
        <div className="pt-[2rem] text-center">
          <span className="text-white text-[3.5rem] leading-[4rem]">
            Empowering future through <br /> innovative software <br /> solutions
          </span>
        </div>
        <RotatingAnimation />
      </div>
    </div>
  );
};

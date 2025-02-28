import { useState, useEffect } from "react";
import { RotatingAnimation } from "./rotatingAnimation";

export const HeroSection = () => {
  const words = [
    "<>Empowering the future through",
    "innovative software",
    "solutions </>",
  ];

  const [lines, setLines] = useState<string[]>(["", "", ""]);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    if (wordIndex >= words.length) {
      setTypingComplete(true);
      return;
    }

    const currentWord = words[wordIndex];
    let typingSpeed = 100;

    const typeEffect = setTimeout(() => {
      if (charIndex < currentWord.length) {
        setLines((prev) => {
          const updatedLines = [...prev];
          updatedLines[wordIndex] = currentWord.substring(0, charIndex + 1);
          return updatedLines;
        });
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setWordIndex((prev) => prev + 1);
        }, 200);
      }
    }, typingSpeed);

    return () => clearTimeout(typeEffect);
  }, [charIndex, wordIndex]);

  return (
    <div
      className="h-screen w-screen overflow-hidden flex-col relative"
      id="intro"
    >
      {/* Main Text */}
      <div
        className="z-10 flex flex-col justify-center h-full text-center text-white bg-bgColor items-baseline"
        style={{
          background:
            "radial-gradient(circle at left, rgba(118,60,172,1) 0%, rgba(15,4,32,1) 30%)",
        }}
      >
        <span className=" pl-[120px]  text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Benefit from our software solutions.
        </span>

        {/* Typing Animation */}
        <div className="relative ">
          <h1 className="text-2xl relative z-10 sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-left pl-[120px]">
            {lines.map((line, index) => (
              <span key={index} className="block">
                {line}
                {index === wordIndex && !typingComplete && (
                  <span className="animate-blink">_</span>
                )}
                {index === words.length - 1 && typingComplete && (
                  <span className="animate-blink">|</span>
                )}
              </span>
            ))}
          </h1>
        </div>
      </div>

      {/* Rotating Logo (Visible only on large screens) */}
      <div className="absolute right-[-12%] top-1/2 transform -translate-y-1/2 hidden md:flex">
        <RotatingAnimation />
      </div>
    </div>
  );
};

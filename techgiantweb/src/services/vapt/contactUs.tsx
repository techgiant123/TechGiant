import React from "react";
import { ArrowRight } from "lucide-react";

const ConnectWithUsSection: React.FC = () => {
  return (
    <div className="w-full bg-gray-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-16 flex items-center">
        <div className="w-full md:w-1/2 z-10">
          <h2 className="text-4xl font-normal text-gray-800 mb-4">
            Connect with us
          </h2>
          <p className="text-gray-600 mb-8">
            Talk to an expert about taking the next step in your cyber
            resilience journey.
          </p>
          <button className="border border-gray-400 hover:border-gray-600 text-gray-600 hover:text-gray-800 py-2 px-4 flex items-center transition-colors duration-200">
            Request a consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2">
          <div className="w-full h-full relative">
            {/* Red diagonal lines pattern */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 500 300"
              preserveAspectRatio="none"
              className="absolute top-0 right-0 h-full"
            >
              {Array.from({ length: 25 }).map((_, index) => (
                <line
                  key={index}
                  x1={500 - index * 20}
                  y1="0"
                  x2={500 - index * 20 - 300}
                  y2="300"
                  stroke="#FF3A33"
                  strokeWidth="1"
                  opacity="0.5"
                />
              ))}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUsSection;

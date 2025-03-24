import React from "react";
import { ArrowRight } from "lucide-react";

const ConnectWithUsSection: React.FC = () => {
  return (
    <div className="w-full bg-bgColor relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-16 flex items-center">
        <div className="w-full md:w-1/2 z-10">
          <h2 className="text-4xl font-normal text-white mb-4 font-doto">
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

        <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2"></div>
      </div>
    </div>
  );
};

export default ConnectWithUsSection;

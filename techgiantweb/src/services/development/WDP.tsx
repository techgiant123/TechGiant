import React, { useState } from "react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isActive: boolean;
  onHover: () => void;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  isActive,
  onHover,
}) => {
  return (
    <div className="flex flex-col items-start relative">
      <div
        className={`text-5xl font-bold mb-8 cursor-pointer transition-all duration-300 ${
          isActive ? "text-carousel2" : "text-white"
        }`}
        onMouseEnter={onHover}
      >
        {number}
      </div>
      <h3 className={`font-medium mb-2 ${isActive ? "text-carousel2" : "text-white"}`}>
        {title}
      </h3>
      {isActive && (
        <div className="text-gray-300 text-sm transition-all duration-300 max-h-20 opacity-100">
          {description}
        </div>
      )}
    </div>
  );
};

const WebDevelopmentProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const steps = [
    {
      number: "01",
      title: "Consult your idea",
      description:
        "Set the right direction with our web development consultants.",
    },
    {
      number: "02",
      title: "Choose a technology",
      description:
        "Together, we'll decide on the tech stack and the overall approach.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Create intuitive and engaging user interfaces and experiences.",
    },
    {
      number: "04",
      title: "Develop",
      description:
        "Build robust, scalable, and high-performance web applications.",
    },
    {
      number: "05",
      title: "Reach the market",
      description:
        "Launch and optimize your product for maximum market impact.",
    },
  ];

  return (
    <div className="w-full bg-bgColor text-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Leverage our proven{" "}
              <span className="text-carousel2">
                web
                <br />
                development process
              </span>
            </h2>
          </div>
          <div>
            <p className="text-gray-300">
              We've delivered over 2500 projects – we know what it takes to
              execute a seamless and optimized web-based software development
              process.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-10">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              isActive={activeStep === index}
              onHover={() => setActiveStep(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentProcess;
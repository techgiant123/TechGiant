import React, { useState } from "react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="flex flex-col items-start">
      <div
        className="text-5xl font-bold text-white mb-8 cursor-pointer transition-all duration-300"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {number}
      </div>
      <h3 className="text-white font-medium mb-2">{title}</h3>
      <div
        className={`text-gray-300 text-sm overflow-hidden transition-all duration-300 ${
          isHovering ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {description}
      </div>
    </div>
  );
};

const WebDevelopmentProcess: React.FC = () => {
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
      <div className="container mx-auto max-w-[72rem] px-4">
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
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentProcess;

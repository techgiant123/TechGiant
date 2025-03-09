const KyndrylCyberDefense = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Left content section */}
          <div className="w-full md:w-1/2 space-y-4">
            <div>
              <div className="border-t-2 border-red-500 w-8 mb-2"></div>
              <p className="text-sm text-gray-700 font-medium">What we do</p>
            </div>

            <h1 className="text-3xl md:text-4xl font-light text-gray-800 leading-tight">
              Build an adaptive, flexible and scalable cyber defense
            </h1>

            <p className="text-gray-700 leading-relaxed text-sm md:text-base mt-6">
              Kyndryl Security Operations and Response Services offer businesses
              a flexible, modular and open approach to streamline and strengthen
              their cybersecurity and incident response capabilities. Powered by
              AI and automation, our comprehensive cyber resilience services
              enable us to assess, advise, implement and deliver consulting and
              managed services that help customers anticipate, protect against,
              withstand, and recover from any cyber outages.
            </p>

            <p className="text-gray-700 leading-relaxed text-sm md:text-base mt-4">
              With Kyndryl's Security Operations and Response Services,
              businesses can choose the tools and operating models they need to
              address various challenges and requirements across different
              regions. This approach ensures data is processed in compliance
              with regional mandates and{" "}
              <span className="text-blue-600 cursor-pointer">
                cyber regulations
              </span>
              .
            </p>
          </div>

          {/* Right content - Image with play button */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded overflow-hidden shadow-md">
              <img
                src="/api/placeholder/640/480"
                alt="Kyndryl security dashboard with graph data"
                className="w-full h-auto object-cover"
              />

              <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
                <button className="border border-white bg-black bg-opacity-20 hover:bg-bgColor transition-all px-4 py-2 rounded">
                  <div className="flex items-center space-x-2">
                    <span className="text-white text-sm">Play video</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom "how kyndryl helps" text */}
        <div className="relative mt-32 md:mt-48">
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <div className="text-gray-100 text-7xl md:text-9xl font-bold tracking-widest opacity-20">
              how kyndryl helps
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KyndrylCyberDefense;

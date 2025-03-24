import React from "react";

const DevServices = () => {
  return (
    <div className="bg-bgColor text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-2">
              Achieve your business goals
              <br />
              with{" "}
              <span className="text-carousel2">web development solutions</span>
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-300">
              Our battle-tested developers specialize in a wide range of web
              development services. Here's what we deliver.
            </p>
          </div>
        </div>

        {/* Services - Arranged in three columns exactly as specified */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* First Column - Websites and Ecommerce */}
          <div className="md:w-1/3 flex flex-col gap-4">
            {/* Websites */}
            <div className="bg-gray-800 p-6 rounded">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Websites</h3>
                <div className="bg-gray-900 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-gray-400">
                A well-designed website is a powerful marketing and
                communication tool that helps build trust and gen- erate leads.
              </p>
            </div>

            {/* Ecommerce */}
            <div className="bg-gray-800 p-6 rounded">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Ecommerce</h3>
                <div className="bg-gray-900 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-gray-400">
                With eCommerce solutions, businesses can operate 24 hours a day,
                7 days a week, and reach customers in any time zone.
              </p>
            </div>
          </div>

          {/* Second Column - Web Applications and Content Management Systems */}
          <div className="md:w-1/3 flex flex-col gap-4">
            {/* Web Applications */}
            <div className="bg-gray-800 p-6 rounded">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Web Applications</h3>
                <div className="bg-gray-900 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-gray-400">
                Web applications can reach a global audience. They're
                interactive and engaging, so can easily hold users' attention.
              </p>
            </div>

            {/* Content Management Systems */}
            <div className="bg-gray-800 p-6 rounded">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">
                  Content Management Systems
                </h3>
                <div className="bg-gray-900 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-gray-400">
                A dedicated CMS designed to the specific needs of your business
                will save time and money by optimiz- ing internal workflows.
              </p>
            </div>
          </div>

          {/* Third Column - Low-Code Development */}
          <div className="md:w-1/3 flex flex-col">
            {/* Low-Code Development */}
            <div className="bg-gray-800 p-6 rounded h-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Low-Code Development</h3>
                <div className="bg-gray-900 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-gray-400">
                Low-code and no-code solutions offer an easy, modular, and
                scalable way of building applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevServices;

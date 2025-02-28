import React from "react";

const TechGiantText: React.FC = () => {
  return (
    <div className="flex flex-row justify-center items-center w-screen h-[250px] bg-bgColor">
      <div>
        <svg
          width="700px"
          height="150px"
          className="max-w-full justify-center items-center flex flex-row"
        >
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="130"
            className="tech-text ml-[120px] flex flex-col text-center"
          >
            TECH GIANT
          </text>
        </svg>

        <style>
          {`
          @import url('https://fonts.googleapis.com/css2?family=League+Gothic&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

          .tech-text {
  font-family: 'League Gothic', sans-serif;
  text-align: center;
  justify-item: center;
  stroke-width: 3px;
  stroke-dasharray: 80;
  fill: rgba(0,0,0,0);
  stroke-linecap: round;
  animation: follow 1.8s linear infinite;
  transition: all 2.1s;
  letter-spacing: 20px; /* Adjust this value as needed */
}


          @keyframes follow {
            0% {
              stroke-dashoffset: 0;
              stroke: skyblue;
              filter: drop-shadow(0px 0px 5px purple);
            }
            50% {
              stroke: hotpink;
              filter: drop-shadow(0px 0px 5px skyblue);
            }
            100% {
              stroke-dashoffset: 160;
              stroke: white;
              filter: drop-shadow(0px 0px 5px hotpink);
            }
          }

          .tech-text:hover {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
            stroke-width: 2px;
          }

          @media (max-width: 600px) {
            svg, text {
              transform: scale(0.75);
              margin-left: -10px;
            }
          }
        `}
        </style>
      </div>
    </div>
  );
};

export default TechGiantText;

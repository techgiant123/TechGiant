import React from "react";

interface StarIconProps {
  className?: string;
  height?: string;
  width?: string;
  fill?: string;
}

const ProfilePic: React.FC<StarIconProps> = ({height="30", width="30",fill="black" }) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 32 32"
      height={height}
      width={width}
      fill={fill}
    >
      <g>
        <g>
          <path
            d="M16,14c-3.8598633,0-7-3.1401367-7-7s3.1401367-7,7-7s7,3.1401367,7,7S19.8598633,14,16,14z M16,2
			c-2.7568359,0-5,2.2431641-5,5s2.2431641,5,5,5s5-2.2431641,5-5S18.7568359,2,16,2z"
          />
        </g>
        <g>
          <path
            d="M23.9423828,32H8.0576172C5.8203125,32,4,30.1796875,4,27.9423828c0-6.6166992,5.3833008-12,12-12s12,5.3833008,12,12
			C28,30.1796875,26.1796875,32,23.9423828,32z M16,17.9423828c-5.5141602,0-10,4.4858398-10,10
			C6,29.0771484,6.9228516,30,8.0576172,30h15.8847656C25.0771484,30,26,29.0771484,26,27.9423828
			C26,22.4282227,21.5141602,17.9423828,16,17.9423828z"
          />
        </g>
      </g>
    </svg>
  );
};

export default ProfilePic;

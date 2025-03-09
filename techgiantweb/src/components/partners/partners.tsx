import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const companyLogosRow1 = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Google
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", // Microsoft
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", // Apple
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", // IBM

  "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", // Oracle

  "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", // AWS

  "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg", // Tesla
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", // Netflix
];

const companyLogosRow2 = [...companyLogosRow1];

const ImageSlider = () => {
  const [isPaused] = useState(false);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const tl1 = gsap.to(row1Ref.current, {
      x: "-50%",
      duration: 10,
      ease: "linear",
      repeat: -1,
    });

    const tl2 = gsap.to(row2Ref.current, {
      x: "-50%",
      duration: 20,
      ease: "linear",
      repeat: -1,
    });

    return () => {
      tl1.kill();
      tl2.kill();
    };
  }, [isPaused]);

  return (
    <section className="w-full overflow-hidden relative bg-bgColor h-[300px] flex justify-center items-center">
      <div className="space-y-4">
        <article ref={row1Ref} className="flex w-[200%] gap-2">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="w-full">
              <ul className="flex list-none gap-[120px] p-2 m-0">
                {companyLogosRow1.map((logo, index) => (
                  <li
                    key={index}
                    className="w-1/12 h-[120px] p-2 flex justify-center items-center"
                  >
                    <img
                      src={logo}
                      alt={`Company Logo ${index + 1}`}
                      className="max-w-full h-auto"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </article>
        <article ref={row2Ref} className="flex w-[200%]">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="w-full">
              <ul className="flex list-none p-0 m-0">
                {companyLogosRow2.map((logo, index) => (
                  <li
                    key={index}
                    className="w-1/12 p-2 flex justify-center items-center"
                  >
                    <img
                      src={logo}
                      alt={`Company Logo ${index + 1}`}
                      className="max-w-full h-auto"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};

export default ImageSlider;

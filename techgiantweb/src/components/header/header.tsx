import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Icon from "../../icons/techgiant";

gsap.registerPlugin(ScrollTrigger);

const Header: React.FC = () => {
  useEffect(() => {
    gsap.to("#header", {
      background:
        "linear-gradient(273deg, rgba(162,91,217,1) 0%, rgba(118,60,172,1) 50%, rgba(15,4,32,1) 100%)",
      scrollTrigger: {
        trigger: ".color-light",
        scrub: true,
        start: "top top",
        end: "bottom bottom",
      },
    });
  }, []);

  return (
    <div className="wrap" id="headerContaner">
      <header
        className="block fixed z-20 px-[7rem] py-1 top-0 left-0 w-full text-white h-[var(--header-height)] overflow-hidden"
        style={{
          background:
            "linear-gradient(273deg, rgba(118,60,172,1) 0%, rgba(15,4,32,1) 56%)",
        }}
        id="header"
      >
        <div className="flex justify-between items-center">
          <div>
            <Icon height={50} width={100} />
          </div>
          <div>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="/" className="hover:text-blue-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-blue-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-blue-300">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Icon from '../../icons/techgiant';

gsap.registerPlugin(ScrollTrigger);

const Header: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      ".wrap",
      {
        backgroundColor: gsap.getProperty("html", "--dark") as string,
      },
      {
        scrollTrigger: {
          trigger: ".color-light",
          scrub: true,
          end: "bottom bottom",
        },
        backgroundColor: gsap.getProperty("html", "--light") as string,
      }
    );
  }, []);

  return (
    <div className="wrap" id='headerContaner'>
      <header className="block bg-white px-[7rem] py-1 top-0 left-0 w-full text-black h-[var(--header-height)] shadow-[0_2px_5px_rgba(0,0,0,0)] overflow-hidden" id='header'>
        <div className="flex justify-between items-center">
          <div>
            <Icon height={50} width={100} />
            {/* <h1 className="text-2xl font-bold">Tech Giant</h1> */}
          </div>
          <div>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="/" className="hover:text-blue-300">Home</a>
                </li>
                <li>
                  <a href="/about" className="hover:text-blue-300">About</a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-blue-300">Contact</a>
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

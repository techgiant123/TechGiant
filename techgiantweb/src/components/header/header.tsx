import React, { useEffect, useState, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Icon from "../../icons/techgiant";
import { useNavigate, Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  useEffect(() => {
    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        rotation: isDropdownOpen ? 180 : 0,
        duration: 0.3,
      });
    }
  }, [isDropdownOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="wrap" id="headerContaner">
      <header
        ref={headerRef}
        className="fixed z-20 px-4 md:px-[20rem] py-1 top-0 left-0 w-full text-white h-[var(--header-height)] overflow-visible bg-bgColor"
        id="header"
      >
        <div className="flex justify-between items-center">
          <div onClick={() => navigate("/")} className="cursor-pointer">
            <Icon height={50} width={100} />
          </div>

          {/* Mobile Menu Toggle (Hamburger Icon) */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4 md:space-x-20 relative">
              <li className="relative" ref={dropdownRef}>
                <button
                  className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border  text-white shadow-2xs hover:bg-carousel2 focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Dropdown"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                >
                  Services{" "}
                  <svg
                    className="hs-dropdown-open:rotate-180 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <ul className="absolute left-0 mt-2 w-[20rem] md:w-[50rem] p-4 bg-white text-carousel2 rounded-lg shadow-lg border transform origin-top transition-all duration-300 ease-in-out">
                    <span className="text-left text-lg md:text-[30px] text-wrap flex mb-4">
                      Services that drive business results
                    </span>
                    <li>
                      <Link
                        to="/Vapt"
                        className="block px-4 py-2 hover:bg-gradient-to-r from-[#500073] to-[#11071F] rounded-md hover:text-white transition-colors duration-200"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        VAPT
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/service2"
                        className="block px-4 py-2 hover:bg-bgColor rounded-md transition-colors duration-200"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Service 2
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/service3"
                        className="block px-4 py-2 hover:bg-bgColor rounded-md transition-colors duration-200"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Service 3
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/" className="hover:text-blue-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-blue-300">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden absolute top-[var(--header-height)] left-0 w-full bg-bgColor p-4">
              <ul className="flex flex-col space-y-4">
                <li className="relative" ref={dropdownRef}>
                  <button
                    className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                  >
                    Services{" "}
                    <svg
                      className="hs-dropdown-open:rotate-180 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  {isDropdownOpen && (
                    <ul className="mt-2 w-full p-4 bg-carousel2 text-white rounded-lg shadow-lg border border-gray-700 transform origin-top transition-all duration-300 ease-in-out">
                      <span className="text-left text-lg text-wrap flex mb-4">
                        Services that drive business results
                      </span>
                      <li>
                        <Link
                          to="/Vapt"
                          className="block px-4 py-2 hover:bg-bgColor rounded-md transition-colors duration-200"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          VAPT
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/service2"
                          className="block px-4 py-2 hover:bg-bgColor rounded-md transition-colors duration-200"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Service 2
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/service3"
                          className="block px-4 py-2 hover:bg-bgColor rounded-md transition-colors duration-200"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Service 3
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="" className="hover:text-blue-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;

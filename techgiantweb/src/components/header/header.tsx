import React, { useEffect, useState, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate, Link } from "react-router-dom";
import Icon from "../../icons/techgiant";

gsap.registerPlugin(ScrollTrigger);

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

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
    <div className="wrap" id="headerContainer">
      <header className="fixed z-20 px-4 md:px-20 py-2 top-0 left-0 w-full text-black h-[var(--header-height)] bg-navBg shadow-sm font-doto font-bold">
        <div className="flex justify-between items-center">
          <div onClick={() => navigate("/")} className="cursor-pointer">
            <Icon height={60} width={100} />
          </div>

          <button
            className="md:hidden text-black focus:outline-none"
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

          <nav className="hidden md:block">
            <ul className="flex space-x-10 md:space-x-16 items-center">
              <li>
                <Link to="/" className="text-white hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 text-white hover:text-blue-600">
                  Services
                  <svg
                    ref={arrowRef}
                    className="w-4 h-4 transform transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m6 9 6 6 6-6"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute mt-6 pt-4 left-1/2 transform -translate-x-1/2 w-screen max-w-6xl"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-transparent shadow-lg rounded-lg overflow-hidden">
                      <Link
                        to="/Vapt"
                        className="flex flex-col justify-between p-2 sm:p-4 lg:p-8 bg-pink-100 hover:bg-pink-200 transition-colors duration-300"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <div className="mb-2 sm:mb-4 lg:mb-8">
                          <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-1 sm:mb-2 lg:mb-4 break-words">
                            VAPT.
                          </h3>
                          <p className="text-gray-800 text-xs sm:text-sm lg:text-base whitespace-normal font-bold">
                            Handcraft the
                            <br />
                            user experience.
                          </p>
                        </div>
                        <div className="text-right">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block"
                          >
                            <path
                              d="M16 7L21 12M21 12L16 17M21 12H3"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </Link>
                      <Link
                        to="/Development"
                        className="flex flex-col justify-between p-2 sm:p-4 lg:p-8 bg-indigo-100 hover:bg-indigo-200 transition-colors duration-300"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <div className="mb-2 sm:mb-4 lg:mb-8">
                          <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-1 sm:mb-2 lg:mb-4 break-words">
                            Development.
                          </h3>
                          <p className="text-gray-800 text-xs sm:text-sm lg:text-base whitespace-normal">
                            Leverage the
                            <br />
                            power of code.
                          </p>
                        </div>
                        <div className="text-right">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block"
                          >
                            <path
                              d="M16 7L21 12M21 12L16 17M21 12H3"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </Link>
                      <Link
                        to="/marketing"
                        className="flex flex-col justify-between p-2 sm:p-4 lg:p-8 bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <div className="mb-2 sm:mb-4 lg:mb-8">
                          <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-1 sm:mb-2 lg:mb-4 break-words">
                            Marketing.
                          </h3>
                          <p className="text-gray-800 text-xs sm:text-sm lg:text-base whitespace-normal">
                            Creative strategies
                            <br />
                            for brands.
                          </p>
                        </div>
                        <div className="text-right">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block"
                          >
                            <path
                              d="M16 7L21 12M21 12L16 17M21 12H3"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <Link to="/clients" className="text-white hover:text-blue-600">
                  Clients
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/knowledge"
                  className="text-white hover:text-blue-600"
                >
                  Knowledge
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-black text-white hover:bg-gray-800 rounded-sm transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {isMobileMenuOpen && (
            <nav className="md:hidden absolute top-0 left-0 w-full bg-white p-4 z-50 shadow-md">
              <div className="flex justify-between items-center mb-6">
                <div onClick={() => navigate("/")} className="cursor-pointer">
                  <Icon height={40} width={80} />
                </div>
                <button
                  className="text-black focus:outline-none"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <ul className="flex flex-col space-y-4">
                <li>
                  <Link
                    to="/work"
                    className="block py-2 text-gray-800 hover:text-gray-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Work
                  </Link>
                </li>
                <li className="relative">
                  <button
                    className="flex items-center gap-1 w-full py-2 text-left text-pink-500"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    Services
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m6 9 6 6 6-6"
                      />
                    </svg>
                  </button>
                  {isDropdownOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      <Link
                        to="/design"
                        className="block py-2 text-gray-800 hover:text-gray-600"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        Design
                      </Link>
                      <Link
                        to="/technology"
                        className="block py-2 text-gray-800 hover:text-gray-600"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        Technology
                      </Link>
                      <Link
                        to="/marketing"
                        className="block py-2 text-gray-800 hover:text-gray-600"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        Marketing
                      </Link>
                    </div>
                  )}
                </li>
                <li>
                  <Link
                    to="/clients"
                    className="block py-2 text-gray-800 hover:text-gray-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Clients
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block py-2 text-gray-800 hover:text-gray-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/knowledge"
                    className="block py-2 text-gray-800 hover:text-gray-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Knowledge
                  </Link>
                </li>
                <li className="pt-2">
                  <Link
                    to="/contact"
                    className="block w-full py-3 text-center bg-black text-white rounded-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
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

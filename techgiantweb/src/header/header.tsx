// src/components/Header.tsx

import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="block bg-indigo-600 fixed top-0 left-0 w-full text-white h-[var(--header-height)] shadow-[0_2px_5px_rgba(0,0,0,0)]">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-slate-100">My Website</h1>
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
    </header>
  );
};

export default Header;

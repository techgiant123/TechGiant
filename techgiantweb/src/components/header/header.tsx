import React from 'react';
const Header: React.FC = () => {
  return (
    <div>
    <header className="block bg-slate-700 px-[7rem] py-1 top-0 left-0 w-full text-white h-[var(--header-height)] shadow-[0_2px_5px_rgba(0,0,0,0)] overflow-hidden">
      <div className="top-4 flex justify-between items-center z-10">
        <div>
        <h1 className="text-2xl font-bold">Tech Giant</h1>
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

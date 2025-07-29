import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex items-center relative bg-[#fff7ff] transition-all px-6 xl:px-24">
      <div className="flex items-center justify-between w-full">
        <img
          src="logo.png"
          alt="AgriCulture"
          className="h-28 w-26 rounded-full"
        />

        <button
          className="xl:hidden text-[#634618] text-3xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        <nav id="navmenu" className="hidden xl:block">
          <ul className="flex space-x-7 items-center">
            {["Home", "About", "Processing", "Products", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className="font-semibold text-lg text-[#634618] hover:text-orange-700 border-b-2 border-transparent hover:border-orange-700 pb-1 mt-2 transition duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {mobileMenuOpen && (
        <nav className="xl:hidden absolute top-full left-0 w-full bg-[#fff7ff] shadow-md z-50">
          <ul className="flex flex-col items-start gap-4 p-6">
            {["Home", "About", "Processing", "Products", "Contact"].map((item) => (
              <li key={item} className="w-full">
                <Link
                  to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className="block w-full text-[#634618] text-base font-medium border-b border-gray-200 py-2"
                  onClick={() => setMobileMenuOpen(false)} 
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

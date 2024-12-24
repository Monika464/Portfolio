import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/cyberlogo.png";

// Definiujemy trasy jako tablicę
const ROUTES = [
  { name: "Projects", path: "/" },
  { name: "About Me", path: "/aboutme" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  return (
    <nav className="z-10 relative flex flex-wrap items-center justify-between mr-20 ml-10">
      {/* Logo */}
      <NavLink to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-10" />
        <span className="title ml-2 text-lg">
          Monika Kubianka Node/React Developer
        </span>
      </NavLink>

      {/* Burger button */}
      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        className="dark:text-gray-400 dark:hover:bg-gray-700 lg:hidden hover:bg-gray-100 p-2 focus:ring-2 focus:ring-gray-200 rounded-lg"
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu list */}
      <div
        className={`${
          !isMobileMenuShown && "hidden"
        } w-full lg:block lg:w-auto`}
      >
        <ul className="lg:space-x-8 flex flex-col lg:flex-row rounded-lg border-gray-100 bg-gray-50 lg:border-none lg:bg-transparent text-lg lg:dark:text-white">
          {ROUTES.map((route, index) => (
            <li
              key={route.name}
              className={`cursor-pointer rounded px-3 py-2 lg:hover:bg-transparent lg:hover:text-blue-500 ${
                index === 0
                  ? "bg-slate-400 text-white lg:bg-transparent lg:text-blue-500"
                  : "hover:bg-gray-100"
              }`}
            >
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  isActive ? "text-black font-bold" : "text-black lg:text-black"
                }
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

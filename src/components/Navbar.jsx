import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/cyberlogo.png";

const ROUTES = [
  { name: "Projects", path: "/" },
  { name: "About Me", path: "/aboutme" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <nav className="relative z-10 mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4" aria-label="Main navigation">
      <NavLink to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
        <img src={logo} alt="Portfolio logo" className="h-10 w-10 object-contain" />
        <span className="text-base font-semibold text-gray-900 sm:text-lg">Monika Kubianka
          <span className="block text-sm font-normal text-gray-500">Full Stack Developer</span>
        </span>
      </NavLink>
      <button type="button" onClick={() => setOpen(!open)} aria-label="Toggle navigation menu" aria-expanded={open} aria-controls="portfolio-navigation" className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-blue-500 lg:hidden">
        <RxHamburgerMenu size={25} />
      </button>
      <div id="portfolio-navigation" className={`${open ? "block" : "hidden"} w-full lg:block lg:w-auto`}>
        <ul className="flex flex-col gap-2 rounded-lg bg-gray-50 p-3 lg:flex-row lg:items-center lg:gap-6 lg:bg-transparent lg:p-0">
          {ROUTES.map(({ name, path }) => {
            const active = path === "/" ? pathname === "/" || pathname.startsWith("/projects/") : pathname === path;
            return <li key={path}><NavLink to={path} end={path === "/"} onClick={() => setOpen(false)} aria-current={active ? "page" : undefined} className={`block rounded-lg px-4 py-2 text-sm font-medium transition-colors ${active ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"}`}>{name}</NavLink></li>;
          })}
        </ul>
      </div>
    </nav>
  );
}

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { RxHamburgerMenu } from "react-icons/rx";
// import logo from "../assets/cyberlogo.png";

// // Definiujemy trasy jako tablicę
// const ROUTES = [
//   { name: "Projects", path: "/" },
//   { name: "About Me", path: "/aboutme" },
//   { name: "Contact", path: "/contact" },
// ];

// const Navbar = () => {
//   const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

//   return (
//     <nav className="z-10 relative flex flex-wrap items-center justify-between mr-20 ml-10">
//       {/* Logo */}
//       <NavLink to="/" className="flex items-center">
//         <img src={logo} alt="Logo" className="h-10 w-10" />
//         <span className="title ml-2 text-lg">
//           Monika Kubianka Node/React Developer
//         </span>
//       </NavLink>

//       {/* Burger button */}
//       <button
//         onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
//         className="dark:text-gray-400 dark:hover:bg-gray-700 lg:hidden hover:bg-gray-100 p-2 focus:ring-2 focus:ring-gray-200 rounded-lg"
//       >
//         <RxHamburgerMenu size={25} />
//       </button>

//       {/* Menu list */}
//       <div
//         className={`${
//           !isMobileMenuShown && "hidden"
//         } w-full lg:block lg:w-auto`}
//       >
//         <ul className="lg:space-x-8 flex flex-col lg:flex-row rounded-lg border-gray-100 bg-gray-50 lg:border-none lg:bg-transparent text-lg lg:dark:text-white">
//           {ROUTES.map((route, index) => (
//             <li
//               key={route.name}
//               className={`cursor-pointer rounded px-3 py-2 lg:hover:bg-transparent lg:hover:text-blue-500 ${
//                 index === 0
//                   ? "bg-slate-400 text-white lg:bg-transparent lg:text-blue-500"
//                   : "hover:bg-gray-100"
//               }`}
//             >
//               <NavLink
//                 to={route.path}
//                 className={({ isActive }) =>
//                   isActive ? "text-black font-bold" : "text-black lg:text-black"
//                 }
//               >
//                 {route.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

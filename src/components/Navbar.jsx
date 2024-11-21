import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { motion } from 'motion/react';

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <motion.img
            className="mx-2 w-10"
            src={logo}
            alt="Logo"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
              duration: 1,
            }}
          />
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-purple-200 dark:text-purple-400 dark:hover:bg-purple-700 dark:focus:ring-purple-600 hover:bg-cyan-500 hover:cursor-pointer"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 rounded md:p-0 hover:text-cyan-500 hover:font-semibold hover:cursor-pointer"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="block py-2 px-3 rounded md:p-0 hover:text-cyan-500 hover:font-semibold hover:cursor-pointer"
              >
                About
              </Link>
            </li>
            <li className="relative group">
              <button
                id="dropdownNavbarLink"
                className="flex items-center justify-between w-full py-2 px-3 rounded md:p-0 md:w-auto hover:text-slate-500 hover:font-semibold hover:cursor-pointer"
              >
                Resume
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdownNavbar"
                className="absolute hidden group-hover:block font-normal divide-y rounded-lg shadow w-44"
              >
                <ul className="py-2 text-sm bg-black border border-gray-100 rounded-lg" aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link
                      to="/Education"
                      className="block px-4 py-2 text-cyan-500 hover:text-purple-500 hover:font-semibold hover:cursor-pointer"
                    >
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Experience"
                      className="block px-4 py-2 text-cyan-500 hover:text-purple-500 hover:font-semibold hover:cursor-pointer"
                    >
                      Experience
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Technologies"
                      className="block px-4 py-2 text-cyan-500 hover:text-purple-500 hover:font-semibold hover:cursor-pointer"
                    >
                      Technologies
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link
                to="/Projects"
                className="block py-2 px-3 rounded md:p-0 hover:text-cyan-500 hover:font-semibold hover:cursor-pointer"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

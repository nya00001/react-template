import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-bohoclinic.webp';
import { motion } from 'motion/react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const toggleSubmenu = (key) => {
    setOpenSubmenu(openSubmenu === key ? null : key);
  };

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <motion.img
            className="mx-2 w-30"
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

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg lg:hidden bg-transparent hover:bg-[#b78b4b] group"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5 transition-colors duration-200 group-hover:stroke-[#FFD700]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Menu Items */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full lg:flex lg:items-center lg:w-auto`} id="navbar-dropdown">
          <ul className="flex flex-col lg:flex-row lg:space-x-2 font-medium p-4 lg:p-0 mt-4 lg:mt-0">

            <li>
              <Link to="/" className="block py-2 px-3 text-black hover:text-[#b78b4b] hover:font-semibold">Home</Link>
            </li>

            {/* Boho Dental Dropdown */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown('dental')}
                className="flex items-center justify-between w-full py-2 px-3 text-black hover:text-[#b78b4b] hover:font-semibold"
              >
                Boho Dental
                <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>

              <div className={`${openDropdown === 'dental' ? 'block' : 'hidden'} absolute z-20 bg-white border border-[#b78b4b] rounded-lg w-44 shadow`}>
                <ul className="py-2 text-sm rounded-lg">

                  {/* Service 1 with submenu */}
                  <li className="relative">
                    <button
                      onClick={() => toggleSubmenu('dental-sub')}
                      className="flex justify-between w-full px-4 py-2 text-black hover:text-[#b78b4b] hover:font-semibold"
                    >
                      Service 1
                      <svg className="w-2.5 h-2.5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                      </svg>
                    </button>
                    <div className={`${openSubmenu === 'dental-sub' ? 'block' : 'hidden'} absolute left-full top-0 bg-white border border-[#b78b4b] rounded-lg w-44 shadow`}>
                      <ul className="py-2 text-sm">
                        <li><Link to="/DentalService1A" className="block px-4 py-2 text-black hover:text-[#b78b4b]">Sub 1</Link></li>
                        <li><Link to="/DentalService1B" className="block px-4 py-2 text-black hover:text-[#b78b4b]">Sub 2</Link></li>
                        <li><Link to="/DentalService1C" className="block px-4 py-2 text-black hover:text-[#b78b4b]">Sub 3</Link></li>
                      </ul>
                    </div>
                  </li>

                  <li><Link to="/DentalService2" className="block px-4 py-2 text-black hover:text-[#b78b4b]">Service 2</Link></li>
                  <li><Link to="/DentalService3" className="block px-4 py-2 text-black hover:text-[#b78b4b]">Service 3</Link></li>
                </ul>
              </div>
            </li>

            {/* Boho Hair Transplant Dropdown */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown('hair')}
                className="flex items-center justify-between w-full py-2 px-3 text-black hover:text-[#b78b4b] hover:font-semibold"
              >
                Boho Hair Transplant
                <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>

              <div className={`${openDropdown === 'hair' ? 'block' : 'hidden'} absolute z-20 bg-white border border-[#b78b4b] rounded-lg w-44 shadow`}>
                <ul className="py-2 text-sm">
                  <li><Link to="/HairService1" className="block px-4 py-2 text-black hover:text-[#b78b4b]">Service A</Link></li>
                  <li><Link to="/HairService2" className="block px-4 py-2 text-black hover:text-[#b78b4b]">Service B</Link></li>
                  <li><Link to="/HairService3" className="block px-4 py-2 text-black hover:text-[#b78b4b]">Service C</Link></li>
                </ul>
              </div>
            </li>

            <li>
              <Link to="/Projects" className="block py-2 px-3 text-black hover:text-[#b78b4b] hover:font-semibold">Contact</Link>
            </li>

            {/* Mobile "Free Consultation" button */}
            <li className="block lg:hidden mt-4">
              <Link
                to="/book"
                className="block w-full text-center rounded-md border border-[#b78b4b] px-4 py-2 text-md font-semibold text-black hover:bg-[#b78b4b] hover:text-black transition duration-200"
              >
                Free Consultation
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop "Free Consultation" button */}
        <div className="hidden lg:block">
          <Link
            to="/book"
            className="inline-block rounded-md border border-[#b78b4b] px-4 py-2 text-md font-semibold text-black hover:bg-[#b78b4b] hover:text-black transition duration-200"
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { headerData } from "../Header/Navigation/menuData";

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY >= 80);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setNavbarOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = navbarOpen ? "hidden" : "";
  }, [navbarOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white z-50 transition-all duration-300 ${
        sticky ? "shadow-lg" : ""
      }`}
    >
      {/* =================== TOP BAR =================== */}

      <div className="border-b">
        <div className="container mx-auto lg:max-w-screen-xl px-4 py-3 flex items-center justify-between">

          {/* Logo */}
          <Logo />

          {/* Institute Name */}
          <div className="flex-1 text-center px-3">
            <h2 className="font-bold text-lg md:text-2xl text-black">
              DIEIT
            </h2>

            <p className="text-[10px] md:text-sm text-gray-700">
              Dream Institute of Education and Information Technology
            </p>
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:flex">
            <button
              onClick={() =>
                window.open("http://admin.dieit.in", "_blank")
              }
              className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90"
            >
              Admin Login
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="p-2 rounded-lg bg-gray-200"
            >
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
              <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
            </button>
          </div>
        </div>
      </div>

      {/* =================== NAVIGATION =================== */}

      <div className="hidden lg:block bg-white">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <nav className="flex justify-center gap-8 py-4">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
        </div>
      </div>

      {/* =================== MOBILE MENU =================== */}

      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-xl transition-transform duration-300 ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Logo />

          <button
            onClick={() => setNavbarOpen(false)}
            className="text-2xl"
          >
            ✕
          </button>
        </div>

        <div className="p-4">

          <button
            onClick={() => {
              window.open("http://admin.dieit.in", "_blank");
              setNavbarOpen(false);
            }}
            className="w-full bg-primary text-white py-3 rounded-lg mb-6"
          >
            Admin Login
          </button>

          <nav className="flex flex-col gap-4">
            {headerData.map((item, index) => (
              <MobileHeaderLink
                key={index}
                item={item}
                onClick={() => setNavbarOpen(false)}
              />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
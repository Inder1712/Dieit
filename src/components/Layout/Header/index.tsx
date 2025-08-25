"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { useTheme } from "next-themes";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Sticky header effect
  const handleScroll = () => setSticky(window.scrollY >= 80);

  // Close menus on outside click
  const handleClickOutside = (event: MouseEvent) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && navbarOpen) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 bg-white ${
        sticky ? "shadow-lg py-4" : "shadow-none py-6"
      }`}
    >
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between px-4 relative">
        <Logo />

        {/* Mobile Centered Title */}
        <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2 text-black font-bold text-center">
          <div>DIEIT</div>
          <div className="text-[10px] font-normal">
            (Dream Institute of Education and Information Technology)
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-grow items-center gap-8 justify-center">
          {headerData.map((item, index) => (
            <HeaderLink key={index} item={item} />
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => window.open("http://admin.dieit.in", "_blank")}
            className="bg-primary text-white hover:bg-primary/15 hover:text-primary px-6 py-3 rounded-full text-lg font-medium"
          >
            Admin Login
          </button>

        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="p-2 rounded-lg bg-gray-200"
            aria-label="Toggle mobile menu"
          >
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
            <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex items-center justify-between p-4 bg-white">
          <Logo />
          <button
            onClick={() => setNavbarOpen(false)}
            className="w-6 h-6 text-black"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        <nav className="flex flex-col items-start p-4 gap-4">
          {headerData.map((item, index) => (
            <MobileHeaderLink
              key={index}
              item={item}
              onClick={() => setNavbarOpen(false)}
            />
          ))}
          <div className="mt-4 flex flex-col space-y-4 w-full">
            <button
              onClick={() => {
                window.open("http://admin.dieit.in", "_blank");
                setNavbarOpen(false);
              }}
              className="bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
            >
              Admin Login
            </button>
            
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

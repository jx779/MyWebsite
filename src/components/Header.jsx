import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa"

const navMenu = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [sheetOpen, setSheetOpen] = useState(false); // contact sheet
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b-2 border-stone-800 ${
        scrolled
          ? "bg-gradient-to-r from-rose-200 to-red-200 shadow-lg"
          : "bg-red-200"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="text-2xl text-stone-800 hover:text-white transition-colors duration-300"
            style={{ fontFamily: "satoshi-black" }}
          >
            &lt;Qwerty/&gt;
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex justify-end px-12 flex-1 space-x-9 text-stone-800 text-base"
          style={{ fontFamily: "satoshi-medium" }}
        >
          {navMenu.map((link) => (
            <Link
              to={link.href}
              key={link.href}
              className={`relative group transition-colors duration-300 ${
                currentPath === link.href
                  ? "text-white"
                  : "hover:text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute left-0 bottom-[-4px] h-[2px] bg-stone-800 transition-all duration-300 ${
                  currentPath === link.href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Button */}

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-stone-800 hover:scale-110 transition-transform duration-200"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-rose-200 to-red-200 border-t border-stone-800 px-6 py-4 space-y-4">
          {navMenu.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`block rounded p-2 transition ${
                currentPath === link.href
                  ? "bg-stone-800 text-white"
                  : "text-stone-800 hover:bg-stone-800 hover:text-white"
              }`}
              style={{ fontFamily: "satoshi-medium" }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            onClick={() => {
              setSheetOpen(true);
              setIsOpen(false);
            }}
            className="w-full bg-red-300 hover:bg-red-100"
          >
            Contact Me
          </Button>
        </div>
      )}

      
    </header>
  );
};

export default Header

import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="sticky top-0 shadow-md h-[100px] w-full bg-black/50 rounded-xl flex justify-between md:justify-around items-center text-white font-serif font-bold px-6">
      <div>
        <span className="text-[30px] hover:text-amber-400">halozra();</span>
      </div>
      <div className="hidden md:flex gap-6 text-[20px]">
        <Link href="/" className="hover:text-amber-400 transition-all duration-200 ease-in-out transform hover:translate-y-[-2px]">
          Home
        </Link>
        <Link href="/about" className="hover:text-amber-400 transition-all duration-200 ease-in-out transform hover:translate-y-[-2px]">
          About
        </Link>
        <Link href="/portfolio" className="hover:text-amber-400 transition-all duration-200 ease-in-out transform hover:translate-y-[-2px]">
          Portfolio
        </Link>
        <Link href="/contact" className="hover:text-amber-400 transition-all duration-200 ease-in-out transform hover:translate-y-[-2px]">
          Contact
        </Link>
      </div>
      <div className="hidden md:block">
        <a
          href="https://github.com/halozra"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-400 transition"
          title="Visit GitHub"
        >
          <GitHubIcon fontSize="large" />
        </a>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="hover:text-amber-400 transition">
          <span className="text-3xl">☰</span>
        </button>
        {menuOpen && (
          <div className="absolute top-[100px] right-0 bg-black/50 w-full text-center py-4 shadow-lg rounded-b-xl">
            <ul className="flex flex-col gap-4 text-[20px]">
              <li>
                <Link href="/" onClick={toggleMenu} className="hover:text-amber-400 transition-all duration-200 ease-in-out transform hover:translate-y-[-2px]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={toggleMenu} className="hover:text-amber-400 transition-all duration-200 ease-in-out transform hover:translate-y-[-2px]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" onClick={toggleMenu} className="hover:text-amber-400 transition-all duration-200 ease-in-out transform hover:translate-y-[-2px]">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={toggleMenu} className="hover:text-amber-400 transition-all duration-200 ease-in-out transform hover:translate-y-[-2px]">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/halozra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-amber-400 transition"
                  title="Visit GitHub"
                >
                  <GitHubIcon fontSize="large" />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

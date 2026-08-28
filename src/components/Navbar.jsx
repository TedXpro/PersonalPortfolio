import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FileText, Menu, X, ArrowUpRight } from "lucide-react";

import { logo } from "../assets";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Projects" },
  { id: "experience", title: "Experience" },
  { id: "contact", title: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--primary)]/85 backdrop-blur-xl border-b border-[var(--glass-border)] shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src={logo}
            alt="Yohannes logo"
            className="w-8 h-8 object-contain dark:invert group-hover:scale-110 transition-transform"
          />

          <div className="flex flex-col">
            <span className="text-[var(--text-primary)] text-base font-bold tracking-tight">
              Yohannes Woldeyes
            </span>
            <span className="text-[11px] text-secondary font-medium hidden sm:block">
              Software Engineer
            </span>
          </div>
        </Link>


        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="list-none flex flex-row gap-7 items-center">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title
                    ? "text-accent-purple font-semibold"
                    : "text-secondary font-medium"
                } hover:text-[var(--text-primary)] text-sm cursor-pointer transition-colors`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className="h-5 w-[1px] bg-[var(--glass-border)]" />

          {/* Right Actions: Theme Toggle & Resume */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent-purple hover:bg-purple-600 text-white text-xs font-semibold shadow-md shadow-accent-purple/20 transition-all hover:scale-105 active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>
        </nav>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />

          <button
            onClick={() => setToggle(!toggle)}
            className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-secondary hover:text-[var(--text-primary)] transition-colors"
            aria-label="Toggle Menu"
          >
            {toggle ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {toggle && (
        <div className="md:hidden border-b border-[var(--glass-border)] bg-[var(--primary)]/95 backdrop-blur-2xl px-6 py-5 shadow-2xl animate-fade-in">
          <ul className="list-none flex flex-col gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`text-sm font-semibold cursor-pointer py-1 ${
                  active === nav.title ? "text-accent-purple" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(false);
                  setActive(nav.title);
                }}
              >
                <a href={`#${nav.id}`} className="block w-full">
                  {nav.title}
                </a>
              </li>
            ))}
            <li className="pt-3 border-t border-[var(--glass-border)] flex items-center gap-3">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 rounded-xl bg-accent-purple text-white text-xs font-semibold shadow-md"
              >
                View Resume
              </a>
              <a
                href="#contact"
                onClick={() => setToggle(false)}
                className="flex-1 text-center py-2.5 rounded-xl glass-card text-[var(--text-primary)] text-xs font-semibold"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;




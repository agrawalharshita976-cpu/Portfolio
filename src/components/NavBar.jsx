import React, { useState, useEffect } from "react";
// import { TextShimmer } from "./TextShimmer";
// import { Dock, DockIcon, DockItem, DockLabel } from "./Dock";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "/resume.pdf" },
    { name: "Contact", href: "#Contact" },
    { name: "About", href: "#About" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 md:px-12 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-white bg-white/80 backdrop-blur-sm shadow-xl border border-slate-100 overflow-hidden"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-slate-900 cursor-pointer group">
          Portfolio
          {/* <TextShimmer className="text-2xl font-black tracking-tight">
            Portfolio
          </TextShimmer> */}
          <span className="text-indigo-600 group-hover:animate-pulse">.</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 list-none items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a href="/resume.pdf" download="Harshita_Resume.pdf">
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 active:scale-95">
              Download CV
            </button>
          </a>
        </div>

        <button
          className="md:hidden p-2 text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block text-lg font-semibold text-slate-600 hover:text-indigo-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="/resume.pdf"
              download="Harshita_Resume.pdf"
              className="block w-full text-center bg-indigo-600 text-white py-4 rounded-xl font-bold"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

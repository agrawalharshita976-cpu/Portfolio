import { useState } from 'react';
import { Search, Moon, Sun, User, ExternalLink, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Navbar({
  onOpenSearch,
  onOpenProfile,
  isLightMode,
  onToggleTheme,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.07] bg-[#08080a]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Left: Brand & Navigation */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="flex items-center gap-2 group transition-opacity hover:opacity-90"
          >
            {/* Geometric abstract logo */}
            <div className="w-5 h-5 flex items-center justify-center text-zinc-100">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2L2 22h7l3-6 3 6h7L12 2zm0 6l3.5 7h-7L12 8z" />
              </svg>
            </div>
            <span className="font-semibold text-sm tracking-tight text-zinc-100 flex items-center gap-1">
              {portfolioData.personal.brandName}
            </span>
          </a>

          {/* Three dots badge from reference */}
          <div className="hidden md:flex items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer select-none px-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-5 text-xs text-zinc-400 font-medium">
            <a
              href="#projects"
              className="hover:text-zinc-100 transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-zinc-100 transition-colors"
            >
              Stack
            </a>
            <a
              href="#playground"
              className="hover:text-zinc-100 transition-colors"
            >
              Playground
            </a>
            {/* <a
              href="#experience"
              className="hover:text-zinc-100 transition-colors"
            >
              Experience
            </a> */}
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-0.5 hover:text-zinc-100 transition-colors"
            >
              Github <ExternalLink className="w-2.5 h-2.5 opacity-70 ml-0.5" />
            </a>
          </nav>
        </div>

        {/* Right: Search, Theme Toggle, Profile Button */}
        <div className="flex items-center gap-3">
          {/* Search Trigger matching reference */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-3 px-3 py-1.5 text-xs text-zinc-400 bg-zinc-900/90 hover:bg-zinc-800/80 border border-white/[0.08] hover:border-white/[0.15] rounded-md transition-all group"
            title="Search portfolio (⌘K or Ctrl+K)"
          >
            <div className="flex items-center gap-2">
              <Search className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-200" />
              <span className="text-zinc-400 group-hover:text-zinc-300">Search...</span>
            </div>
            <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono-tech text-zinc-400 bg-zinc-800/80 border border-zinc-700/60 rounded">
              ⌘K
            </kbd>
          </button>

          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 rounded-md transition-colors"
          >
            {isLightMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          {/* Amber Profile Button matching reference */}
          <button
            onClick={onOpenProfile}
            aria-label="User profile & contact"
            className="w-8 h-8 rounded-md bg-[#f5a623] hover:bg-[#fbbf24] text-black flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-sm shadow-amber-500/20"
            title="Profile & Contact"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-zinc-400 hover:text-zinc-100 rounded-md"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0c0c10] px-4 py-4 space-y-3 text-sm">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-amber-400"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-amber-400"
          >
            Stack
          </a>
          <a
            href="#playground"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-amber-400"
          >
            Playground
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-amber-400"
          >
            Experience
          </a>
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-zinc-300 hover:text-amber-400"
          >
            Github <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </div>
      )}
    </header>
  );
}

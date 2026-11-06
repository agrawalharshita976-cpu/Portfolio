import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#070709] py-14 px-4 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Status */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono-tech text-zinc-300">
              AVAILABLE FOR HIRE 2026
            </span>
          </div>
          <span className="hidden sm:inline text-zinc-700">•</span>
          <span className="text-zinc-500 font-mono-tech">
            {portfolioData.personal.role}
          </span>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-4 text-zinc-400">
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.socials.twitter}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            title="Twitter"
          >
            <TwitterIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.socials.email}
            className="hover:text-amber-400 transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back to top */}
        <div className="flex items-center gap-4">
          <span className="text-zinc-500 font-mono-tech text-[11px]">
            © {new Date().getFullYear()} {portfolioData.personal.brandName}
          </span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-zinc-900 border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            title="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

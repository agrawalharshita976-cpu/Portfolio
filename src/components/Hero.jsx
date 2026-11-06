import { ArrowRight, Mail } from 'lucide-react';
import { PixelHammer } from './PixelHammer';
import { portfolioData } from '../data/portfolioData';

export function Hero({ onOpenContact }) {
  const { hero } = portfolioData;

  return (
    <section className="relative pt-20 pb-28 md:pt-28 md:pb-36 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Grid and Spotlight Glow */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-90" />
      <div className="absolute inset-0 bg-grid-glow pointer-events-none" />
      
      {/* Subtle top vignette */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#08080a] to-transparent pointer-events-none" />
      {/* Bottom fade into content */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#08080a] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Eyebrow / Status Tag matching reference */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-8 rounded-full bg-zinc-900/60 border border-white/[0.08] backdrop-blur-sm shadow-inner">
          <span className="text-[11px] sm:text-xs font-mono-tech tracking-[0.22em] text-zinc-300 uppercase">
            {hero.badge}
          </span>
        </div>

        {/* Main Headline Line 1: Premium [Pixel Hammer] handcrafted */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white flex flex-wrap items-center justify-center gap-x-3.5 gap-y-2 mb-3">
          <span className="font-sans font-medium tracking-tight text-zinc-100">
            {hero.titleLine1Sans}
          </span>
          <span className="mx-1 inline-flex items-center">
            <PixelHammer className="w-8 h-8 sm:w-11 sm:h-11 md:w-12 md:h-12" />
          </span>
          <span className="font-serif-italic text-5xl sm:text-7xl md:text-8xl text-zinc-100 font-normal">
            {hero.titleLine1Serif}
          </span>
        </h1>

        {/* Main Headline Line 2: Bracket Box [ React animations ] */}
        <div className="my-3 sm:my-4">
          <div className="bracket-box px-6 sm:px-8 py-2 sm:py-2.5">
            {/* 4 corner brackets */}
            <span className="bracket-tl" />
            <span className="bracket-tr" />
            <span className="bracket-bl" />
            <span className="bracket-br" />

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-medium tracking-tight text-zinc-100">
              {hero.titleLine2Bracket}
            </h2>
          </div>
        </div>

        {/* Description / Subtitle */}
        <p className="mt-6 sm:mt-8 text-zinc-400 text-sm sm:text-base md:text-[17px] max-w-2xl leading-relaxed font-normal">
          {hero.description}
        </p>

        {/* Call-to-Action Buttons matching reference */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          {/* Primary Amber Button */}
          <a
            href={hero.primaryBtn.link}
            className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-md bg-[#f5a623] hover:bg-[#fbbf24] text-black transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-amber-500/10 cursor-pointer"
          >
            <span>{hero.primaryBtn.text}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          {/* Secondary Dashed/Border Button */}
          <button
            onClick={onOpenContact}
            className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md bg-[#0e0e12]/80 hover:bg-[#16161c] text-zinc-200 border border-zinc-700/70 border-dashed hover:border-zinc-500 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-zinc-400 group-hover:text-amber-400 transition-colors" />
            <span>Get in touch</span>
            <ArrowRight className="w-4 h-4 text-zinc-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-zinc-200" />
          </button>
        </div>
      </div>
    </section>
  );
}

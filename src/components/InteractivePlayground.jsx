import { useState } from 'react';
import { Sparkles, Check } from 'lucide-react';

export function InteractivePlayground() {
  const [activeTab, setActiveTab] = useState('brackets');
  const [isHovered, setIsHovered] = useState(false);
  const [sliderVal, setSliderVal] = useState(50);
  const [toggleActive, setToggleActive] = useState(true);
  const [clickCount, setClickCount] = useState(0);

  return (
    <section id="playground" className="py-20 px-4 max-w-7xl mx-auto scroll-mt-12">
      <div className="border border-white/[0.08] bg-[#0b0b0e] rounded-2xl p-6 sm:p-10 relative overflow-hidden">
        {/* Glow behind */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-amber-500/[0.04] blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono-tech text-amber-400 tracking-wider uppercase mb-1 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              // 02. INTERACTIVE MOTION LAB
            </div>
            <h3 className="text-2xl sm:text-3xl font-medium text-white flex items-center gap-2">
              <span>Interactive</span>
              <span className="font-serif-italic text-3xl sm:text-4xl text-zinc-200">Components</span>
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Live physics, spring micro-interactions, and reactive bracket HUDs.
            </p>
          </div>

          {/* Playground Tabs */}
          <div className="flex gap-1.5 p-1 bg-zinc-900/90 rounded-lg border border-white/[0.08] self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('brackets')}
              className={`px-3 py-1.5 text-xs font-mono-tech rounded transition-colors cursor-pointer ${
                activeTab === 'brackets' ? 'bg-amber-400 text-black font-semibold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Bracket Focus
            </button>
            <button
              onClick={() => setActiveTab('spring')}
              className={`px-3 py-1.5 text-xs font-mono-tech rounded transition-colors cursor-pointer ${
                activeTab === 'spring' ? 'bg-amber-400 text-black font-semibold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Spring Physics
            </button>
            <button
              onClick={() => setActiveTab('toggles')}
              className={`px-3 py-1.5 text-xs font-mono-tech rounded transition-colors cursor-pointer ${
                activeTab === 'toggles' ? 'bg-amber-400 text-black font-semibold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Micro-Controls
            </button>
          </div>
        </div>

        {/* Lab Display Canvas */}
        <div className="min-h-[260px] flex items-center justify-center p-8 bg-[#070709] border border-white/[0.06] rounded-xl relative overflow-hidden bg-grid-pattern">
          {activeTab === 'brackets' && (
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="bracket-box p-8 sm:p-12 transition-all duration-300 cursor-pointer select-none group"
            >
              {/* Dynamic Animated Brackets */}
              <span className={`bracket-tl transition-all duration-300 ${isHovered ? 'scale-125 border-amber-400' : ''}`} />
              <span className={`bracket-tr transition-all duration-300 ${isHovered ? 'scale-125 border-amber-400' : ''}`} />
              <span className={`bracket-bl transition-all duration-300 ${isHovered ? 'scale-125 border-amber-400' : ''}`} />
              <span className={`bracket-br transition-all duration-300 ${isHovered ? 'scale-125 border-amber-400' : ''}`} />

              <div className="text-center">
                <span className="text-xs font-mono-tech text-zinc-500 block mb-2 uppercase tracking-widest">
                  {isHovered ? '[ TARGET ACQUIRED ]' : '[ HOVER TO ENGAGE ]'}
                </span>
                <span className="text-2xl sm:text-4xl font-serif-italic text-zinc-100 group-hover:text-amber-300 transition-colors">
                  Fluid Dynamics & Pixel Harmony
                </span>
                <span className="block text-xs font-mono-tech text-zinc-400 mt-2">
                  Atelier aesthetic bracket targeting system
                </span>
              </div>
            </div>
          )}

          {activeTab === 'spring' && (
            <div className="flex flex-col items-center gap-6 max-w-md w-full text-center">
              <div
                className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-black font-bold text-xl shadow-xl shadow-amber-500/20 cursor-pointer transition-all duration-300 select-none"
                style={{
                  transform: `scale(${1 + sliderVal / 200}) rotate(${sliderVal - 50}deg)`,
                }}
                onClick={() => setClickCount(c => c + 1)}
              >
                {clickCount}
              </div>
              <div className="w-full space-y-2">
                <div className="flex justify-between text-xs font-mono-tech text-zinc-400">
                  <span>Spring Tension</span>
                  <span>{sliderVal}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={sliderVal}
                  onChange={(e) => setSliderVal(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer bg-zinc-800"
                />
              </div>
              <p className="text-xs text-zinc-500 font-mono-tech">
                Click box to increment • Drag slider to adjust tension
              </p>
            </div>
          )}

          {activeTab === 'toggles' && (
            <div className="flex flex-wrap items-center justify-center gap-6">
              {/* Dynamic switch */}
              <div
                onClick={() => setToggleActive(!toggleActive)}
                className={`w-14 h-8 rounded-full p-1 cursor-pointer transition-colors duration-300 flex items-center ${
                  toggleActive ? 'bg-amber-400' : 'bg-zinc-800'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full bg-black shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                    toggleActive ? 'translate-x-6' : 'translate-x-0'
                  }`}
                >
                  {toggleActive && <Check className="w-3.5 h-3.5 text-amber-400" />}
                </div>
              </div>

              {/* Status pill */}
              <div className="px-4 py-2 rounded-lg bg-zinc-900 border border-white/[0.08] text-xs font-mono-tech flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${toggleActive ? 'bg-green-400 animate-pulse' : 'bg-zinc-600'}`} />
                <span className="text-zinc-300">State: {toggleActive ? 'ACTIVE_PRO' : 'STANDBY'}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

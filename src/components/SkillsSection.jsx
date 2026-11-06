import { Cpu, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 max-w-7xl mx-auto scroll-mt-12">
      <div className="border-b border-white/[0.06] pb-8 mb-12">
        <div className="text-xs font-mono-tech text-amber-400 tracking-wider uppercase mb-2 flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5" />
          // 03. TOOLCHAIN & DISCIPLINE
        </div>
        <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight flex items-center gap-3">
          <span>Technical</span>
          <span className="font-serif-italic text-4xl sm:text-5xl text-zinc-100">Proficiency</span>
        </h2>
        <p className="mt-2 text-sm text-zinc-400 max-w-lg">
          The languages, design systems, and rendering runtimes I rely on daily to ship crisp, production interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioData.skills.map((cat) => (
          <div
            key={cat.category}
            className="p-6 rounded-xl bg-[#0c0c10]/70 border border-white/[0.07] hover:border-white/[0.15] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <h3 className="text-xs font-mono-tech tracking-wider uppercase text-zinc-300">
                  {cat.category}
                </h3>
              </div>

              <ul className="space-y-3">
                {cat.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between text-xs py-1 border-b border-white/[0.03] last:border-0"
                  >
                    <span className="text-zinc-200 font-medium">{skill.name}</span>
                    {skill.level && (
                      <span className="text-[10px] font-mono-tech px-1.5 py-0.5 rounded bg-zinc-800/80 text-zinc-400 border border-white/[0.04]">
                        {skill.level}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center gap-1.5 text-[11px] font-mono-tech text-zinc-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" />
              <span>Production tested</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

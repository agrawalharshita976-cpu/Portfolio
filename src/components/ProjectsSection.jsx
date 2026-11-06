import { useState } from 'react';
import { ExternalLink, Star, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'React', 'Python', 'Java', 'Excel'];

  const filteredProjects = activeFilter === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.tags.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase())));

  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto relative scroll-mt-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/[0.06] pb-8">
        <div>
          <div className="text-xs font-mono-tech text-amber-400 tracking-wider uppercase mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            // 01. CATALOG OF WORKS
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight flex items-center gap-3">
            <span>Selected</span>
            <span className="font-serif-italic text-4xl sm:text-5xl text-zinc-100">Creations</span>
          </h2>
          <p className="mt-2 text-sm text-zinc-400 max-w-lg">
            Projects I've built across full-stack development, computer vision, Java and data tools, focused on clean, working solutions.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 text-xs font-mono-tech rounded-md transition-all cursor-pointer ${
                activeFilter === filter
                  ? 'bg-zinc-100 text-black font-semibold shadow-sm'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border border-white/[0.07] hover:border-white/[0.15]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col justify-between p-7 rounded-xl bg-[#0c0c10]/90 border border-white/[0.07] hover:border-amber-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/[0.03] overflow-hidden"
          >
            {/* Top glowing ambient gradient on hover */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-amber-400/[0.03] to-transparent rounded-bl-full pointer-events-none group-hover:from-amber-400/[0.08] transition-colors duration-500" />

            <div>
              {/* Badge & Stars */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono-tech uppercase bg-zinc-800/80 text-zinc-300 border border-white/[0.06]">
                  <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                  {project.badge || 'Project'}
                </span>

                {project.stars && (
                  <div className="flex items-center gap-1 text-xs text-zinc-500 font-mono-tech">
                    <Star className="w-3.5 h-3.5 text-amber-400/80 fill-amber-400/20" />
                    <span>{project.stars}</span>
                  </div>
                )}
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-medium text-white group-hover:text-amber-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-mono-tech text-zinc-400 mt-1 mb-3">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-zinc-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Bottom: Tags & Links */}
            <div className="mt-8 pt-5 border-t border-white/[0.05] flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[11px] font-mono-tech text-zinc-400 bg-zinc-900 border border-white/[0.05] rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 text-zinc-400 hover:text-white transition-colors"
                    title="View GitHub source"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 text-zinc-400 hover:text-amber-400 transition-colors"
                    title="Open live preview"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
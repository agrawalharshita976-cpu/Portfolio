import { useState, useEffect } from 'react';
import { Search, FolderKanban, Cpu, Briefcase, Mail, Sparkles, Copy, Check, X } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export function CommandMenu({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'projects',
      label: 'Explore Projects & Works',
      icon: <FolderKanban className="w-4 h-4 text-amber-400" />,
      action: () => {
        window.location.hash = '#projects';
        onClose();
      },
    },
    {
      id: 'playground',
      label: 'Interactive Animation Playground',
      icon: <Sparkles className="w-4 h-4 text-purple-400" />,
      action: () => {
        window.location.hash = '#playground';
        onClose();
      },
    },
    {
      id: 'skills',
      label: 'Browse Tech Stack & Skills',
      icon: <Cpu className="w-4 h-4 text-emerald-400" />,
      action: () => {
        window.location.hash = '#skills';
        onClose();
      },
    },
    // {
    //   id: 'experience',
    //   label: 'View Work Experience & Timeline',
    //   icon: <Briefcase className="w-4 h-4 text-blue-400" />,
    //   action: () => {
    //     window.location.hash = '#experience';
    //     onClose();
    //   },
    // },
    {
      id: 'copy-email',
      label: `Copy Email (${portfolioData.personal.email})`,
      icon: copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-zinc-400" />,
      action: () => {
        navigator.clipboard.writeText(portfolioData.personal.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
    },
    {
      id: 'github',
      label: 'Open GitHub Profile',
      icon: <GithubIcon className="w-4 h-4 text-zinc-300" />,
      action: () => {
        window.open(portfolioData.socials.github, '_blank');
        onClose();
      },
    },
    {
      id: 'contact',
      label: 'Send Email Message',
      icon: <Mail className="w-4 h-4 text-amber-400" />,
      action: () => {
        window.location.href = portfolioData.socials.email;
        onClose();
      },
    },
  ];

  const filtered = actions.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-sm">
      <div
        className="w-full max-w-lg bg-[#0e0e12] border border-white/[0.12] rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-white/[0.08] gap-3">
          <Search className="w-4 h-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-zinc-500 hover:text-zinc-200 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-2 max-h-80 overflow-y-auto space-y-1">
          <div className="px-3 py-1.5 text-[11px] font-mono-tech text-zinc-500 uppercase tracking-wider">
            Navigation & Quick Actions
          </div>
          {filtered.length === 0 ? (
            <div className="px-4 py-8 text-center text-xs text-zinc-500 font-mono-tech">
              No matching actions found
            </div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className="w-full flex items-center justify-between px-3 py-2.5 text-xs text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-md transition-colors group text-left"
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                <span className="text-[10px] font-mono-tech text-zinc-600 group-hover:text-zinc-400">
                  Select ↵
                </span>
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 border-t border-white/[0.06] bg-[#09090c] flex items-center justify-between text-[11px] text-zinc-500 font-mono-tech">
          <span>Navigate with arrows</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
}

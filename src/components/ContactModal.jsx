import { useState } from 'react';
import { Mail, Copy, Check, X, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export function ContactModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <div
        className="w-full max-w-md bg-[#0d0d11] border border-white/[0.12] rounded-2xl p-6 sm:p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Profile Card Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#f5a623] text-black flex items-center justify-center font-bold text-lg shadow-md shadow-amber-500/20">
            {portfolioData.personal.name.charAt(0)}
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">
              {portfolioData.personal.name}
            </h3>
            <p className="text-xs text-zinc-400 font-mono-tech">
              {portfolioData.personal.role}
            </p>
          </div>
        </div>

        {/* Quick Email Copy */}
        <div className="mb-6 p-3 rounded-lg bg-zinc-900/90 border border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <Mail className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-xs text-zinc-300 font-mono-tech truncate">
              {portfolioData.personal.email}
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-mono-tech text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded transition-colors shrink-0 ml-2 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-400" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Quick Message Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-[11px] font-mono-tech uppercase text-zinc-400 mb-1">
              Your Name
            </label>
            <input
              type="text"
              required
              placeholder="Jane Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 text-xs bg-zinc-900 border border-white/[0.08] rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
            />
          </div>
          <div>
            <label className="block text-[11px] font-mono-tech uppercase text-zinc-400 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="jane@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 text-xs bg-zinc-900 border border-white/[0.08] rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
            />
          </div>
          <div>
            <label className="block text-[11px] font-mono-tech uppercase text-zinc-400 mb-1">
              Message
            </label>
            <textarea
              rows={3}
              required
              placeholder="Hi Harshita, let's build something great..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3 py-2 text-xs bg-zinc-900 border border-white/[0.08] rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={sent}
            className="w-full py-2.5 mt-2 rounded-lg bg-[#f5a623] hover:bg-[#fbbf24] text-black font-semibold text-xs transition-transform active:scale-98 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 cursor-pointer"
          >
            {sent ? (
              <>
                <Check className="w-4 h-4" />
                <span>Message Dispatched!</span>
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>

        {/* Social Links Footer */}
        <div className="flex items-center justify-center gap-4 mt-6 pt-5 border-t border-white/[0.06] text-zinc-400">
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.socials.twitter}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <TwitterIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

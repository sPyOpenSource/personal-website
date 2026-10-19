import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Twitter, ArrowRight, Terminal, Sparkles, Code2, Download, Circle } from 'lucide-react';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenContact }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto w-full text-center relative z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-mono shadow-inner mb-6 backdrop-blur-sm">
          <Circle className="w-2.5 h-2.5 fill-emerald-400 animate-pulse" />
          <span>{PERSONAL_INFO.status}</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-100 tracking-tight leading-[1.1] mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">Digital Universes</span> & High Performance Web Systems
        </h1>

        {/* Tagline / Subheading */}
        <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Hi, I'm <strong className="font-semibold text-indigo-300">{PERSONAL_INFO.fullName}</strong>. Full stack engineer, open-source maintainer, and 3D web enthusiast.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-sm backdrop-blur-sm transition-all hover:border-slate-600"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Contact Me</span>
          </button>

          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-950/90 hover:bg-slate-900 text-indigo-300 border border-indigo-500/30 font-mono text-sm transition-all hover:border-indigo-400"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Open Terminal</span>
          </button>
        </div>

        {/* Social Links & Resume */}
        <div className="flex items-center justify-center gap-6 pt-6 border-t border-slate-800/60 max-w-md mx-auto">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-100 border border-slate-800 transition-colors"
            title="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-100 border border-slate-800 transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={PERSONAL_INFO.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-100 border border-slate-800 transition-colors"
            title="Twitter / X"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href={PERSONAL_INFO.email ? `mailto:${PERSONAL_INFO.email}` : '#'}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-xs font-mono text-slate-300 border border-slate-800 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-indigo-400" />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

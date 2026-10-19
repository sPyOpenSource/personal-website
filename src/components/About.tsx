import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { User, MapPin, Award, Code, GitCommit, Star, Globe } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <User className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase">
            Biography
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-10">
          About Me & Philosophy
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Bio Card */}
          <div className="lg:col-span-2 space-y-6 bg-slate-900/60 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-800/80 shadow-xl">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              My engineering background combines full stack TypeScript development with a deep appreciation for 3D graphics (Three.js/WebGL), clean UI architecture, and open source collaboration. I believe software should be fast, visually captivating, and enjoyable to maintain.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/70 backdrop-blur-md p-5 rounded-2xl border border-slate-800 text-center hover:border-indigo-500/40 transition-colors">
              <Award className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-100 font-mono">
                {PERSONAL_INFO.stats.yearsExperience}+
              </div>
              <div className="text-xs text-slate-400 mt-1">Years Experience</div>
            </div>

            <div className="bg-slate-900/70 backdrop-blur-md p-5 rounded-2xl border border-slate-800 text-center hover:border-indigo-500/40 transition-colors">
              <Code className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-100 font-mono">
                {PERSONAL_INFO.stats.projectsCompleted}+
              </div>
              <div className="text-xs text-slate-400 mt-1">Projects Built</div>
            </div>

            <div className="bg-slate-900/70 backdrop-blur-md p-5 rounded-2xl border border-slate-800 text-center hover:border-indigo-500/40 transition-colors">
              <GitCommit className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-100 font-mono">
                {PERSONAL_INFO.stats.githubContributions}
              </div>
              <div className="text-xs text-slate-400 mt-1">Git Contributions</div>
            </div>

            <div className="bg-slate-900/70 backdrop-blur-md p-5 rounded-2xl border border-slate-800 text-center hover:border-indigo-500/40 transition-colors">
              <Star className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-100 font-mono">
                {PERSONAL_INFO.stats.openSourceStars}+
              </div>
              <div className="text-xs text-slate-400 mt-1">GitHub Stars</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

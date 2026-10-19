import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Briefcase className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase">
            Career Timeline
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12">
          Experience & Achievements
        </h2>

        <div className="relative border-l-2 border-slate-800 ml-4 pl-6 sm:pl-8 space-y-10">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-500 group-hover:bg-indigo-500 group-hover:scale-125 transition-all shadow-md shadow-indigo-500/30" />

              <div className="bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-800 p-6 hover:border-indigo-500/40 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 text-xs font-mono border border-indigo-500/20">
                    {exp.type}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-4">
                  <span className="text-slate-300 font-medium">{exp.organization}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {exp.period}
                  </span>
                </div>

                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2 pt-3 border-t border-slate-800">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

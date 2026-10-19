import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Cpu, Code, Server, Wrench, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-indigo-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-purple-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-cyan-400" />;
      default:
        return <Cpu className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Cpu className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase">
            Technical Stack
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-10">
          Skills & Proficiencies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-indigo-500/40 transition-colors"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                  <div className="p-2 rounded-xl bg-slate-800/80">
                    {getIcon(category.iconName)}
                  </div>
                  <h3 className="font-bold text-lg text-slate-100">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-xs font-medium text-slate-300 mb-1.5">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          {skill.name}
                        </span>
                        <span className="font-mono text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-1.5 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

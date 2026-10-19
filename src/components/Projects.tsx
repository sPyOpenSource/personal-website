import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { FolderGit2, ExternalLink, Github, Star, GitFork, Sparkles, Filter } from 'lucide-react';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Full Stack', '3D & WebGL', 'Open Source', 'Tools'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <FolderGit2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase">
                Portfolio Showcase
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
              Featured Works & Open Source
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
            >
              <div>
                {/* Category Badge & Links */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 text-[11px] font-mono border border-indigo-500/20">
                    {project.category}
                  </span>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
                        title="GitHub Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-indigo-400 hover:text-indigo-300 hover:bg-indigo-950/50 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 text-[11px] font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Stars / Forks Stats */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-4">
                    {project.stars !== undefined && (
                      <span className="flex items-center gap-1 hover:text-amber-300 transition-colors">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
                        {project.stars}
                      </span>
                    )}
                    {project.forks !== undefined && (
                      <span className="flex items-center gap-1 hover:text-slate-200 transition-colors">
                        <GitFork className="w-3.5 h-3.5 text-slate-400" />
                        {project.forks}
                      </span>
                    )}
                  </div>

                  {project.featured && (
                    <span className="flex items-center gap-1 text-purple-400 text-[10px]">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

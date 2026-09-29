import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Filter, Layers, CheckCircle2, Eye } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './SocialIcons';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const categories = [
    'All',
    'Full-Stack AI & Healthcare',
    'Generative AI & RAG',
    'AI Agents & Automation',
    'Machine Learning & Data Science'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="projects" className="py-24 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 block">
              Production Implementations & Defended Systems
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Featured Projects<span className="text-white/30">.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-sm md:text-base leading-relaxed">
            Real-world deployments across clinical hospital ecosystems, multimodal RAG platforms, and agentic workflows.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-white text-black font-semibold shadow-lg shadow-white/5'
                  : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group p-7 sm:p-8 rounded-3xl bg-[#121218]/70 border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl"
            >
              <div>
                {/* Thumbnail Preview if Available */}
                {project.image && (
                  <div
                    onClick={() => setActiveProject(project)}
                    className="mb-5 h-48 w-full rounded-2xl overflow-hidden bg-black/50 border border-white/10 relative cursor-pointer group/img"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 opacity-90 group-hover/img:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-white backdrop-blur-[2px]">
                      <Eye className="w-4 h-4 text-emerald-400" />
                      <span>View Full Case Study & Interface</span>
                    </div>
                  </div>
                )}

                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[11px]">
                    {project.badge || project.category}
                  </span>
                  <span className="text-xs font-mono text-white/40">
                    {project.year}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-display text-2xl font-bold text-white mb-2.5 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  {project.summary}
                </p>

                {/* Key feature bullet */}
                <div className="space-y-2 mb-6">
                  {project.highlights.slice(0, 2).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-white/60">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 mb-6 border-t border-white/5">
                  {project.stack.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[11px] font-mono text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 5 && (
                    <span className="px-2 py-1 text-[11px] font-mono text-white/40">
                      +{project.stack.length - 5}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all border border-white/5"
                      title="View Source on GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Viewer */}
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}

      </div>
    </section>
  );
}

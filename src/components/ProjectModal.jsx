import React from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Layers, Eye } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#121218] border border-white/10 p-6 md:p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
            {project.badge || project.category}
          </span>
          <span className="text-white/40 font-mono text-xs">
            {project.year}
          </span>
        </div>

        <h3 className="font-display text-2xl md:text-4xl font-bold text-white mb-4">
          {project.title}
        </h3>

        <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
          {project.description}
        </p>

        {/* Project Screenshots Gallery */}
        {(() => {
          const gallery = [project.image, project.secondaryImage, project.tertiaryImage, project.quaternaryImage].filter(Boolean);
          if (gallery.length === 0) return null;
          return (
            <div className="mb-8 space-y-4">
              <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-white/50 flex items-center gap-2">
                <Eye className="w-3.5 h-3.5 text-emerald-400" />
                <span>Project Interface & Architecture Graphics ({gallery.length} Views)</span>
              </h4>
              
              <div className={`grid gap-4 ${gallery.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                {gallery.map((imgSrc, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden border border-white/10 bg-black/50 group/pic relative">
                    <img
                      src={imgSrc}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="w-full h-auto max-h-72 object-contain bg-[#0a0a0e] group-hover/pic:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Key Architectural Highlights */}
        <div className="mb-8">
          <h4 className="font-display text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>Architecture & Implementation Highlights</span>
          </h4>
          <div className="space-y-3">
            {project.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-white/50 mb-3 flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>Technologies & Tools</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-white/90"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Metric Pill & Links */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-emerald-400">
            Impact: <strong className="text-white">{project.metrics}</strong>
          </div>

          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-white/90 transition-all hover:scale-105"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

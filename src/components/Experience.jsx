import React from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { experience, education } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 block">
              Professional Journey & Academic Roots
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Work & Education<span className="text-white/30">.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-sm md:text-base leading-relaxed">
            Proven track record spanning multinational investment holdings, national initiatives, and technical instruction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Work Experience Timeline (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-emerald-400" />
              <span>Work & Applied Experience</span>
            </h3>

            <div className="space-y-6">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="p-7 rounded-2xl bg-[#121218]/60 border border-white/5 hover:border-white/15 transition-all group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="font-display text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {item.role}
                    </h4>
                    <span className="text-xs font-mono text-white/50 px-2.5 py-1 rounded bg-white/5 w-fit">
                      {item.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-emerald-400 mb-4">
                    <span className="font-semibold text-white/90">{item.company}</span>
                    <span className="text-white/30">·</span>
                    <span className="text-white/50">{item.companyNote}</span>
                    <span className="text-white/30">·</span>
                    <span className="text-white/50 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  </div>

                  <ul className="space-y-2 text-sm text-white/70">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 mt-2 shrink-0"></span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Card & Academic Details (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
              <span>Academic Foundation</span>
            </h3>

            <div className="p-7 rounded-2xl bg-gradient-to-br from-[#14141e] to-[#0e0e14] border border-white/10 sticky top-28 shadow-xl overflow-hidden">
              {/* Workspace Photo */}
              <div className="relative h-44 rounded-xl overflow-hidden mb-5 border border-white/10 group">
                <img 
                  src="/education-workspace.jpg" 
                  alt="Engineering & AI Development Workspace" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14141e] via-black/20 to-transparent"></div>
                <div className="absolute bottom-2 left-3 text-[10px] font-mono text-emerald-400 bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm border border-emerald-500/20">
                  Tanta University · ECE Lab
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-4">
                <Award className="w-3.5 h-3.5" />
                <span>GPA: {education.gpa}</span>
              </div>

              <h4 className="font-display text-xl font-bold text-white mb-2 leading-snug">
                {education.degree}
              </h4>

              <p className="text-sm font-semibold text-indigo-300 mb-1">
                {education.institution}
              </p>

              <div className="flex items-center gap-3 text-xs font-mono text-white/50 mb-6">
                <span>{education.location}</span>
                <span>·</span>
                <span>{education.graduationDate}</span>
              </div>

              <p className="text-xs text-white/70 leading-relaxed mb-6 pt-4 border-t border-white/5">
                {education.description}
              </p>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-[11px] font-mono uppercase text-white/40 block mb-1">
                  Core Engineering Areas
                </span>
                <p className="text-xs text-white/80 font-mono">
                  Signal Processing · Microprocessors · Computer Vision · Neural Architectures · Operating Systems
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

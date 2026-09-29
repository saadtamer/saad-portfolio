import React from 'react';
import { Bot, BrainCircuit, Cpu, Database, Eye, Sparkles } from 'lucide-react';
import { expertiseAreas } from '../data/portfolioData';

export default function Expertise() {
  const getIcon = (id) => {
    switch (id) {
      case 'genai':
        return <BrainCircuit className="w-5 h-5 text-indigo-400" />;
      case 'agents':
        return <Bot className="w-5 h-5 text-emerald-400" />;
      case 'vision':
        return <Eye className="w-5 h-5 text-sky-400" />;
      case 'backend':
        return <Database className="w-5 h-5 text-purple-400" />;
      case 'embedded':
        return <Cpu className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="expertise" className="py-24 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 block">
              Core Technical Competencies
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Areas of Expertise<span className="text-white/30">.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-sm md:text-base leading-relaxed">
            Bridging fundamental theoretical engineering with production-grade AI deployment across software and hardware.
          </p>
        </div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-[#121218]/60 border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(item.id)}
                  </div>
                  <span className="font-mono text-xs text-white/30 font-semibold tracking-widest">
                    /{item.number}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {item.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[11px] font-mono text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

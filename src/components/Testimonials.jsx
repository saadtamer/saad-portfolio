import React from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section className="py-24 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 block">
              Peer & Mentor Feedback
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Endorsements<span className="text-white/30">.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-sm md:text-base leading-relaxed">
            What architects, technical leads, and collaborators say about working alongside me.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#121218]/60 border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between group"
            >
              <div>
                <Quote className="w-8 h-8 text-emerald-400/40 mb-6 group-hover:text-emerald-400 transition-colors" />
                <p className="text-white/80 text-sm md:text-base leading-relaxed italic mb-8 font-light">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <h4 className="font-display text-base font-bold text-white">
                  {item.author}
                </h4>
                <p className="text-xs text-emerald-400 font-mono">
                  {item.role}
                </p>
                <p className="text-[11px] text-white/40 font-mono mt-0.5">
                  {item.context}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

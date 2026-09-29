import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Terminal, Camera, Layers, Cpu, BrainCircuit } from 'lucide-react';
import { personalData, technicalPillars } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './SocialIcons';

export default function Hero() {
  const [photoUrl, setPhotoUrl] = useState(personalData.avatar || '/profile.png');
  const [imageError, setImageError] = useState(false);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhotoUrl(url);
      setImageError(false);
    }
  };

  return (
    <section id="about" className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Top Tag & Status */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Building Since {personalData.buildingSince}
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>Machine Learning · Data Science · Generative AI</span>
          </div>
        </div>

        {/* Hero Title & Portrait Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 mb-12">
          
          <div className="flex-1">
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white leading-none mb-4">
              AI ENGINEER<span className="text-emerald-400">.</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-display font-medium tracking-tight max-w-2xl leading-snug">
              {personalData.tagline}
            </p>
          </div>

          {/* High-Resolution Portrait Photo Card */}
          <div className="shrink-0 relative group">
            <div className="relative w-52 h-64 sm:w-60 sm:h-72 rounded-3xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-transparent border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col items-center justify-center">
              
              {!imageError ? (
                <img
                  src={photoUrl}
                  alt={personalData.name}
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover rounded-[22px] transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full rounded-[22px] bg-gradient-to-br from-[#181824] to-[#0c0c12] flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-indigo-500/20 border border-white/10 flex items-center justify-center font-display font-bold text-2xl text-white mb-2">
                    ST
                  </div>
                  <span className="font-display font-semibold text-white text-sm">
                    {personalData.name}
                  </span>
                </div>
              )}

              {/* Status Badge on Portrait */}
              <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between text-[11px] font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active
                </span>
                
                {/* Upload Action */}
                <label 
                  className="flex items-center gap-1 text-white/70 hover:text-white cursor-pointer transition-colors"
                  title="Upload profile picture"
                >
                  <Camera className="w-3 h-3 text-amber-400" />
                  <span className="text-[10px]">Change</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </label>
              </div>

            </div>
          </div>

        </div>

        {/* Detailed About Section (Directly from Saad's Presentation) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#121218]/80 border border-white/10 mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block">
                {personalData.aboutHeadline}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                {personalData.aboutBio}
              </h2>
              <p className="text-white/70 text-base leading-relaxed">
                {personalData.aboutSub}
              </p>
            </div>

            {/* Social Links & CTAs */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-4 pt-2">
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono transition-all hover:scale-105"
                >
                  <GithubIcon className="w-4 h-4 text-white" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-white/50" />
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono transition-all hover:scale-105"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-white/50" />
                </a>
                <a
                  href={personalData.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-300 text-xs font-mono transition-all hover:scale-105"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-2">
                <a
                  href="#projects"
                  className="flex-1 text-center px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/5"
                >
                  <span>Explore Systems</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="#certificates"
                  className="flex-1 text-center px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Certificates</span>
                  <Sparkles className="w-4 h-4 text-amber-400" />
                </a>
              </div>
            </div>

          </div>

          {/* 3 Core Engineering Pillars from Presentation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
            {technicalPillars.map((pillar, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-white mb-1.5 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  {pillar.title}
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
          {personalData.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs text-white/50 font-mono uppercase tracking-wider mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

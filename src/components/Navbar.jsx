import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4">
      <div className={`max-w-6xl mx-auto rounded-full transition-all duration-300 px-6 py-3 flex items-center justify-between ${
        scrolled 
          ? 'bg-[#0f0f14]/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50' 
          : 'bg-[#121218]/50 backdrop-blur-md border border-white/5'
      }`}>
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-emerald-400 flex items-center justify-center font-display font-bold text-black text-sm group-hover:scale-105 transition-transform">
            ST
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-tight text-white text-base">
              {personalData.name.toUpperCase()}
            </span>
            <span className="text-[10px] text-white/50 tracking-wider font-mono uppercase -mt-0.5">
              AI Engineer
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-wider text-white/60 hover:text-white transition-colors font-mono"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Status Pill & Action */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available for Roles</span>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black font-semibold text-xs hover:bg-white/90 transition-all hover:scale-105"
          >
            <span>Let's Build</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white/70 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto p-5 rounded-2xl bg-[#0f0f14]/95 backdrop-blur-2xl border border-white/10 flex flex-col gap-4 shadow-2xl">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available for Full-time & Relocation</span>
          </div>
          <div className="flex flex-col gap-3 pt-2 border-t border-white/5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono tracking-wider text-white/70 hover:text-white py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-2.5 rounded-xl bg-white text-black font-semibold text-sm"
          >
            Contact & Hire Me
          </a>
        </div>
      )}
    </header>
  );
}

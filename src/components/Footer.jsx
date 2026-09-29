import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/5 bg-[#0a0a0c]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-white text-base tracking-wider">
              {personalData.name.toUpperCase()}
            </span>
            <span className="text-white/30 text-xs font-mono">
              © 2026 · AI Engineer
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-white/50">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#certificates" className="hover:text-white transition-colors">Certificates</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { X, Award, ExternalLink, CheckCircle, Calendar, ShieldCheck, Sparkles } from 'lucide-react';

export default function CertificateModal({ cert, onClose, customImage }) {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#121218] border border-white/10 p-6 md:p-8 shadow-2xl"
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

        {/* Header Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 font-mono text-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Verified Credential</span>
          </span>
          <span className="text-white/40 font-mono text-xs">
            Issued {cert.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
          {cert.title}
        </h3>
        <p className="text-emerald-400 font-mono text-sm mb-6">
          {cert.issuer}
        </p>

        {/* Certificate Display Area (Supports Custom Uploaded Image or High-Tech Certificate Seal) */}
        <div className="mb-6 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#181822] to-[#0e0e14] p-6 text-center relative group">
          {customImage || cert.image ? (
            <img 
              src={customImage || cert.image} 
              alt={cert.title} 
              className="w-full max-h-72 object-contain rounded-lg mx-auto shadow-xl"
            />
          ) : (
            <div className="py-12 px-4 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 text-amber-400">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="font-display text-lg font-bold text-white mb-1">
                Official Credential Document
              </h4>
              <p className="text-xs text-white/50 max-w-sm mb-3">
                {cert.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                <CheckCircle className="w-3 h-3" />
                Verified & Completed Curriculum ({cert.issuerBadge})
              </span>
            </div>
          )}
        </div>

        {/* Description & Curriculum */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
            Curriculum & Verification Details
          </h4>
          <p className="text-sm text-white/70 leading-relaxed">
            {cert.description}
          </p>
        </div>

        {/* Verified Skills */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 mb-2.5">
            Verified Competencies
          </h4>
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-xs text-white/80"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-white/40">
            {cert.category}
          </span>
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-white/90 transition-all hover:scale-105"
          >
            <span>Verify with Issuer</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}

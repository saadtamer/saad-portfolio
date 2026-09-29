import React, { useState } from 'react';
import { Award, ShieldCheck, ArrowUpRight, Upload, Sparkles, CheckCircle, Eye } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

export default function CertificatesSection() {
  const [selectedCat, setSelectedCat] = useState('All');
  const [activeCert, setActiveCert] = useState(null);
  const [uploadedImages, setUploadedImages] = useState({});

  const categories = ['All', 'AI & Machine Learning', 'Generative AI & LLMs', 'Data Science & Analytics'];

  const filtered = selectedCat === 'All'
    ? certifications
    : certifications.filter(c => c.category === selectedCat);

  const handleFileUpload = (e, certId) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedImages(prev => ({ ...prev, [certId]: url }));
    }
  };

  return (
    <section id="certificates" className="py-24 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Accredited Credentials & Continuous Learning
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Certifications & Training<span className="text-white/30">.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-sm md:text-base leading-relaxed">
            Verified academic, industrial, and global training from Huawei, NTI, Coursera, IBM, and DeepLearning.AI.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                selectedCat === cat
                  ? 'bg-amber-400 text-black font-semibold shadow-lg shadow-amber-400/10'
                  : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filtered.map((cert) => {
            const displayImage = uploadedImages[cert.id] || cert.image;

            return (
              <div
                key={cert.id}
                className="group p-6 rounded-3xl bg-[#121218]/70 border border-white/5 hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg"
              >
                <div>
                  {/* Certificate Thumbnail Preview if Available */}
                  {displayImage && (
                    <div 
                      onClick={() => setActiveCert(cert)}
                      className="mb-4 h-36 w-full rounded-2xl overflow-hidden bg-black/40 border border-white/5 relative cursor-pointer group/img"
                    >
                      <img
                        src={displayImage}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300 opacity-90 group-hover/img:opacity-100"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs font-mono text-white">
                        <Eye className="w-4 h-4 text-amber-400" />
                        <span>View Full Certificate</span>
                      </div>
                    </div>
                  )}

                  {/* Top Meta */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 font-mono text-[11px]">
                      <ShieldCheck className="w-3 h-3 text-amber-400" />
                      <span>{cert.issuerBadge}</span>
                    </span>
                    <span className="text-xs font-mono text-white/40">
                      {cert.date}
                    </span>
                  </div>

                  {/* Certificate Title */}
                  <h3 className="font-display text-lg font-bold text-white mb-1.5 group-hover:text-amber-400 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-emerald-400 text-xs font-mono mb-3">
                    {cert.issuer}
                  </p>

                  {/* Description */}
                  <p className="text-white/60 text-xs leading-relaxed mb-4 line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1 mb-6">
                    {cert.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-[10px] font-mono text-white/70"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-white/40">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="flex items-center gap-1.5 text-xs font-medium text-white group-hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    <span>Inspect Credential</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  {/* Quick Upload Button */}
                  <label
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white text-[11px] font-mono cursor-pointer transition-colors border border-white/5"
                    title="Change or upload certificate"
                  >
                    <Upload className="w-3 h-3 text-amber-400" />
                    <span>Update</span>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => handleFileUpload(e, cert.id)}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        {activeCert && (
          <CertificateModal
            cert={activeCert}
            customImage={uploadedImages[activeCert.id] || activeCert.image}
            onClose={() => setActiveCert(null)}
          />
        )}

      </div>
    </section>
  );
}

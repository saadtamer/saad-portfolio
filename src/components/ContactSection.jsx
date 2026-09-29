import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, MessageCircle, Send } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './SocialIcons';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Create mailto fallback
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:${personalData.email}?subject=${subject}&body=${body}`);
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 block">
            Initiate Collaboration
          </span>
          <h2 className="font-display text-5xl sm:text-6xl font-bold tracking-tight text-white mb-4">
            Let’s Build<span className="text-emerald-400">.</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Have a production AI system in mind, an agentic workflow to automate, or a team to expand? Send the specifications and I’ll reply within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details & Metadata (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="p-6 rounded-2xl bg-[#121218]/80 border border-white/5 space-y-4">
              
              {/* Email */}
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono uppercase text-white/40 block">Email Directly</span>
                    <a href={`mailto:${personalData.email}`} className="text-xs sm:text-sm font-mono text-white hover:text-emerald-400 transition-colors truncate block">
                      {personalData.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personalData.email, 'email')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-white/40 block">Phone & WhatsApp</span>
                    <a href={`tel:${personalData.phone}`} className="text-xs sm:text-sm font-mono text-white hover:text-emerald-400 transition-colors">
                      {personalData.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personalData.phone, 'phone')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp Direct Action */}
              <a
                href={personalData.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 font-medium text-xs font-mono flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

            </div>

            {/* Availability & Meta Badges (Exact Framer style) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <span className="text-[11px] font-mono uppercase text-white/40 block mb-1">
                  Location
                </span>
                <span className="text-sm font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  {personalData.location}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <span className="text-[11px] font-mono uppercase text-white/40 block mb-1">
                  Availability
                </span>
                <span className="text-xs font-semibold text-emerald-400 block">
                  {personalData.availability}
                </span>
              </div>

              <div className="col-span-2 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <span className="text-[11px] font-mono uppercase text-white/40 block mb-1">
                  Languages
                </span>
                <span className="text-xs font-mono text-white/80">
                  Arabic (Native) · English (Upper-Intermediate B2)
                </span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs flex items-center justify-center gap-2 transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs flex items-center justify-center gap-2 transition-all"
              >
                <GithubIcon className="w-4 h-4 text-white" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-[#121218]/90 border border-white/10 shadow-2xl">
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-white/50 mb-6 font-mono">
                Fill in the details below to dispatch an inquiry directly.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center py-10">
                  <Check className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                  <h4 className="font-display text-lg font-bold text-white mb-1">Message Prepared!</h4>
                  <p className="text-xs text-white/70">
                    Your email client has been opened with your inquiry ready to send to Saad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-mono uppercase text-white/50 block mb-1.5">
                      Your Name / Organization
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe / Tech Company"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-400/50 transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-white/50 block mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-400/50 transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-white/50 block mb-1.5">
                      Project Details / Role Specification
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your AI system requirements, timeline, or position details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-400/50 transition-colors font-mono resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-white/5 hover:scale-[1.01]"
                  >
                    <span>Send Message to Saad</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

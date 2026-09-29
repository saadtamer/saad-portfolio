import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import CertificatesSection from './components/CertificatesSection';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#faf7f3] relative selection:bg-amber-400 selection:text-black">
      {/* Background Subtle Grid Texture */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40"></div>
      
      {/* Subtle Noise Texture */}
      <div className="noise-overlay"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main>
          <Hero />
          <Expertise />
          <Projects />
          <CertificatesSection />
          <Experience />
          <Testimonials />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

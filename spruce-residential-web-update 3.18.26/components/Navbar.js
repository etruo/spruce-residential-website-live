'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const APPFOLIO_PORTAL = 'https://spruceresidential.appfolio.com/connect/users/sign_in';

const navLinks = [
  { label: 'Listings', href: '#listings' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'py-3 px-6 md:px-12 bg-warm-white/90 backdrop-blur-xl shadow-[0_2px_30px_rgba(0,0,0,0.06)] border-b border-sage/10'
          : 'py-5 px-6 md:px-12 bg-warm-white/85 backdrop-blur-xl border-b border-sage/10'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <svg width="220" height="48" viewBox="0 0 680 160" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(340, 68)">
              <rect x="-4" y="18" width="8" height="18" rx="2" fill="#6B7D60"/>
              <polygon points="-28,20 0,-38 28,20" fill="#8BA37D"/>
              <polygon points="-22,4 0,-32 22,4" fill="#95B085"/>
              <polygon points="-16,-10 0,-42 16,-10" fill="#A4BF96"/>
              <circle cx="0" cy="-42" r="2.5" fill="#F5F0E8" opacity="0.7"/>
              <circle cx="-14" cy="-8" r="1.5" fill="#F5F0E8" opacity="0.45"/>
              <circle cx="14" cy="-8" r="1.5" fill="#F5F0E8" opacity="0.45"/>
            </g>
            <text x="298" y="95" textAnchor="end" fontFamily="'DM Serif Display', serif" fontSize="52" fontWeight="700" fill="#5E6B55" letterSpacing="-1">spruce</text>
            <text x="382" y="95" textAnchor="start" fontFamily="'DM Serif Display', serif" fontSize="52" fontWeight="700" fill="#C67A5C" letterSpacing="-1">residential</text>
          </svg>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[0.85rem] font-medium text-charcoal-light uppercase tracking-wider hover:text-charcoal transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href={APPFOLIO_PORTAL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sage text-warm-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-sage-dark hover:-translate-y-0.5 transition-all duration-300"
          >
            Resident Portal →
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4 pt-6 pb-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-charcoal-light uppercase tracking-wider hover:text-charcoal transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={APPFOLIO_PORTAL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sage text-warm-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide text-center hover:bg-sage-dark transition-all"
              >
                Resident Portal →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

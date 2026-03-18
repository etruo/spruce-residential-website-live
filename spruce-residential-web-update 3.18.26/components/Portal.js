'use client';

import { FadeUp, SlideIn } from './Animations';
import { Check } from 'lucide-react';

const APPFOLIO_PORTAL = 'https://spruceresidential.appfolio.com/connect/users/sign_in';

const features = [
  'Pay rent online — securely and on your schedule',
  'Submit maintenance requests with photo uploads',
  'View lease details and documents anytime',
  'Direct communication with your property team',
];

const mockupRows = [
  { label: 'March Rent', value: 'Paid ✓', color: 'text-sage-light' },
  { label: 'Lease Renewal', value: 'June 2026', color: 'text-warm-white' },
  { label: 'Maintenance', value: 'No open requests', color: 'text-sage-light' },
  { label: 'Next Inspection', value: 'April 15', color: 'text-terracotta-light' },
  { label: 'Messages', value: '2 unread', color: 'text-warm-white' },
];

export default function Portal() {
  return (
    <section id="portal" className="py-24 md:py-28 px-6 md:px-12 bg-charcoal text-warm-white relative overflow-hidden">
      <div className="absolute -top-[50%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(198,122,92,0.15)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        <SlideIn direction="left">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-terracotta-light mb-4">Resident Portal</p>
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] leading-tight text-warm-white mb-4">
            Everything you need,<br />right at your fingertips.
          </h2>
          <p className="text-base leading-relaxed text-white/70 font-light mb-8">
            Your Spruce Residential portal makes it simple to manage your home life — from paying rent to submitting maintenance requests, all in one place.
          </p>

          <ul className="flex flex-col gap-3 mb-8">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-[0.92rem] text-white/85">
                <span className="w-7 h-7 rounded-full bg-terracotta/20 flex items-center justify-center flex-shrink-0">
                  <Check size={14} className="text-terracotta-light" />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <a
            href={APPFOLIO_PORTAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-terracotta text-warm-white px-8 py-3.5 rounded-full font-semibold text-[0.95rem] hover:bg-terracotta-light hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(198,122,92,0.3)] transition-all duration-300"
          >
            Open Resident Portal →
          </a>
        </SlideIn>

        <SlideIn direction="right" delay={0.15}>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-terracotta" />
              <div className="w-3 h-3 rounded-full bg-white/15" />
              <div className="w-3 h-3 rounded-full bg-white/15" />
            </div>

            {mockupRows.map((row, i) => (
              <div
                key={row.label}
                className={`flex justify-between items-center py-4 ${
                  i < mockupRows.length - 1 ? 'border-b border-white/[0.06]' : ''
                }`}
              >
                <span className="text-sm text-white/50">{row.label}</span>
                <span className={`text-sm font-medium ${row.color}`}>{row.value}</span>
              </div>
            ))}
          </div>
        </SlideIn>
      </div>
    </section>
  );
}

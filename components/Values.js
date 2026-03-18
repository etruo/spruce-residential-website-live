'use client';

import { StaggerContainer, StaggerItem } from './Animations';
import { FadeUp } from './Animations';

const values = [
  {
    icon: '🤝',
    title: 'Lasting Relationships',
    description: 'We believe a lease is just the beginning. We build trust through consistent communication, genuine care, and following through on every promise.',
  },
  {
    icon: '🏘️',
    title: 'Community Builders',
    description: 'We invest in the neighborhoods we serve. From local partnerships to community events, we help create places where people want to put down roots.',
  },
  {
    icon: '✨',
    title: 'White-Glove Service',
    description: 'Rapid maintenance responses, proactive property care, and an attention to detail that makes all the difference. Your home deserves the best.',
  },
];

export default function Values() {
  return (
    <section id="values" className="py-24 md:py-28 px-6 md:px-12 bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-terracotta mb-4">Why Spruce</p>
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] leading-tight text-charcoal mb-4">
            Management that actually<br />feels personal.
          </h2>
          <p className="text-base text-charcoal-light max-w-xl mx-auto leading-relaxed font-light">
            We're not a faceless corporation. We're your neighbors, invested in the same communities where we manage homes.
          </p>
        </FadeUp>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="bg-cream rounded-2xl p-8 h-full group hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] transition-all duration-400 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-sage scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
                <div className="w-14 h-14 rounded-2xl bg-warm-white flex items-center justify-center text-2xl mb-5">
                  {v.icon}
                </div>
                <h3 className="font-display text-xl text-charcoal mb-3">{v.title}</h3>
                <p className="text-sm text-charcoal-light leading-relaxed font-light">{v.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

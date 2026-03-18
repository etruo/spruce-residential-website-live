'use client';

import { FadeUp, SlideIn, StaggerContainer, StaggerItem } from './Animations';

const aboutValues = [
  {
    icon: '🌱',
    title: 'Locally Rooted',
    description: "Born and raised in Wichita. We know this city inside and out — its neighborhoods, its people, and what makes it home.",
  },
  {
    icon: '🏡',
    title: 'Home-First Mindset',
    description: 'Every decision we make starts with one question: does this make our residents feel more at home?',
  },
  {
    icon: '🤝',
    title: 'Relationships Over Rent Checks',
    description: "We measure success by how long residents stay, not how fast we can turn a unit. Lasting relationships are the whole point.",
  },
  {
    icon: '📍',
    title: 'Neighborhood Success',
    description: "We believe that when we take care of our homes and residents, entire neighborhoods get better. That's the ripple effect we're after.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-28 px-6 md:px-12 bg-warm-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <SlideIn direction="left">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-terracotta mb-4">Our Story</p>
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] leading-tight text-charcoal mb-6">
            Rooted in Wichita.<br />Invested in you.
          </h2>
          <p className="text-base text-charcoal-light font-light leading-relaxed mb-6">
            Spruce Residential was founded with a simple belief: that property management should be about people, not just properties. We saw an industry full of impersonal service and decided to do it differently.
          </p>
          <blockquote className="border-l-[3px] border-terracotta pl-6 my-8 font-display text-xl italic text-charcoal leading-snug">
            "We don't just manage homes — we help build the kind of neighborhoods we'd want to live in ourselves."
          </blockquote>
          <p className="text-base text-charcoal-light font-light leading-relaxed mb-8">
            We're a small team of Wichita locals — born and raised right here. We know these neighborhoods because we grew up in them, and we're committed to seeing every corner of this city thrive. When we manage a home, we're not just protecting an asset. We're investing in a community we call our own.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-terracotta text-warm-white px-8 py-3.5 rounded-full font-semibold text-[0.95rem] hover:bg-terracotta-dark hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(198,122,92,0.3)] transition-all duration-300"
          >
            Get in Touch
          </a>
        </SlideIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {aboutValues.map((v) => (
            <StaggerItem key={v.title}>
              <div className="bg-cream rounded-2xl p-6 h-full group hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h4 className="font-display text-lg text-charcoal mb-2">{v.title}</h4>
                <p className="text-[0.85rem] text-charcoal-light font-light leading-relaxed">{v.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

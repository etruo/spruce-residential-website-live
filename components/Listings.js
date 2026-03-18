'use client';

import { FadeUp } from './Animations';

export default function Listings() {
  return (
    <section id="listings" className="py-24 md:py-28 px-6 md:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-terracotta mb-4">Available Homes</p>
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] leading-tight text-charcoal mb-3">
            Find your next home.
          </h2>
          <p className="text-base text-charcoal-light font-light leading-relaxed max-w-xl mb-10">
            Browse our currently available rentals across the Wichita metro. Listings update automatically — what you see is what's available right now.
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          {/*
            ╔══════════════════════════════════════════════════════════╗
            ║  APPFOLIO WIDGET UPGRADE (OPTIONAL)                    ║
            ╠══════════════════════════════════════════════════════════╣
            ║  To use AppFolio's JS widget instead of the iframe:    ║
            ║  1. Go to AppFolio → Settings → Listings Widget        ║
            ║  2. Copy the <script> tag                              ║
            ║  3. Add it to app/layout.js inside <head>              ║
            ║  4. Replace the iframe below with the widget snippet   ║
            ╚══════════════════════════════════════════════════════════╝
          */}
          <iframe
            src="https://spruceresidential.appfolio.com/listings"
            frameBorder="0"
            scrolling="yes"
            className="appfolio-iframe"
            title="Spruce Residential Available Listings"
            loading="lazy"
          />
          <p className="text-center mt-6 text-sm text-charcoal-light">
            Don't see what you're looking for?{' '}
            <a
              href="https://spruceresidential.appfolio.com/listings"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta font-semibold hover:text-terracotta-dark transition-colors"
            >
              View all listings on our portal →
            </a>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

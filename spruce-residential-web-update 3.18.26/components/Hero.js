'use client';

import { motion } from 'framer-motion';
import { FadeUp } from './Animations';
import AnimatedCounter from './AnimatedCounter';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-12 pt-32 pb-16 bg-cream relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(122,139,111,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-[10%] -left-[5%] w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle,rgba(198,122,92,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        <FadeUp>
          <h1 className="font-display text-[clamp(2.6rem,5vw,4.2rem)] leading-[1.1] text-charcoal tracking-tight mb-6">
            A place to call <em className="text-sage">home,</em> not just a place to live.
          </h1>
          <p className="text-lg leading-relaxed text-charcoal-light font-light mb-8 max-w-lg">
            Spruce Residential manages homes across the Wichita metro with a white-glove approach — because your comfort and community matter more than anything.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#listings"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#listings')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-terracotta text-warm-white px-8 py-3.5 rounded-full font-semibold text-[0.95rem] hover:bg-terracotta-dark hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(198,122,92,0.3)] transition-all duration-300"
            >
              Browse Homes
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 border-[1.5px] border-charcoal text-charcoal px-8 py-3.5 rounded-full font-semibold text-[0.95rem] hover:bg-charcoal hover:text-warm-white hover:-translate-y-0.5 transition-all duration-300"
            >
              Our Story
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.2} className="flex justify-center">
          <div className="relative">
            {/* Floating accents */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-10 -top-[10%] bg-sage text-warm-white px-4 py-3 rounded-2xl text-sm font-medium shadow-[0_10px_30px_rgba(122,139,111,0.25)] z-10 whitespace-nowrap"
            >
              🏡 Locally owned &amp; operated
            </motion.div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute -right-6 -bottom-[6%] bg-terracotta text-warm-white px-4 py-3 rounded-2xl text-sm font-medium shadow-[0_10px_30px_rgba(198,122,92,0.25)] z-10 whitespace-nowrap"
            >
              ✨ Resident-focused
            </motion.div>

            {/* Main card */}
            <div className="bg-warm-white rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] max-w-md w-full relative">
              <span className="absolute -top-5 right-8 text-4xl">🌿</span>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-sage mb-4">
                Why residents love us
              </p>
              <h3 className="font-display text-xl mb-3 text-charcoal">
                Built on relationships, not transactions.
              </h3>
              <p className="text-sm text-charcoal-light leading-relaxed mb-6">
                We take the time to know every resident. Your experience isn't a ticket number — it's a conversation.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-5 border-t border-cream">
                <div className="text-center">
                  <div className="font-display text-2xl text-terracotta">
                    <AnimatedCounter target={150} suffix="+" />
                  </div>
                  <div className="text-[0.7rem] text-warm-gray uppercase tracking-wider mt-1">Homes</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl text-terracotta">
                    4.9★
                  </div>
                  <div className="text-[0.7rem] text-warm-gray uppercase tracking-wider mt-1">Rating</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl text-terracotta">
                    <AnimatedCounter target={3} suffix="yr" />
                  </div>
                  <div className="text-[0.7rem] text-warm-gray uppercase tracking-wider mt-1">Avg Stay</div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

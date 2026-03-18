'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { FadeUp } from './Animations';

const testimonials = [
  {
    quote: "Moving to Wichita, I was nervous about finding a place that felt like home. Spruce made the whole process seamless, and two years later I can't imagine living anywhere else.",
    name: 'Recent Resident',
    detail: 'College Hill',
    years: '2 years',
  },
  {
    quote: "I've rented from three different companies in Wichita. Spruce is the first one that actually picks up the phone and treats you like a person, not a rent check.",
    name: 'Current Resident',
    detail: 'Riverside',
    years: '3 years',
  },
  {
    quote: "When our AC went out during a heat wave, their maintenance team was at our door within two hours. That's the kind of service that makes you want to stay.",
    name: 'Long-Term Resident',
    detail: 'Delano',
    years: '4 years',
  },
  {
    quote: "The neighborhood events they organize have helped us actually get to know our neighbors. It's rare to find a management company that cares about community like this.",
    name: 'Current Resident',
    detail: 'East Wichita',
    years: '1 year',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 md:py-28 px-6 md:px-12 bg-warm-white">
      <div className="max-w-4xl mx-auto">
        <FadeUp className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-terracotta mb-4">What Residents Say</p>
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] leading-tight text-charcoal">
            Home is a feeling.
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="relative bg-cream rounded-3xl p-8 md:p-14 min-h-[280px] flex flex-col items-center justify-center text-center overflow-hidden">
            <Quote className="text-sage/20 absolute top-6 left-8 w-16 h-16" />

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative z-10"
              >
                <p className="font-display text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-2xl italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-semibold text-charcoal text-sm">{t.name}</p>
                  <p className="text-sm text-warm-gray mt-0.5">
                    {t.detail} · {t.years}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-10 relative z-10">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-charcoal/15 flex items-center justify-center hover:bg-charcoal hover:text-warm-white transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? 'bg-terracotta w-6' : 'bg-charcoal/15 hover:bg-charcoal/30'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-charcoal/15 flex items-center justify-center hover:bg-charcoal hover:text-warm-white transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

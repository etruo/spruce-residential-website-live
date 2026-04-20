'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeUp, SlideIn } from './Animations';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'general',
    message: '',
    smsOptIn: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, wire this up to an API route, Formspree, or email service
    // For now, show success state
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = (field) =>
    `w-full bg-warm-white border-[1.5px] rounded-xl px-4 py-3.5 text-sm text-charcoal font-body outline-none transition-all duration-300 ${
      focused === field
        ? 'border-sage shadow-[0_0_0_3px_rgba(122,139,111,0.12)]'
        : 'border-cream-dark hover:border-warm-gray'
    }`;

  return (
    <section id="contact" className="py-24 md:py-28 px-6 md:px-12 bg-cream">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <SlideIn direction="left">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-terracotta mb-4">Get in Touch</p>
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] leading-tight text-charcoal mb-4">
            We'd love to<br />hear from you.
          </h2>
          <p className="text-base text-charcoal-light font-light leading-relaxed mb-10 max-w-md">
            Whether you're looking for your next home, have a question about one of our properties, or just want to say hello — we're here for you.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-warm-white flex items-center justify-center text-sage">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-charcoal">(316) 444-4365</p>
                <p className="text-xs text-warm-gray">Mon–Fri, 9am–5pm</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-warm-white flex items-center justify-center text-sage">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-charcoal">hello@spruceresidential.com</p>
                <p className="text-xs text-warm-gray">We respond within 24 hours</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-warm-white flex items-center justify-center text-sage">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-charcoal">Wichita, Kansas</p>
                <p className="text-xs text-warm-gray">Serving the entire metro area</p>
              </div>
            </div>
          </div>
        </SlideIn>

        <FadeUp delay={0.15}>
          <div className="bg-warm-white rounded-3xl p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="text-5xl mb-4">🌿</div>
                <h3 className="font-display text-xl text-charcoal mb-2">Message sent!</h3>
                <p className="text-sm text-charcoal-light">We'll be in touch soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-light uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      placeholder="Your name"
                      className={inputClass('name')}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-light uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      placeholder="you@email.com"
                      className={inputClass('email')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-light uppercase tracking-wider mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused('phone')}
                      onBlur={() => setFocused(null)}
                      placeholder="(316) 555-0000"
                      className={inputClass('phone')}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-light uppercase tracking-wider mb-2">
                      I'm interested in
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      onFocus={() => setFocused('type')}
                      onBlur={() => setFocused(null)}
                      className={inputClass('type')}
                    >
                      <option value="general">General inquiry</option>
                      <option value="renting">Renting a home</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-light uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    placeholder="Tell us how we can help..."
                    className={`${inputClass('message')} resize-none`}
                  />
                </div>

                <div className="p-4 bg-cream rounded-xl flex flex-col gap-3">
                  <p className="text-xs leading-relaxed text-charcoal-light">
                    Spruce Residential LLC would like your consent to send informational text message communications from +13164444365 to your mobile number listed above, in response to your questions or to provide information relevant to your relationship with us. Consent is not a condition of purchase. Message frequency varies. Message and data rates may apply. Reply &apos;STOP&apos; to unsubscribe at any time. Reply &apos;HELP&apos; for assistance or more information. We do not share your mobile opt-in information with anyone. See our{' '}
                    <a href="/privacy" className="text-terracotta underline hover:text-terracotta-dark">privacy policy and messaging terms and conditions</a>
                    {' '}for more information.
                  </p>
                  <label className="flex items-center gap-2 text-xs text-charcoal-light cursor-pointer">
                    <input
                      type="radio"
                      name="smsConsent"
                      value="yes"
                      required
                      checked={formData.smsConsent === 'yes'}
                      onChange={(e) => setFormData({ ...formData, smsConsent: e.target.value })}
                      className="accent-sage flex-shrink-0"
                    />
                    Yes, I consent to receive informational messages from Spruce Residential LLC
                  </label>
                  <label className="flex items-center gap-2 text-xs text-charcoal-light cursor-pointer">
                    <input
                      type="radio"
                      name="smsConsent"
                      value="no"
                      checked={formData.smsConsent === 'no'}
                      onChange={(e) => setFormData({ ...formData, smsConsent: e.target.value })}
                      className="accent-sage flex-shrink-0"
                    />
                    No, I do not want to receive any text messages from Spruce Residential LLC
                  </label>
              </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 bg-sage text-warm-white px-8 py-3.5 rounded-full font-semibold text-[0.95rem] hover:bg-sage-dark hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(122,139,111,0.3)] transition-all duration-300 w-full sm:w-auto"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

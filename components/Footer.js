import Image from 'next/image';

const APPFOLIO_PORTAL = 'https://spruceresidential.appfolio.com/connect/users/sign_in';

const footerLinks = {
  Navigate: [
    { label: 'Home', href: '#home' },
    { label: 'Listings', href: '#listings' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  Residents: [
    { label: 'Resident Portal', href: APPFOLIO_PORTAL, external: true },
    { label: 'Pay Rent', href: APPFOLIO_PORTAL, external: true },
    { label: 'Maintenance', href: APPFOLIO_PORTAL, external: true },
  ],
  Contact: [
    { label: 'hello@spruceresidential.com', href: 'mailto:hello@spruceresidential.com' },
    { label: '(316) 444-4365', href: 'tel:3164444365' },
    { label: 'Wichita, KS', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/60 px-6 md:px-12 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/[0.08]">

          <div>
            <a href="#" className="inline-block mb-6">
              <span className="font-display text-2xl font-bold tracking-tight">
                <span className="text-warm-white">spruce</span>
                <span className="text-terracotta">residential</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-[280px]">
              White-glove residential property management across the Wichita, Kansas metro. Where home meets community.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-warm-white text-xs font-bold uppercase tracking-[0.1em] mb-5">
                {heading}
              </h4>
              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-white/50 hover:text-warm-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-8 border-b border-white/[0.08]">
          <Image
            src="/equal-housing-logowhite-1000.png"
            alt="Equal Housing Opportunity"
            width={48}
            height={48}
            className="opacity-70 flex-shrink-0"
          />
          <p className="text-xs text-white/40 leading-relaxed max-w-2xl">
            We are pledged to the letter and spirit of U.S. policy for the achievement of equal housing opportunity throughout the nation. We encourage and support an affirmative advertising and marketing program in which there are no barriers to obtaining housing because of race, color, religion, sex, handicap, familial status, or national origin.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-2 text-xs text-white/40">
          <span>&copy; 2026 Spruce Residential. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-warm-white transition-colors">Privacy Policy</a>
            <span>Made with care in Wichita.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
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
            <a href="#" className="inline-block mb-4">
              <svg width="160" height="36" viewBox="0 0 680 160" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(340, 68)">
                  <rect x="-4" y="18" width="8" height="18" rx="2" fill="#6B7D60"/>
                  <polygon points="-28,20 0,-38 28,20" fill="#8BA37D"/>
                  <polygon points="-22,4 0,-32 22,4" fill="#95B085"/>
                  <polygon points="-16,-10 0,-42 16,-10" fill="#A4BF96"/>
                  <circle cx="0" cy="-42" r="2.5" fill="#F5F0E8" opacity="0.7"/>
                  <circle cx="-14" cy="-8" r="1.5" fill="#F5F0E8" opacity="0.45"/>
                  <circle cx="14" cy="-8" r="1.5" fill="#F5F0E8" opacity="0.45"/>
                </g>
                <text x="298" y="95" textAnchor="end" fontFamily="'DM Serif Display', serif" fontSize="52" fontWeight="700" fill="#FDFBF7" letterSpacing="-1">spruce</text>
                <text x="382" y="95" textAnchor="start" fontFamily="'DM Serif Display', serif" fontSize="52" fontWeight="700" fill="#C67A5C" letterSpacing="-1">residential</text>
              </svg>
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
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-sm text-white/50 hover:text-warm-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
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

import './globals.css';

export const metadata = {
  title: 'Spruce Residential — Wichita Property Management',
  description: 'White-glove residential property management across the Wichita, Kansas metro. Where home meets community.',
  keywords: 'property management, Wichita, Kansas, apartments, rentals, Spruce Residential',
  openGraph: {
    title: 'Spruce Residential — Wichita Property Management',
    description: 'White-glove residential property management across the Wichita, Kansas metro.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

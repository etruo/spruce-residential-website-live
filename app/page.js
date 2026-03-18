import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Values from '@/components/Values';
import Listings from '@/components/Listings';
import Portal from '@/components/Portal';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Values />
      <Listings />
      <Testimonials />
      <Portal />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

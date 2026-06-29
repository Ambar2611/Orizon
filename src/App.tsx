import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] selection:bg-cyan-500/30 text-gray-50 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

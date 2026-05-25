import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import HowToOrder from './components/HowToOrder';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-white transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Testimonials />
      <HowToOrder />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

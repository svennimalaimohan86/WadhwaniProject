import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import HowItWorks from './sections/HowItWorks';
import About from './sections/About';
import CallToAction from './sections/CallToAction';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';

// Styles
import './styles/variables.css';
import './styles/global.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/features.css';
import './styles/how-it-works.css';
import './styles/about.css';
import './styles/cta.css';
import './styles/footer.css';

export default function App() {
  // Initialize scroll reveal animations across sections
  useScrollReveal();

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <About />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}


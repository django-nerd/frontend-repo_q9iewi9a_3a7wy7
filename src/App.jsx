import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Hero />
      <Features />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

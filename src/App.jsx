import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partnership from './components/Partnership';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import CrossLineSticker from './components/CrossLine';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-primary/30 selection:text-white relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Partnership />
      <CrossLineSticker />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;

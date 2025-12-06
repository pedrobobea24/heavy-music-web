import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { MobileApp } from './components/MobileApp';
import { Assistant } from './components/Assistant';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <MobileApp />
      </main>
      <Assistant />
      <Footer />
    </div>
  );
}

export default App;

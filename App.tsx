import React from 'react';
import { Hero } from './components/Hero';
import { WhatsappMockup } from './components/WhatsappMockup';
import { Problem } from './components/Problem';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { Transparency } from './components/Transparency';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhatsappMockup />
        <Problem />
        <HowItWorks />
        <Pricing />
        <Transparency />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
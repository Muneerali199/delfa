'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Cities from '@/components/Cities';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <Cities />
        <HowItWorks />
        <Footer />
      </div>
    </SmoothScroll>
  );
}
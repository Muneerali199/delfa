'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import type { LenisOptions } from '@studio-freight/lenis';

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenisOptions: LenisOptions = {
      duration: 0.8,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
      infinite: false,
      autoResize: true,
    };

    const lenis = new Lenis(lenisOptions);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        if (element) {
          lenis.scrollTo(element, { 
            offset: -80, 
            duration: 1.2,
            easing: (t) => 1 - Math.pow(1 - t, 3),
            immediate: false,
            lock: false
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Handle hash links on page load
    const handleHash = () => {
      if (window.location.hash) {
        const id = window.location.hash.slice(1);
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            lenis.scrollTo(element, {
              offset: -80,
              duration: 1.2,
              easing: (t) => 1 - Math.pow(1 - t, 3),
              immediate: false,
              lock: false
            });
          }, 1000);
        }
      }
    };

    // Run once on mount
    handleHash();

    // Cleanup
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
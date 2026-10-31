import { useEffect } from 'react';

/**
 * Custom hook to trigger reveal animations on scroll
 * Supports elements with class 'reveal-on-scroll'
 */
export function useScrollReveal(options = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Once revealed, keep it visible or unobserve to reduce overhead
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [options]);
}

export default useScrollReveal;


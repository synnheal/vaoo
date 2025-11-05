import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolledPercentage = (window.scrollY / windowHeight) * 100;
          setScrolled(scrolledPercentage);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="scroll-progress" style={{ width: `${scrolled}%` }}></div>;
}

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPercentage = (window.scrollY / windowHeight) * 100;
      setScrolled(scrolledPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="scroll-progress" style={{ width: `${scrolled}%` }}></div>;
}

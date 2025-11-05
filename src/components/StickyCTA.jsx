import { useState, useEffect } from 'react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.hero');
      if (hero) {
        const heroBottom = hero.offsetTop + hero.offsetHeight;
        setIsVisible(window.scrollY > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToInscription = () => {
    const element = document.querySelector('#inscription-hotel');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`sticky-cta ${isVisible ? 'visible' : ''}`}>
      <a href="#inscription-hotel" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToInscription(); }}>
        Devenir partenaire hôtelier
      </a>
    </div>
  );
}

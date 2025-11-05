import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <img src="/logo.svg" alt="Vaoo Logo" className="logo-img" />
        </div>
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#concept" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('#concept'); }}>Le concept</a></li>
          <li><a href="#avantages" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('#avantages'); }}>Avantages</a></li>
          <li><a href="#fonctionnement" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('#fonctionnement'); }}>Comment ça marche</a></li>
          <li><a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}>Contact</a></li>
        </ul>
        <a href="#inscription-hotel" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('#inscription-hotel'); }}>Devenir partenaire</a>
        <div className={`burger ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

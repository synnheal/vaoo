import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import StickyCTA from './components/StickyCTA';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Avantages from './components/Avantages';
import Fonctionnement from './components/Fonctionnement';
import UseCases from './components/UseCases';
import Inscription from './components/Inscription';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Toast from './components/Toast';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Console messages
    console.log('%cVaoo 🏨', 'font-size: 50px; color: #5FD45F; font-weight: bold;');
    console.log('%cVous cherchez quelque chose ? 🔍', 'font-size: 16px; color: #F3D89D;');
    console.log('%cRejoignez-nous : contact@vaoo.fr', 'font-size: 14px; color: #666;');

    // Easter egg - Konami code
    let konamiCode = [];
    const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    const handleKeyDown = (e) => {
      konamiCode.push(e.key);
      konamiCode.splice(-konamiPattern.length - 1, konamiCode.length - konamiPattern.length);

      if (konamiCode.join('') === konamiPattern.join('')) {
        if (window.showToastGlobal) {
          window.showToastGlobal('🎉 Code secret activé ! Bienvenue dans l\'équipe Vaoo ! 🎉');
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    console.log('✅ Vaoo website initialized successfully!');

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <StickyCTA />
      <Hero />
      <Concept />
      <Avantages />
      <Fonctionnement />
      <UseCases />
      <Inscription />
      <FAQ />
      <Footer />
      <BackToTop />
      <Toast />
    </>
  );
}

export default App;

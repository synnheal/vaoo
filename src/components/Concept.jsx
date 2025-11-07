import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Concept() {
  const cardRefs = useRef([]);

  useEffect(() => {
    // GSAP scroll animations - simplified without opacity
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          {
            y: 50,
          },
          {
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    });

    // Card tilt effect with cleanup
    const tiltCards = document.querySelectorAll('.card-tilt');
    const handlers = [];

    tiltCards.forEach(card => {
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      };

      const handleMouseLeave = () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);

      // Store handlers for cleanup
      handlers.push({ card, handleMouseMove, handleMouseLeave });
    });

    // Cleanup function
    return () => {
      handlers.forEach(({ card, handleMouseMove, handleMouseLeave }) => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <section className="concept-section" id="concept">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Le concept</span>
          <h2 className="section-title">On va où ? <span className="brand-color">Vaoo !</span></h2>
          <p className="section-subtitle">La plateforme qui transforme vos chambres invendues en opportunités</p>
        </div>

        <div className="concept-grid">
          <div className="concept-card card-tilt" ref={el => cardRefs.current[0] = el}>
            <div className="concept-icon">🎯</div>
            <h3>Pour les voyageurs</h3>
            <p>Indiquez votre destination et votre budget. Laissez les hôtels vous proposer leurs meilleures offres de dernière minute jusqu'à -40%.</p>
          </div>
          <div className="concept-card card-tilt" ref={el => cardRefs.current[1] = el}>
            <div className="concept-icon">🏨</div>
            <h3>Pour les hôteliers</h3>
            <p>Remplissez vos chambres invendues en toute flexibilité. Vous fixez vos propres réductions selon vos besoins. Mieux vaut 100€ que 0€.</p>
          </div>
          <div className="concept-card card-tilt" ref={el => cardRefs.current[2] = el}>
            <div className="concept-icon">💰</div>
            <h3>Modèle gagnant-gagnant</h3>
            <p>Abonnement mensuel fixe pour les hôtels. Commission très faible, car nous jouons sur le volume. Relation directe et transparente.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

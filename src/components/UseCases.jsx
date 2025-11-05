import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function UseCases() {
  const cardRefs = useRef([]);

  useEffect(() => {
    // GSAP scroll animations for usecase cards - simplified without opacity
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
  }, []);

  return (
    <section className="usecases-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Cas d'usage</span>
          <h2 className="section-title">Parfait pour tous les scénarios</h2>
        </div>

        <div className="usecases-grid">
          <div className="usecase-card" ref={el => cardRefs.current[0] = el}>
            <div className="usecase-image">
              <img src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600" alt="Dernière minute" />
              <div className="image-overlay">Image droit d'auteur à changer</div>
            </div>
            <h3>Dernière minute</h3>
            <p>Des chambres libres à 5 jours ? Proposez-les à prix réduit plutôt que de les laisser vides.</p>
          </div>
          <div className="usecase-card" ref={el => cardRefs.current[1] = el}>
            <div className="usecase-image">
              <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600" alt="Périodes creuses" />
              <div className="image-overlay">Image droit d'auteur à changer</div>
            </div>
            <h3>Périodes creuses</h3>
            <p>Hors vacances scolaires, optimisez votre remplissage avec des tarifs attractifs.</p>
          </div>
          <div className="usecase-card" ref={el => cardRefs.current[2] = el}>
            <div className="usecase-image">
              <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=600" alt="Groupes" />
              <div className="image-overlay">Image droit d'auteur à changer</div>
            </div>
            <h3>Réservations groupées</h3>
            <p>EVG, voyages d'entreprise : proposez des lots de chambres avec remise avantageuse.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

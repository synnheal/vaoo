import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Fonctionnement() {
  const itemRefs = useRef([]);

  useEffect(() => {
    // GSAP scroll animations for timeline items - simplified without opacity
    itemRefs.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(item,
          {
            scale: 0.95,
          },
          {
            scale: 1,
            duration: 0.6,
            delay: index * 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    });
  }, []);

  return (
    <section className="fonctionnement-section" id="fonctionnement">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Simple et efficace</span>
          <h2 className="section-title">Comment ça marche ?</h2>
        </div>

        <div className="timeline">
          <div className="timeline-item" ref={el => itemRefs.current[0] = el}>
            <div className="timeline-content">
              <h3>Abonnement</h3>
              <p>Souscrivez à un abonnement mensuel équivalent au prix de votre chambre la plus chère.</p>
            </div>
          </div>
          <div className="timeline-item" ref={el => itemRefs.current[1] = el}>
            <div className="timeline-content">
              <h3>Publication flexible</h3>
              <p>Proposez vos chambres disponibles à la dernière minute (1-2 jours). Vous décidez librement du pourcentage de réduction selon vos besoins.</p>
            </div>
          </div>
          <div className="timeline-item" ref={el => itemRefs.current[2] = el}>
            <div className="timeline-content">
              <h3>Réservation</h3>
              <p>Les voyageurs réservent vos chambres en quelques clics. Vous recevez une notification instantanée.</p>
            </div>
          </div>
          <div className="timeline-item" ref={el => itemRefs.current[3] = el}>
            <div className="timeline-content">
              <h3>Rentabilité</h3>
              <p>Augmentez votre taux d'occupation et vos revenus, même en période creuse.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

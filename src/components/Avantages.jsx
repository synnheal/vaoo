import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Avantages() {
  const [roomPrice, setRoomPrice] = useState(150);
  const [calculatedValues, setCalculatedValues] = useState({
    subscription: 150,
    revenue: 1050,
    profit: 900
  });
  const itemRefs = useRef([]);

  useEffect(() => {
    // GSAP scroll animations for avantage items - simplified without opacity
    itemRefs.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(item,
          {
            x: -30,
          },
          {
            x: 0,
            duration: 0.6,
            delay: index * 0.15,
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

    // Parallax effect for image
    const parallaxImg = document.querySelector('.parallax-img');
    if (parallaxImg) {
      gsap.to(parallaxImg, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: parallaxImg,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    }
  }, []);

  const calculateValues = (price) => {
    const subscription = price;
    const discountedPrice = price * 0.7; // -30%
    const revenue = discountedPrice * 10; // 10 chambres
    const profit = revenue - subscription;

    setCalculatedValues({
      subscription,
      revenue: Math.round(revenue),
      profit: Math.round(profit)
    });
  };

  const handlePriceChange = (e) => {
    const newPrice = parseInt(e.target.value) || 150;
    setRoomPrice(newPrice);
    calculateValues(newPrice);
  };

  return (
    <section className="avantages-section" id="avantages">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Avantages</span>
          <h2 className="section-title">Pourquoi rejoindre <span className="brand-color">Vaoo</span> ?</h2>
        </div>

        <div className="avantages-content">
          <div className="avantages-visual">
            <div className="image-container parallax-img">
              <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800" alt="Réception d'hôtel moderne" />
              <div className="image-overlay">Image droit d'auteur à changer</div>
            </div>
          </div>
          <div className="avantages-list">
            <div className="avantage-item" ref={el => itemRefs.current[0] = el}>
              <div className="avantage-number">01</div>
              <div className="avantage-content">
                <h3>Rentabilisez vos chambres vides</h3>
                <p>Transformez vos périodes creuses en revenus. Une chambre louée à -30% reste plus rentable qu'une chambre vide.</p>
              </div>
            </div>
            <div className="avantage-item" ref={el => itemRefs.current[1] = el}>
              <div className="avantage-number">02</div>
              <div className="avantage-content">
                <h3>Abonnement fixe, zéro commission</h3>
                <p>Payez uniquement un abonnement mensuel basé sur votre chambre la plus chère. Pas de commission variable sur les réservations.</p>
              </div>
            </div>
            <div className="avantage-item" ref={el => itemRefs.current[2] = el}>
              <div className="avantage-number">03</div>
              <div className="avantage-content">
                <h3>Contrôle total de vos offres</h3>
                <p>Vous décidez quelles chambres proposer, quand, et à quel prix. Flexibilité maximale selon vos besoins.</p>
              </div>
            </div>
            <div className="avantage-item" ref={el => itemRefs.current[3] = el}>
              <div className="avantage-number">04</div>
              <div className="avantage-content">
                <h3>Visibilité ciblée</h3>
                <p>Atteignez une clientèle flexible, à la recherche de bons plans de dernière minute. Remplissez intelligemment.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Calculator Section */}
        <div className="calculator-section">
          <h3>Simulez vos gains</h3>
          <div className="calculator">
            <div className="calculator-input">
              <label>Prix chambre la plus chère</label>
              <input
                type="number"
                id="room-price"
                value={roomPrice}
                min="50"
                max="1000"
                onChange={handlePriceChange}
              />
              <span>€</span>
            </div>
            <div className="calculator-result">
              <div className="result-item">
                <p>Votre abonnement mensuel</p>
                <h4><span>{calculatedValues.subscription}</span>€/mois</h4>
              </div>
              <div className="result-item">
                <p>Revenus pour 10 chambres/mois à -30%</p>
                <h4><span>{calculatedValues.revenue}</span>€</h4>
              </div>
              <div className="result-item highlight">
                <p>Bénéfice net estimé</p>
                <h4 className="gold-text"><span>{calculatedValues.profit}</span>€</h4>
              </div>
            </div>
          </div>
          <p className="calculator-note">* Exemple avec des chambres à {roomPrice}€ louées à {Math.round(roomPrice * 0.7)}€ (−30%)</p>
        </div>
      </div>
    </section>
  );
}

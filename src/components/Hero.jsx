import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const [stats, setStats] = useState({ discount: 0, rentable: 0, commission: 0 });
  const [currentImage, setCurrentImage] = useState(0);
  const heroRef = useRef(null);
  const hasAnimated = useRef(false);

  const images = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200"
  ];

  // Carousel automatique avec transitions fluides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3500); // Change d'image toutes les 3.5 secondes

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    // Counter animation
    const animateCounters = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const duration = 2000;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        setStats({
          discount: Math.floor(40 * progress),
          rentable: Math.floor(100 * progress),
          commission: 0
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    };

    // GSAP Hero animations - simplified without opacity to ensure content is visible
    if (heroRef.current) {
      gsap.fromTo('.hero-title',
        { y: 30 },
        { y: 0, duration: 1, delay: 0.3, ease: 'power2.out' }
      );

      gsap.fromTo('.hero-subtitle',
        { y: 20 },
        { y: 0, duration: 1, delay: 0.6, ease: 'power2.out' }
      );

      gsap.fromTo('.hero-cta',
        { y: 20 },
        { y: 0, duration: 1, delay: 0.9, ease: 'power2.out' }
      );

      gsap.fromTo('.hero-stats',
        { y: 20 },
        { y: 0, duration: 1, delay: 1.2, ease: 'power2.out', onComplete: animateCounters }
      );
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-carousel">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Hôtel ${index + 1}`}
              className={`carousel-img ${index === currentImage ? 'active' : ''}`}
            />
          ))}
          <div className="image-overlay">Image droit d'auteur à changer</div>
        </div>
        <div className="hero-gradient"></div>
      </div>
      <div className="container hero-content">
        <h1 className="hero-title">
          Vos chambres invendues<br />
          valent de l'<span className="gold-text">or</span>
        </h1>
        <p className="hero-subtitle">La plateforme qui connecte directement voyageurs et hôteliers</p>
        <div className="hero-cta">
          <a href="#inscription-hotel" className="btn btn-hero btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('#inscription-hotel'); }}>Je suis hôtelier</a>
          <a href="#inscription-voyageur" className="btn btn-hero btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('#inscription-voyageur'); }}>Je cherche un hôtel</a>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">{stats.discount}</span><span className="stat-symbol">%</span>
            <p className="stat-label">de réduction moyenne</p>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.rentable}</span><span className="stat-symbol">%</span>
            <p className="stat-label">rentable pour les hôtels</p>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.commission}</span>
            <p className="stat-label">commission sur réservation</p>
          </div>
        </div>
      </div>
    </section>
  );
}

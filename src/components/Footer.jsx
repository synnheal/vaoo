export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/logo.svg" alt="Vaoo Logo" className="footer-logo" />
            <p>La plateforme qui transforme vos chambres invendues en opportunités.</p>
            <p className="footer-heritage">Entreprise créée il y a 15 ans, basée en France.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#concept" onClick={(e) => { e.preventDefault(); scrollToSection('#concept'); }}>Le concept</a></li>
                <li><a href="#avantages" onClick={(e) => { e.preventDefault(); scrollToSection('#avantages'); }}>Avantages</a></li>
                <li><a href="#fonctionnement" onClick={(e) => { e.preventDefault(); scrollToSection('#fonctionnement'); }}>Fonctionnement</a></li>
                <li><a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('#faq'); }}>FAQ</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Pour les hôteliers</h4>
              <ul>
                <li><a href="#inscription-hotel" onClick={(e) => { e.preventDefault(); scrollToSection('#inscription-hotel'); }}>Devenir partenaire</a></li>
                <li><a href="#avantages" onClick={(e) => { e.preventDefault(); scrollToSection('#avantages'); }}>Nos avantages</a></li>
                <li><a href="#fonctionnement" onClick={(e) => { e.preventDefault(); scrollToSection('#fonctionnement'); }}>Comment ça marche</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:contact@vaoo.fr">contact@vaoo.fr</a></li>
                <li>Mentions légales (à venir)</li>
                <li>CGU (à venir)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Vaoo. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

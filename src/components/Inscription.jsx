import { useState } from 'react';

function InscriptionForm({ type, title, intro, buttonText, buttonClass }) {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsLoading(false);

    // Show success toast
    const showToast = window.showToastGlobal;
    if (showToast) {
      showToast('Inscription enregistrée avec succès ! Nous vous contacterons bientôt.');
    }

    // Reset form
    setFormData({});
    e.target.reset();
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (type === 'hotel') {
    return (
      <form className="inscription-form" onSubmit={handleSubmit}>
        <h3>{title}</h3>
        {intro && <p className="form-intro">{intro}</p>}
        <div className="form-group">
          <label htmlFor="hotel-name">Nom de l'hôtel *</label>
          <input
            type="text"
            id="hotel-name"
            name="hotel-name"
            required
            onChange={handleInputChange}
          />
          <span className="validation-icon"></span>
        </div>
        <div className="form-group">
          <label htmlFor="hotel-email">Email professionnel *</label>
          <input
            type="email"
            id="hotel-email"
            name="hotel-email"
            required
            onChange={handleInputChange}
          />
          <span className="validation-icon"></span>
        </div>
        <div className="form-group">
          <label htmlFor="hotel-phone">Téléphone</label>
          <input
            type="tel"
            id="hotel-phone"
            name="hotel-phone"
            onChange={handleInputChange}
          />
          <span className="validation-icon"></span>
        </div>
        <div className="form-group">
          <label htmlFor="hotel-location">Ville</label>
          <input
            type="text"
            id="hotel-location"
            name="hotel-location"
            onChange={handleInputChange}
          />
          <span className="validation-icon"></span>
        </div>
        <button type="submit" className={`btn ${buttonClass} btn-submit ${isLoading ? 'loading' : ''}`} disabled={isLoading}>
          <span className="btn-text">{buttonText}</span>
          <span className="btn-loader"></span>
        </button>
        <p className="form-note">* Champs obligatoires</p>
      </form>
    );
  }

  return (
    <form className="inscription-form" onSubmit={handleSubmit}>
      <h3>{title}</h3>
      {intro && <p className="form-intro">{intro}</p>}
      <div className="form-group">
        <label htmlFor="voyageur-name">Prénom</label>
        <input
          type="text"
          id="voyageur-name"
          name="voyageur-name"
          onChange={handleInputChange}
        />
        <span className="validation-icon"></span>
      </div>
      <div className="form-group">
        <label htmlFor="voyageur-email">Email *</label>
        <input
          type="email"
          id="voyageur-email"
          name="voyageur-email"
          required
          onChange={handleInputChange}
        />
        <span className="validation-icon"></span>
      </div>
      <button type="submit" className={`btn ${buttonClass} btn-submit ${isLoading ? 'loading' : ''}`} disabled={isLoading}>
        <span className="btn-text">{buttonText}</span>
        <span className="btn-loader"></span>
      </button>
    </form>
  );
}

export default function Inscription() {
  return (
    <>
      {/* Inscription Hôteliers */}
      <section className="inscription-section" id="inscription-hotel">
        <div className="container">
          <div className="inscription-split">
            <div className="inscription-content">
              <span className="section-tag">Hôteliers</span>
              <h2>Rejoignez Vaoo dès maintenant</h2>
              <p>Soyez parmi les premiers établissements partenaires et bénéficiez de conditions avantageuses.</p>
              <ul className="benefits-list">
                <li>✓ Abonnement simple et transparent</li>
                <li>✓ Interface dédiée intuitive</li>
                <li>✓ Support personnalisé</li>
                <li>✓ Aucune commission sur réservations</li>
              </ul>
            </div>
            <div className="inscription-form-container">
              <InscriptionForm
                type="hotel"
                title="Inscription hôteliers"
                buttonText="Devenir partenaire"
                buttonClass="btn-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inscription Voyageurs */}
      <section className="inscription-section section-alt" id="inscription-voyageur">
        <div className="container">
          <div className="inscription-split reverse">
            <div className="inscription-form-container">
              <InscriptionForm
                type="voyageur"
                title="Liste d'attente voyageurs"
                intro="Soyez notifié du lancement de la plateforme"
                buttonText="Rejoindre la liste d'attente"
                buttonClass="btn-secondary"
              />
            </div>
            <div className="inscription-content">
              <span className="section-tag">Voyageurs</span>
              <h2>Ne manquez pas le lancement</h2>
              <p>Inscrivez-vous à notre liste d'attente et soyez les premiers à profiter des meilleures offres d'hôtels à prix réduits.</p>
              <ul className="benefits-list">
                <li>✓ Accès prioritaire à la plateforme</li>
                <li>✓ Offres exclusives dès le lancement</li>
                <li>✓ Réductions jusqu'à -40%</li>
                <li>✓ Réservation en quelques clics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

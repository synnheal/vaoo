import { useState } from 'react';

const faqData = [
  {
    question: "C'est quoi Vaoo exactement ?",
    answer: "Vaoo est une plateforme de réservation d'hôtels axée sur les offres de dernière minute. Nous mettons en relation les hôteliers ayant des chambres invendues avec des voyageurs à la recherche de bons plans."
  },
  {
    question: "Comment fonctionne l'abonnement hôtel ?",
    answer: "L'abonnement mensuel est fixe et correspond au prix de votre chambre la plus chère. Par exemple, si votre suite coûte 150€, votre abonnement sera de 150€/mois. Aucune commission n'est prélevée sur vos réservations."
  },
  {
    question: "Quand sera disponible la plateforme ?",
    answer: "Nous sommes actuellement en phase de recrutement des premiers hôtels partenaires. Le lancement public est prévu prochainement. Inscrivez-vous pour être notifié !"
  },
  {
    question: "Pourquoi proposer des réductions ?",
    answer: "Une chambre louée à -30% génère toujours des revenus, tandis qu'une chambre vide ne rapporte rien. C'est une stratégie gagnante pour optimiser votre taux d'occupation."
  },
  {
    question: "Puis-je contrôler mes offres ?",
    answer: "Absolument ! Vous décidez quelles chambres proposer, quand les rendre disponibles, et quel pourcentage de réduction appliquer. Vous gardez le contrôle total."
  },
  {
    question: "Vaoo convient-il aux petits hôtels ?",
    answer: "Oui ! Que vous ayez 10 ou 100 chambres, Vaoo s'adapte à votre taille. Le modèle d'abonnement fixe est particulièrement avantageux pour les établissements de toutes tailles."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Questions fréquentes</span>
          <h2 className="section-title">Des questions ?</h2>
        </div>

        <div className="faq-grid">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{item.question}</h3>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

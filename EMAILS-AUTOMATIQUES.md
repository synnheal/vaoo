# 📧 EMAILS AUTOMATIQUES - VAOO

Ce document contient tous les templates d'emails automatiques à implémenter dans la plateforme.

> **Note :** Ces emails seront à intégrer dans le système d'emailing lors du développement de la plateforme fonctionnelle. Pour l'instant, ce fichier sert de référence.

---

## 1. Email de bienvenue - Hôtelier

**Objet :** Bienvenue dans le réseau VAOO 🌿

**Contenu :**

```
Bonjour [Nom de l'hôtel],

Nous sommes ravis de vous compter parmi les premiers établissements partenaires de VAOO, la plateforme qui connecte directement voyageurs et hôteliers pour des réservations plus humaines, plus flexibles et sans commission.

Grâce à votre adhésion, vous pouvez dès aujourd'hui :
• Recevoir des demandes ciblées de voyageurs correspondant à votre offre,
• Ajuster vos tarifs librement,
• Remplir vos chambres plus facilement, même à la dernière minute.

Notre équipe reste disponible pour vous accompagner à chaque étape.
→ Votre espace hôtelier : [lien vers le tableau de bord]

Merci de votre confiance et bienvenue dans la communauté VAOO 💚

L'équipe VAOO
```

**Variables dynamiques :**
- `[Nom de l'hôtel]` : Nom de l'établissement
- `[lien vers le tableau de bord]` : URL du dashboard hôtelier

---

## 2. Email de bienvenue - Voyageur

**Objet :** Bienvenue chez VAOO – le voyage commence ici

**Contenu :**

```
Bonjour [Prénom],

Bienvenue sur VAOO, la première plateforme où ce sont les hôtels qui s'adaptent à vous.

Ici, vous pouvez indiquer votre destination, vos dates et votre budget — et laisser les hôtels venir à vous avec leurs meilleures offres.

Pas de stress, pas de recherche infinie, juste des offres négociées en toute simplicité.

Votre compte est maintenant actif !
Commencez votre première recherche ici : [lien vers la page de recherche]

Bon voyage,
L'équipe VAOO 💚
```

**Variables dynamiques :**
- `[Prénom]` : Prénom du voyageur
- `[lien vers la page de recherche]` : URL de la recherche de chambres

---

## 3. Email de confirmation de réservation

**Objet :** Votre réservation avec [Nom de l'hôtel] est confirmée

**Contenu :**

```
Bonjour [Prénom],

Bonne nouvelle ! Votre réservation avec [Nom de l'hôtel] est confirmée.

📋 Détails du séjour

Hôtel : [Nom de l'hôtel]
Adresse : [Adresse complète]
Dates : [du DD/MM/YYYY au DD/MM/YYYY]
Prix final : [Montant] €

Une confirmation de l'établissement vous sera également transmise.
Si vous avez la moindre question, notre équipe reste à votre disposition 24h/24.

Merci d'avoir choisi VAOO,
Bon séjour 🌿

L'équipe VAOO
```

**Variables dynamiques :**
- `[Prénom]` : Prénom du voyageur
- `[Nom de l'hôtel]` : Nom de l'établissement
- `[Adresse complète]` : Adresse de l'hôtel
- `[du DD/MM/YYYY au DD/MM/YYYY]` : Dates du séjour
- `[Montant]` : Prix total de la réservation

**Note :** À envoyer simultanément au voyageur ET à l'hôtel (avec adaptation du contenu pour l'hôtel).

---

## 4. Email d'annulation

**Objet :** Votre réservation avec [Nom de l'hôtel] a été annulée

**Contenu :**

```
Bonjour [Prénom],

Votre réservation à [Nom de l'hôtel] a bien été annulée.

📋 Détails de la réservation annulée :

Hôtel : [Nom de l'hôtel]
Dates : [du DD/MM/YYYY au DD/MM/YYYY]
Prix initial : [Montant] €

Aucun montant ne sera prélevé si l'annulation respecte les conditions de l'hôtel.

Nous espérons vous revoir très bientôt sur VAOO pour une nouvelle aventure.

L'équipe VAOO 💚
```

**Variables dynamiques :**
- `[Prénom]` : Prénom du voyageur
- `[Nom de l'hôtel]` : Nom de l'établissement
- `[du DD/MM/YYYY au DD/MM/YYYY]` : Dates du séjour annulé
- `[Montant]` : Prix initial de la réservation

**Note :** Ajouter le montant des frais d'annulation si applicable selon la politique définie dans les CGV.

---

## 5. Newsletter (À définir)

**Statut :** Non défini pour l'instant

Pierre et son frère s'occupent de toute la communication.

**Fréquence :** À définir
**Contenu :** À créer selon la stratégie marketing

**Types de newsletters possibles :**
- Nouvelles offres de dernière minute
- Nouveaux hôtels partenaires
- Conseils voyage
- Offres spéciales groupes
- Actualités de la plateforme

---

## 📋 Checklist d'implémentation technique

Lors du développement de la plateforme fonctionnelle, penser à :

### Configuration technique
- [ ] Choisir un service d'emailing (SendGrid, Mailgun, AWS SES, etc.)
- [ ] Configurer le SPF, DKIM et DMARC pour éviter les spams
- [ ] Créer les templates HTML responsive
- [ ] Tester les emails sur différents clients (Gmail, Outlook, Apple Mail, etc.)

### Déclencheurs automatiques
- [ ] Email bienvenue hôtelier → Envoyé à la validation de l'inscription
- [ ] Email bienvenue voyageur → Envoyé à la validation de l'inscription
- [ ] Email confirmation → Envoyé après paiement réussi
- [ ] Email annulation → Envoyé à la demande d'annulation confirmée

### Personnalisation
- [ ] Intégrer toutes les variables dynamiques
- [ ] Ajouter le logo Vaoo en header
- [ ] Utiliser la charte graphique (vert #5FD45F, beige #F3D89D)
- [ ] Footer avec liens vers CGU, politique de confidentialité, contact

### Conformité légale
- [ ] Ajouter un lien de désinscription (obligatoire RGPD)
- [ ] Mentionner l'adresse postale (loi anti-spam)
- [ ] Respecter le consentement pour les emails marketing
- [ ] Ne pas envoyer d'emails marketing avant acceptation explicite

### Suivi et analytics
- [ ] Tracking des taux d'ouverture
- [ ] Tracking des clics sur les liens
- [ ] A/B testing des objets (optionnel)

---

## 🎨 Design des emails

**Charte graphique à respecter :**
- Couleur primaire : #5FD45F (vert)
- Couleur secondaire : #F3D89D (beige/or)
- Police : Inter (comme le site)
- Style : Moderne, sobre, professionnel

**Structure recommandée :**
```
┌─────────────────────────────┐
│   [LOGO VAOO centré]        │
├─────────────────────────────┤
│                             │
│   Contenu principal         │
│   avec emojis subtils       │
│   et texte aéré             │
│                             │
├─────────────────────────────┤
│   Bouton CTA (si applicable)│
├─────────────────────────────┤
│   Footer :                  │
│   • Liens légaux            │
│   • Contact                 │
│   • Réseaux sociaux         │
│   • Désinscription          │
└─────────────────────────────┘
```

---

## 📝 Notes importantes

1. **Ton éditorial :** Rester professionnel, amical et rassurant. Utiliser le "vous" de politesse.

2. **Emojis :** Utiliser avec modération (1-2 par email maximum) pour rester professionnel.

3. **Responsive :** Tous les emails doivent être parfaitement lisibles sur mobile (70%+ des ouvertures).

4. **Vitesse d'envoi :** Les emails transactionnels (confirmation, annulation) doivent partir immédiatement (< 1 minute).

5. **Support multilingue :** Prévoir la traduction en anglais pour la phase internationale.

6. **Backups :** Conserver une trace de tous les emails envoyés pour des raisons légales (minimum 1 an).

---

**Date de création :** [Date]
**Dernière mise à jour :** [Date]
**Contact :** contact@vaoo.fr

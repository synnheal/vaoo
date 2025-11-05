# Vaoo - Site Vitrine React

Site vitrine moderne pour Vaoo, plateforme de réservation d'hôtels axée sur les offres de dernière minute.

## 🚀 Déploiement sur Bolt.new

Ce projet est compatible avec **Bolt.new** et peut être déployé en quelques clics !

### Option 1 : Importer depuis GitHub

1. Allez sur [bolt.new](https://bolt.new)
2. Cliquez sur "Import from GitHub"
3. Collez l'URL de ce repository
4. Bolt.new va automatiquement détecter qu'il s'agit d'un projet Vite + React
5. Cliquez sur "Deploy" !

### Option 2 : Ouvrir directement

1. Uploadez tout le contenu de ce dossier sur Bolt.new
2. Bolt.new détectera automatiquement la configuration
3. Le site sera prêt à être déployé !

## 📦 Structure du projet

```
vaoo/
├── public/              # Assets statiques
│   └── logo.svg        # Logo Vaoo
├── src/
│   ├── components/     # Composants React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Concept.jsx
│   │   ├── Avantages.jsx
│   │   ├── Fonctionnement.jsx
│   │   ├── UseCases.jsx
│   │   ├── Inscription.jsx
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── StickyCTA.jsx
│   │   ├── BackToTop.jsx
│   │   └── Toast.jsx
│   ├── App.jsx         # Composant principal
│   ├── App.css         # Styles globaux
│   └── main.jsx        # Point d'entrée React
├── index.html          # HTML principal (Vite)
├── package.json        # Dépendances
├── vite.config.js      # Configuration Vite
└── README-BOLT.md      # Ce fichier

```

## 🛠️ Technologies

- **React 18** - Framework UI
- **Vite 5** - Build tool ultra-rapide
- **GSAP 3** - Animations avancées
- **CSS3** - Styling moderne avec variables CSS

## ✨ Fonctionnalités

### Animations
- ✅ Scroll progress bar
- ✅ Hero carousel infini
- ✅ Compteurs animés
- ✅ Effets de parallaxe
- ✅ Animations au scroll (GSAP ScrollTrigger)
- ✅ Effet tilt 3D sur les cartes
- ✅ Shimmer effect sur le texte or

### Interactivité
- ✅ Navigation responsive avec menu burger
- ✅ Smooth scroll vers les sections
- ✅ CTA sticky après le hero
- ✅ Calculateur ROI en temps réel
- ✅ Accordéon FAQ
- ✅ Formulaires avec validation
- ✅ Toast notifications
- ✅ Bouton retour en haut
- ✅ Easter egg (Konami code)

### SEO & Performance
- ✅ Meta tags optimisés
- ✅ HTML sémantique
- ✅ Images optimisées
- ✅ CSS avec variables
- ✅ Build optimisé avec Vite

## 🎨 Couleurs de la marque

```css
--color-green: #5FD45F   /* Vert principal - croissance, espoir */
--color-gold: #F3D89D    /* Or - premium, valeur */
--color-dark: #1a1a1a    /* Texte principal */
--color-gray: #333333    /* Texte secondaire */
--color-white: #ffffff   /* Fond */
```

## 📝 Développement local

Si vous voulez développer localement avant de déployer sur Bolt.new :

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Prévisualiser le build
npm run preview
```

Le site sera accessible sur `http://localhost:3000`

## 🔧 Configuration

### Formulaires

Les formulaires sont actuellement configurés avec une simulation d'envoi. Pour les connecter à un backend réel :

1. Modifiez `src/components/Inscription.jsx`
2. Remplacez la simulation par votre appel API :

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      // Success
      window.showToastGlobal('Inscription réussie !');
    }
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};
```

### Images

Les images sont actuellement hébergées sur Unsplash. Pour la production :

1. Remplacez les URLs Unsplash par vos propres images
2. Placez vos images dans `public/images/`
3. Mettez à jour les URLs dans les composants

### Logo

Le logo actuel est une version simplifiée. Pour le remplacer :

1. Placez votre nouveau `logo.svg` dans `public/`
2. Le logo sera automatiquement utilisé

## 📱 Responsive

Le site est entièrement responsive avec 3 breakpoints :

- **Desktop** : > 1024px
- **Tablet** : 768px - 1024px
- **Mobile** : < 768px

## 🎯 À faire avant la production

- [ ] Remplacer les images Unsplash par vos propres photos
- [ ] Connecter les formulaires à un backend
- [ ] Ajouter les pages légales (Mentions légales, CGU, Confidentialité)
- [ ] Intégrer Google Analytics ou équivalent
- [ ] Tester sur tous les navigateurs
- [ ] Optimiser les images (WebP, lazy loading)
- [ ] Configurer le logo final

## 🚀 Déploiement

Une fois sur Bolt.new, votre site sera automatiquement déployé et vous obtiendrez :

- ✅ URL de production
- ✅ SSL automatique (HTTPS)
- ✅ CDN global
- ✅ Déploiement continu

## 📞 Support

Pour toute question :
- Email : contact@vaoo.fr
- Issues GitHub : [Lien vers votre repo]

## 📄 Licence

© 2025 Vaoo. Tous droits réservés.

---

**Bon déploiement sur Bolt.new ! 🚀**

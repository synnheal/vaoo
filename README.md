# 🏨 Vaoo - Site Vitrine

Site vitrine pour la plateforme de réservation d'hôtels Vaoo.

## 📁 Structure du projet

```
vaoo-site/
│
├── index.html          # Page principale
├── style.css           # Styles et animations
├── script.js           # JavaScript et interactions
├── logo.svg            # Logo Vaoo
└── README.md           # Ce fichier
```

## 🎨 Design

### Couleurs
- **Vert** : `#5FD45F` - Couleur principale
- **Or/Jaune** : `#F3D89D` - Couleur secondaire
- **Gris foncé** : `#333333` - Textes
- **Blanc** : `#FFFFFF` - Fond principal

### Typographies
- **Inter** : Police principale (textes)
- **Playfair Display** : Police d'affichage (titres)

## ✨ Fonctionnalités

### Animations
- ✅ Scroll progress bar en haut de page
- ✅ Hero avec carousel d'images en fond
- ✅ Compteurs animés (-40%, 100%, 0)
- ✅ Effet shimmer sur le mot "or"
- ✅ Cards avec effet tilt 3D au survol
- ✅ Parallax subtil sur les images
- ✅ Reveal progressif des sections au scroll
- ✅ Timeline animée pour "Comment ça marche"

### Interactions
- ✅ Navigation sticky avec effet au scroll
- ✅ Menu burger responsive pour mobile
- ✅ Smooth scroll sur tous les liens ancres
- ✅ Sticky CTA "Devenir partenaire" qui apparaît au scroll
- ✅ Calculateur interactif pour simuler les gains
- ✅ FAQ avec système d'accordéon
- ✅ Formulaires avec validation en temps réel
- ✅ Toast notifications pour les soumissions
- ✅ Bouton "Retour en haut" qui apparaît au scroll

## 🚀 Installation

### 1. Télécharger les fichiers
Tous les fichiers nécessaires sont inclus dans ce dossier.

### 2. Ouvrir le site
Ouvrez simplement `index.html` dans votre navigateur préféré.

**Aucune installation supplémentaire requise !**

Les librairies externes (GSAP, Google Fonts) sont chargées via CDN.

## 📱 Responsive

Le site est entièrement responsive et optimisé pour :
- 💻 Desktop (1200px+)
- 💻 Tablette (768px - 1024px)
- 📱 Mobile (320px - 768px)

## 🔧 Personnalisation

### Changer les couleurs
Modifiez les variables CSS dans `style.css` :

```css
:root {
    --color-green: #5FD45F;
    --color-gold: #F3D89D;
    --color-dark: #1a1a1a;
    /* ... */
}
```

### Remplacer les images
Les images actuelles proviennent d'Unsplash et sont libres de droits **À DES FINS DE DÉMONSTRATION**.

**⚠️ IMPORTANT : Remplacez toutes les images avant utilisation commerciale !**

Images à remplacer dans `index.html` :
- Hero carousel (8 images d'hôtels)
- Section avantages (1 image)
- Section cas d'usage (3 images)

### Configurer la collecte d'emails

**Option 1 : Email direct (PHP)**
Créez un fichier `form-handler.php` :

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['hotel-name'];
    $email = $_POST['hotel-email'];
    
    $to = "votre-email@vaoo.fr";
    $subject = "Nouvelle inscription hôtel";
    $message = "Nom: $name\nEmail: $email";
    
    mail($to, $subject, $message);
    
    echo json_encode(["success" => true]);
}
?>
```

Puis modifiez dans `script.js` :

```javascript
// Ligne ~200
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    
    const response = await fetch('form-handler.php', {
        method: 'POST',
        body: formData
    });
    
    const result = await response.json();
    
    if (result.success) {
        showToast('Inscription enregistrée !');
        form.reset();
    }
});
```

**Option 2 : Google Forms**
1. Créez un Google Form
2. Récupérez le lien d'intégration
3. Remplacez les formulaires dans `index.html`

**Option 3 : Service tiers (Mailchimp, Sendinblue, etc.)**
Suivez la documentation du service choisi pour intégrer les formulaires.

## 📊 Analytics (Optionnel)

Pour ajouter Google Analytics, ajoutez avant `</head>` dans `index.html` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🌐 Mise en ligne

### Option 1 : Hébergement classique (OVH, Hostinger, etc.)
1. Uploadez tous les fichiers via FTP
2. Pointez votre nom de domaine vers l'hébergement
3. C'est en ligne !

### Option 2 : Netlify / Vercel (GRATUIT)
1. Créez un compte sur Netlify.com ou Vercel.com
2. Glissez-déposez le dossier du site
3. Votre site est en ligne en 30 secondes !

### Option 3 : GitHub Pages (GRATUIT)
1. Créez un repo GitHub
2. Uploadez les fichiers
3. Activez GitHub Pages dans les settings
4. Votre site est en ligne !

## 🐛 Dépannage

### Les animations ne fonctionnent pas
- Vérifiez que JavaScript est activé dans votre navigateur
- Vérifiez que GSAP est bien chargé (F12 > Console)
- Videz le cache du navigateur (Ctrl + F5)

### Le menu mobile ne s'ouvre pas
- Vérifiez la console pour des erreurs JavaScript
- Testez sur un autre navigateur

### Les images ne s'affichent pas
- Vérifiez que vous avez une connexion internet (images Unsplash)
- Remplacez par des images locales si nécessaire

## 📝 Notes importantes

### Images Unsplash
⚠️ **Les images d'Unsplash sont utilisées pour la démo uniquement.**

Avant toute utilisation commerciale :
1. Remplacez toutes les images par vos propres photos
2. Ou utilisez des images libres de droits vérifiées
3. Ou achetez des licences appropriées

### Logo
Le logo SVG inclus est une **version simplifiée temporaire**.
Remplacez `logo.svg` par votre véritable logo final.

### Mentions légales
Avant la mise en ligne, ajoutez :
- Mentions légales
- Politique de confidentialité
- CGU/CGV
- Cookies (si applicable)

## 🎯 Checklist avant mise en ligne

- [ ] Remplacer toutes les images Unsplash
- [ ] Mettre à jour le vrai logo
- [ ] Configurer la collecte d'emails
- [ ] Ajouter mentions légales
- [ ] Tester sur tous les navigateurs
- [ ] Tester responsive sur mobile
- [ ] Optimiser les images (compression)
- [ ] Ajouter Analytics (optionnel)
- [ ] Configurer le nom de domaine
- [ ] Tester les formulaires

## 🆘 Support

Pour toute question technique :
- Vérifiez d'abord ce README
- Consultez la console du navigateur (F12)
- Testez sur un autre navigateur

## 📄 Licence

© 2025 Vaoo. Tous droits réservés.

---

**Créé avec ❤️ pour Vaoo**

*Site développé avec HTML5, CSS3, JavaScript vanilla et GSAP*

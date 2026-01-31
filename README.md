# SweetDay – Site Web de Commande de Gâteaux d’Anniversaire

![SweetDay Logo](https://via.placeholder.com/150x50?text=SweetDay)  

**SweetDay** est un site web moderne, responsive et interactif pour commander des gâteaux d’anniversaire. Il est conçu pour provoquer l’envie immédiate de commander et offrir une expérience fluide et chaleureuse pour les parents, jeunes adultes et organisateurs d’événements.

---

## 📌 Table des matières

- [Technologies](#-technologies)
- [Fonctionnalités](#-fonctionnalités)
- [Structure du projet](#-structure-du-projet)
- [Installation et lancement](#-installation-et-lancement)
- [Utilisation](#-utilisation)
- [Contribuer](#-contribuer)
- [Licence](#-licence)

---

## 💻 Technologies

- **Frontend** : ReactJS, Tailwind CSS, Lucide React (icônes), SweetAlert2  
- **Responsive Design** : Mobile-first, tablette, desktop  
- **Animations & UX** : Transitions fluides, hover effects, loader, scrollUp button  
- **Intégrations** :  
  - WhatsApp API pour la commande directe  
  - Formulaire avec validation et accusé de réception  

---

## ✨ Fonctionnalités

1. **Navbar responsive**  
   - Logo + menu hamburger sur mobile  
   - Overlay avec animation lors de l’ouverture  

2. **Hero Section**  
   - Titre émotionnel, sous-titre rassurant  
   - Bouton CTA pour commander  

3. **Section Gâteaux**  
   - Galerie interactive  
   - Catégories : enfants, adultes, personnalisés  
   - Boutons de commande directs  

4. **Comment ça marche**  
   - Étapes numérotées, animées  
   - Design clair et responsive  

5. **Pourquoi nous choisir**  
   - Cartes disposées en cercle sur desktop, empilées sur mobile  
   - Shadows, transitions  

6. **Avis clients**  
   - Témoignages crédibles avec photo et prénom  

7. **Contact / Commander**  
   - Formulaire complet : nom, téléphone, date (format français), type de gâteau, message  
   - Soumission via bouton Envoyer ou WhatsApp  
   - Loader + SweetAlert2 pour accusé de réception  

8. **Footer**  
   - Logo, liens rapides, contact, réseaux sociaux  
   - Mention légale et copyright  

9. **Scroll Up Button**  
   - Apparaît après 300px de scroll  
   - Remonte automatiquement en douceur  

---

## 🗂 Structure du projet

sweetday/
├─ public/
│ └─ index.html
| └─ cakes/
├─ src/
│ ├─ components/
│ │ ├─ Navbar.jsx
│ │ ├─ Hero.jsx
│ │ ├─ Cakes.jsx
│ │ ├─ HowItWorks.jsx
│ │ ├─ WhyUs.jsx
│ │ ├─ Testimonials.jsx
│ │ ├─ Contact.jsx
│ │ ├─ Footer.jsx
│ │ └─ ScrollToTop.jsx
│ ├─ App.jsx
│ ├─ index.jsx
│ └─ assets/
│ └─ images/
└─ package.json


---

## 🚀 Installation et lancement

1. Cloner le dépôt :  

```bash
git clone https://github.com/ton-utilisateur/sweetday.git
cd sweetday

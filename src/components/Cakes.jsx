import { useState } from "react";
import { Users, Ruler } from "lucide-react";
// Exemple de données
const cakes = [
  {
    id: 1,
    name: "Gâteau Licorne",
    category: "Enfants",
    size: "20 cm",
    serves: "6 personnes",
    price: "25 000 FCFA",
    image: "/cakes/cake1.jpg",
    description: "Un gâteau féerique qui transporte les enfants dans un monde magique. Vanille onctueuse et décoration en pâte à sucre.",

  },
  {
    id: 2,
    name: "Gâteau Chocolat Deluxe",
    category: "Adultes",
    size: "25 cm",
    serves: "8 personnes",
    price: "35 000 FCFA",
    image: "/cakes/cake2.jpg",
    description: "L'élégance à l'état pur. Trois couches de chocolat noir belge et ganache veloutée. Un délice raffiné.",

  },
  {
    id: 3,
    name: "Gâteau Photo Personnalisé",
    category: "Personnalisés",
    size: "20 cm",
    serves: "6 personnes",
    price: "30 000 FCFA",
    image: "/cakes/cake3.jpg",
    description: "Un gâteau unique avec votre photo préférée imprimée comestiblement. Parfait pour des souvenirs personnalisés.",
  },
  {
    id: 4,
    name: "Gâteau Licorne",
    category: "Enfants",
    size: "20 cm",
    serves: "6 personnes",
    price: "25 000 FCFA",
    image: "/cakes/cake5.jpg",
    description: "Un gâteau féerique qui transporte les enfants dans un monde magique. Vanille onctueuse et décoration en pâte à sucre.",
  },
  {
    id: 5,
    name: "Gâteau Chocolat Deluxe",
    category: "Adultes",
    size: "25 cm",
    serves: "8 personnes",
    price: "35 000 FCFA",
    image: "/cakes/cake4.jpg",
    description: "L'élégance à l'état pur. Trois couches de chocolat noir belge et ganache veloutée. Un délice raffiné.",
  },
  {
    id: 6,
    name: "Gâteau Photo Personnalisé",
    category: "Personnalisés",
    size: "20 cm",
    serves: "6 personnes",
    price: "30 000 FCFA",
    image: "/cakes/cake3.jpg",
    description: "Un gâteau unique avec votre photo préférée imprimée comestiblement. Parfait pour des souvenirs personnalisés.",
  },
];

const categories = ["Tous", "Enfants", "Adultes", "Personnalisés"];

export default function Cakes() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  // Filtrer les gâteaux selon la catégorie
  const filteredCakes =
    activeCategory === "Tous"
      ? cakes
      : cakes.filter((cake) => cake.category === activeCategory);

  return (
    <section id="cakes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* TITRE */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 text-center">
          Nos Gâteaux
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Découvrez notre collection de gâteaux personnalisés pour tous vos anniversaires.
        </p>

        {/* CATEGORIES */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium transition
                ${activeCategory === cat
                  ? "bg-pink-600 text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-pink-50"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRILLE DE GÂTEAUX */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredCakes.map((cake, index) => (
            <div
              key={cake.id}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden h-56 sm:h-64">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* OVERLAY GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
               

                
              </div>

              {/* CONTENU */}
              <div className="p-6 space-y-4 ">
                
                {/* NOM */}
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                  {cake.name}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 text-[17px]">
                  {cake.description}
                </p>

                {/* INFOS */}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Ruler size={16} className="text-pink-600" />
                    <span>{cake.size}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} className="text-pink-600" />
                    <span>{cake.serves}</span>
                  </div>
                </div>

                {/* PRIX & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    {/* <p className="text-xs text-gray-500 mb-1">À partir de</p> */}
                    <p className="text-2xl font-bold text-pink-600">{cake.price}</p>
                  </div>
                  
                  <a
                    href="#contact"
                    className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2 group/btn"
                  >
                    <span>Commander</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// import { useState } from "react";
// import { Cake, Users, Ruler, Sparkles, Heart } from "lucide-react";

// // Exemple de données avec descriptions enrichies
// const cakes = [
//   {
//     id: 1,
//     name: "Gâteau Licorne Magique",
//     category: "Enfants",
//     size: "20 cm",
//     serves: "6 personnes",
//     price: "25 000 XOF",
//     image: "https://images.unsplash.com/photo-1588195538326-c5b1e5b66e74?w=800&q=80",
//     description: "Un gâteau féerique qui transporte les enfants dans un monde magique. Vanille onctueuse et décoration en pâte à sucre.",
//     tags: ["Populaire", "Personnalisable"],
//     rating: 4.9,
//   },
//   {
//     id: 2,
//     name: "Gâteau Chocolat Deluxe",
//     category: "Adultes",
//     size: "25 cm",
//     serves: "8 personnes",
//     price: "35 000 XOF",
//     image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
//     description: "L'élégance à l'état pur. Trois couches de chocolat noir belge et ganache veloutée. Un délice raffiné.",
//     tags: ["Best-seller", "Premium"],
//     rating: 5.0,
//   },
//   {
//     id: 3,
//     name: "Gâteau Photo Personnalisé",
//     category: "Personnalisés",
//     size: "20 cm",
//     serves: "6 personnes",
//     price: "30 000 XOF",
//     image: "https://images.unsplash.com/photo-1562440499-64c9a74f0695?w=800&q=80",
//     description: "Votre photo préférée imprimée sur un délicieux gâteau. Parfait pour immortaliser vos plus beaux souvenirs.",
//     tags: ["Unique", "Sur mesure"],
//     rating: 4.8,
//   },
//   {
//     id: 4,
//     name: "Gâteau Super-Héros",
//     category: "Enfants",
//     size: "22 cm",
//     serves: "8 personnes",
//     price: "28 000 XOF",
//     image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=80",
//     description: "Pour les petits héros ! Gâteau coloré aux saveurs fruitées avec leur super-héros préféré en décoration.",
//     tags: ["Nouveau", "Coloré"],
//     rating: 4.9,
//   },
//   {
//     id: 5,
//     name: "Gâteau Fraisier Classique",
//     category: "Adultes",
//     size: "25 cm",
//     serves: "8 personnes",
//     price: "32 000 XOF",
//     image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80",
//     description: "Le grand classique français. Fraises fraîches, crème mousseline vanille et génoise légère. Un incontournable.",
//     tags: ["Classique", "Raffiné"],
//     rating: 4.7,
//   },
//   {
//     id: 6,
//     name: "Gâteau Âge + Prénom",
//     category: "Personnalisés",
//     size: "20 cm",
//     serves: "6 personnes",
//     price: "27 000 XOF",
//     image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&q=80",
//     description: "Totalement personnalisé avec l'âge et le prénom. Choisissez votre parfum et vos couleurs préférées.",
//     tags: ["Sur mesure", "Populaire"],
//     rating: 4.9,
//   },
// ];

// const categories = ["Tous", "Enfants", "Adultes", "Personnalisés"];

// export default function Cakes() {
//   const [activeCategory, setActiveCategory] = useState("Tous");

//   // Filtrer les gâteaux selon la catégorie
//   const filteredCakes =
//     activeCategory === "Tous"
//       ? cakes
//       : cakes.filter((cake) => cake.category === activeCategory);

//   return (
//     <section id="cakes" className="py-20 bg-gradient-to-b from-white to-pink-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* HEADER */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
//             <Cake size={16} />
//             <span>Créations artisanales</span>
//           </div>
          
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
//             Nos Gâteaux d'Exception
//           </h2>
          
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Chaque gâteau est une œuvre unique, préparée avec amour pour transformer votre anniversaire en moment inoubliable.
//           </p>
//         </div>

//         {/* CATEGORIES - Scrollable sur mobile */}
//         <div className="mb-12">
//           <div className="flex justify-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat)}
//                 className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap
//                   ${activeCategory === cat
//                     ? "bg-pink-600 text-white shadow-lg scale-105"
//                     : "bg-white border-2 border-gray-200 text-gray-700 hover:border-pink-300 hover:bg-pink-50"}`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* GRILLE DE GÂTEAUX */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {filteredCakes.map((cake, index) => (
//             <div
//               key={cake.id}
//               className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               {/* IMAGE */}
//               <div className="relative overflow-hidden h-56 sm:h-64">
//                 <img
//                   src={cake.image}
//                   alt={cake.name}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
                
//                 {/* OVERLAY GRADIENT */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
//                 {/* TAGS */}
//                 <div className="absolute top-3 left-3 flex flex-wrap gap-2">
//                   {cake.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="bg-white/90 backdrop-blur-sm text-pink-600 text-xs font-bold px-3 py-1 rounded-full shadow"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* RATING */}
//                 <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow">
//                   <span className="text-yellow-500 text-sm">⭐</span>
//                   <span className="text-gray-900 font-bold text-sm">{cake.rating}</span>
//                 </div>
//               </div>

//               {/* CONTENU */}
//               <div className="p-6 space-y-4">
                
//                 {/* NOM */}
//                 <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
//                   {cake.name}
//                 </h3>

//                 {/* DESCRIPTION */}
//                 <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
//                   {cake.description}
//                 </p>

//                 {/* INFOS */}
//                 <div className="flex items-center gap-4 text-sm text-gray-500">
//                   <div className="flex items-center gap-1">
//                     <Ruler size={16} className="text-pink-600" />
//                     <span>{cake.size}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Users size={16} className="text-pink-600" />
//                     <span>{cake.serves}</span>
//                   </div>
//                 </div>

//                 {/* PRIX & CTA */}
//                 <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                   <div>
//                     <p className="text-xs text-gray-500 mb-1">À partir de</p>
//                     <p className="text-2xl font-bold text-pink-600">{cake.price}</p>
//                   </div>
                  
//                   <a
//                     href="#contact"
//                     className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2 group/btn"
//                   >
//                     <span>Commander</span>
//                     <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA FINAL */}
//         <div className="mt-16 text-center">
//           <div className="inline-block bg-gradient-to-r from-pink-50 to-yellow-50 rounded-3xl p-8 shadow-lg">
//             <div className="flex items-center justify-center gap-2 mb-4">
//               <Sparkles className="text-pink-600" size={24} />
//               <Heart className="text-pink-600" size={24} />
//               <Sparkles className="text-pink-600" size={24} />
//             </div>
            
//             <h3 className="text-2xl font-bold text-gray-900 mb-3">
//               Vous ne trouvez pas votre bonheur ?
//             </h3>
            
//             <p className="text-gray-600 mb-6 max-w-md mx-auto">
//               Nous créons des gâteaux 100% sur mesure selon vos envies. Thème, couleurs, saveurs… Tout est possible !
//             </p>
            
//             <a
//               href="#contact"
//               className="inline-flex items-center gap-2 bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition shadow-lg hover:shadow-xl"
//             >
//               <Cake size={20} />
//               <span>Créer mon gâteau unique</span>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* CSS pour masquer la scrollbar */}
//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </section>
//   );
// }
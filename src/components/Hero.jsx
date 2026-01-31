// import { Sparkles, Truck, Heart, Cake } from "lucide-react";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//     >
//       {/* BACKGROUND */}
//       <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-yellow-50" />

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-16 text-center">

//         {/* BADGE */}
//         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-6">
//           <Sparkles size={16} />
//           Anniversaires inoubliables, sans stress
//         </div>

//         {/* TITLE */}
//         <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
//           Le gâteau parfait pour un{" "}
//           <span className="text-pink-600">anniversaire inoubliable</span>
//         </h1>

//         {/* SUBTITLE */}
//         <p className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg mb-10">
//           Des gâteaux d’anniversaire personnalisés, faits avec amour,
//           livrés à temps pour transformer chaque moment en souvenir magique.
//         </p>

//         {/* CTA */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
//           <a
//             href="#contact"
//             className="w-full sm:w-auto inline-flex items-center justify-center gap-2
//               bg-pink-600 text-white px-8 py-4 rounded-full font-semibold
//               hover:bg-pink-700 transition shadow-lg shadow-pink-200"
//           >
//             <Cake size={20} />
//             Commander mon gâteau
//           </a>

//           <a
//             href="https://wa.me/22900000000"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-full sm:w-auto inline-flex items-center justify-center
//               px-8 py-4 rounded-full font-semibold
//               border border-pink-600 text-pink-600
//               hover:bg-pink-50 transition"
//           >
//             Discuter sur WhatsApp
//           </a>
//         </div>

//         {/* TRUST POINTS */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-gray-700">
//           <div className="flex items-center justify-center gap-3">
//             <Heart className="text-pink-600" />
//             <span>Fait avec amour</span>
//           </div>
//           <div className="flex items-center justify-center gap-3">
//             <Cake className="text-pink-600" />
//             <span>100 % personnalisé</span>
//           </div>
//           <div className="flex items-center justify-center gap-3">
//             <Truck className="text-pink-600" />
//             <span>Livraison à temps</span>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


import { Sparkles, Heart, Clock, Cake } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-yellow-50"
    >
      {/* DECORATION BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-300/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* TEXTE - COLONNE GAUCHE */}
          <div className="text-center md:text-left space-y-6">
            
            {/* BADGE */}
            {/* <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles size={16} />
              <span>Création artisanale et personnalisée</span>
            </div> */}

            {/* TITRE PRINCIPAL - ÉMOTIONNEL */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Le gâteau parfait pour un{" "}
              <span className="text-pink-600 relative inline-block">
                anniversaire inoubliable
                <svg 
                  className="absolute -bottom-2 left-0 w-full" 
                  height="12" 
                  viewBox="0 0 200 12" 
                  fill="none"
                >
                  <path 
                    d="M2 10C40 3 80 1 100 2C120 3 160 5 198 10" 
                    stroke="#EC4899" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* SOUS-TITRE RASSURANT */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-xl">
              Parce qu'un anniversaire mérite mieux qu'un simple gâteau. 
              <strong className="text-gray-800"> Personnalisé, délicieux et livré à temps.</strong>
            </p>

            {/* CTA PRINCIPAL */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="group bg-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-700 transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
            
                <span>Commander mon gâteau</span>
         
              </a>
              
              <a
                href="#cakes"
                className="bg-white text-pink-600 border-2 border-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition shadow-md flex items-center justify-center gap-2"
              >
                <span>Voir nos créations</span>
              </a>
            </div>

            {/* RÉASSURANCE */}
            {/* hide it on mobile */}
            <div className="hidden sm:flex flex-wrap gap-6 pt-6 text-sm text-gray-600 ">
              <div className="flex items-center gap-2">
                <Heart size={18} className="text-pink-600" />
                <span>Fait avec amour</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-pink-600" />
                <span>Livraison garantie</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-pink-600" />
                <span>100% personnalisable</span>
              </div>
            </div>
          </div>

          {/* IMAGE - COLONNE DROITE */}
          <div className="relative">
            
            {/* IMAGE PRINCIPALE */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&q=80"
                alt="Magnifique gâteau d'anniversaire personnalisé"
                className="w-full h-[400px] md:h-[550px] object-cover"
              />
              
              {/* OVERLAY GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* BADGES FLOTTANTS */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎂</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">+200</p>
                  <p className="text-xs text-gray-600">Clients satisfaits</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">4.9/5</p>
                  <p className="text-xs text-gray-600">Note moyenne</p>
                </div>
              </div>
            </div>

            {/* URGENCE SUBTILE */}
            {/* hide  it on mobile */}
            {/* <div className="hidden md:absolute top-4 right-4 bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              📅 Plus que 3 créneaux cette semaine
            </div> */}

          </div>
        </div>
      </div>

      {/* WAVE SEPARATOR */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          className="w-full h-auto"
        >
          <path 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" 
            fill="white"
          />
        </svg>
      </div>

      {/* ANIMATIONS CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  );
}
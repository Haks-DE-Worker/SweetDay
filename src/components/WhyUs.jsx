import { Heart, Clock, Smile, Star } from "lucide-react";

const reasons = [
  {
    title: "Gâteaux faits avec amour",
    description: "Chaque gâteau est préparé avec soin et passion par nos pâtissiers.",
    icon: <Heart size={28} className="text-pink-500" />,
    position: "12h", // Top
  },
  {
    title: "Respect des délais",
    description: "Nous garantissons la livraison à temps, sans stress pour votre fête.",
    icon: <Clock size={28} className="text-pink-500" />,
    position: "3h", // Right
  },
  {
    title: "Personnalisation totale",
    description: "Ajoutez prénom, âge, thème et même photo pour un gâteau unique.",
    icon: <Star size={28} className="text-pink-500" />,
    position: "6h", // Bottom
  },
  {
    title: "Clients satisfaits",
    description: "Notre priorité est la satisfaction et le sourire de nos clients.",
    icon: <Smile size={28} className="text-pink-500" />,
    position: "9h", // Left
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 bg-gradient-to-b from-pink-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nos clients nous font confiance pour rendre chaque anniversaire inoubliable.
          </p>
        </div>

        {/* DISPOSITION EN HORLOGE - Desktop uniquement */}
        <div className="hidden lg:block relative">
          <div className="relative w-full max-w-4xl mx-auto" style={{ height: '600px' }}>
            
            {/* CENTRE - Image ou élément décoratif */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-2xl z-10">
              <div className="text-center text-white">
                <p className="text-5xl font-bold mb-2">+200</p>
                <p className="text-sm font-medium">Clients heureux</p>
              </div>
            </div>

            {/* CARTES POSITIONNÉES */}
            {reasons.map((reason, index) => {
              // Positions en horloge : 12h, 3h, 6h, 9h
              const clockPositions = {
                0: "top-0 left-1/2 -translate-x-1/2", // 12h
                1: "top-1/2 right-0 -translate-y-1/2", // 3h
                2: "bottom-0 left-1/2 -translate-x-1/2", // 6h
                3: "top-1/2 left-0 -translate-y-1/2", // 9h
              };

              return (
                <div
                  key={index}
                  className={`absolute ${clockPositions[index]} w-72 bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 z-20`}
                  style={{
                    animation: `fadeInScale 0.6s ease-out ${index * 0.15}s backwards`
                  }}
                >
                  {/* ICONE */}
                  <div className="mb-4 w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto">
                    {reason.icon}
                  </div>
                  
                  {/* TITRE */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {reason.title}
                  </h3>
                  
                  {/* DESCRIPTION */}
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {reason.description}
                  </p>
                </div>
              );
            })}

            {/* LIGNES DÉCORATIVES RELIANT AU CENTRE */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
              {/* Ligne vers 12h */}
              <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="#FFC0CB" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
              {/* Ligne vers 3h */}
              <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="#FFC0CB" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
              {/* Ligne vers 6h */}
              <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="#FFC0CB" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
              {/* Ligne vers 9h */}
              <line x1="50%" y1="50%" x2="15%" y2="50%" stroke="#FFC0CB" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
            </svg>
          </div>
        </div>

        {/* VERSION RESPONSIVE - Tablette */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{
                animation: `fadeInScale 0.6s ease-out ${index * 0.15}s backwards`
              }}
            >
              {/* ICONE */}
              <div className="mb-4 w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center">
                {reason.icon}
              </div>
              
              {/* TITRE */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {reason.title}
              </h3>
              
              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* VERSION MOBILE */}
        <div className="md:hidden space-y-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-lg"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s backwards`
              }}
            >
              {/* ICONE */}
              <div className="mb-4 w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center">
                {reason.icon}
              </div>
              
              {/* TITRE */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {reason.title}
              </h3>
              
              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* ANIMATIONS CSS */}
      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
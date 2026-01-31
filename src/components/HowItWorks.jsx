import { useState, useRef } from "react";
import { Cake, Edit3, Package, Truck, ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
  {
    title: "Choisissez votre gâteau",
    description: "Parcourez notre collection et sélectionnez le gâteau parfait pour votre fête.",
    icon: <Cake size={32} className="text-pink-500" />,
  },
  {
    title: "Personnalisez-le",
    description: "Ajoutez prénom, âge, thème et vos idées pour le rendre unique.",
    icon: <Edit3 size={32} className="text-pink-500" />,
  },
  {
    title: "Préparation artisanale",
    description: "Nos pâtissiers préparent chaque gâteau avec soin et amour.",
    icon: <Package size={32} className="text-pink-500" />,
  },
  {
    title: "Livraison à temps",
    description: "Nous livrons votre gâteau directement à la fête ou à votre domicile.",
    icon: <Truck size={32} className="text-pink-500" />,
  },
];

export default function HowItWorks() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const goTo = (index) => setCurrent(index);
  const prev = () => setCurrent((c) => (c === 0 ? steps.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === steps.length - 1 ? 0 : c + 1));

  // Swipe mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="how" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Comment ça marche
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Commander un gâteau n'a jamais été aussi simple et rapide.
          </p>
        </div>

        {/* ===== DESKTOP (md+) : grille avec flèches entre étapes ===== */}
        <div className="hidden md:flex items-start justify-center gap-0">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start">

              {/* CARD */}
              <div className="w-56 lg:w-64 flex flex-col items-center text-center">
                {/* Cercle numéro + icone */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center shadow-lg">
                    {step.icon}
                  </div>
                  {/* Badge numéro */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-white border-2 border-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 font-bold text-sm">{index + 1}</span>
                  </div>
                </div>

                <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* FLÈCHE entre les étapes (sauf après la dernière) */}
              {index < steps.length - 1 && (
                <div className="flex flex-col items-center mt-10 mx-1 lg:mx-2 flex-shrink-0">
                  <div className="flex items-center gap-1">
                    <div className="w-6 lg:w-8 h-0.5 bg-pink-300"></div>
                    <ChevronRight size={18} className="text-pink-400" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ===== MOBILE (< md) : carrousel ===== */}
        <div className="md:hidden">

          {/* Slide en cours */}
          <div
            className="relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Cards empilées avec transition */}
            <div className="relative h-72 flex items-center justify-center">
              {steps.map((step, index) => {
                // Position relative au current : 0 = visible, -1 = gauche, +1 = droite
                const pos = index - current;
                // On ne rend que la carte active et ses voisines pour la fluidité
                if (Math.abs(pos) > 1) return null;

                return (
                  <div
                    key={index}
                    className="absolute w-full max-w-sm mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-8 flex flex-col items-center text-center transition-all duration-500 ease-out"
                    style={{
                      transform: `translateX(${pos * 100}%) scale(${pos === 0 ? 1 : 0.9})`,
                      opacity: pos === 0 ? 1 : 0.4,
                      zIndex: pos === 0 ? 10 : 5,
                      pointerEvents: pos === 0 ? "auto" : "none",
                    }}
                  >
                    {/* Cercle numéro + icone */}
                    <div className="relative mb-5">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center shadow-lg">
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-white border-2 border-pink-500 rounded-full flex items-center justify-center">
                        <span className="text-pink-600 font-bold text-sm">{index + 1}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* BOUTONS NAVIGATION */}
            <div className="flex items-center justify-between mt-6 px-4">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-200 transition active:scale-90"
              >
                <ChevronLeft size={22} />
              </button>

              {/* DOTS */}
              <div className="flex gap-2">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-6 h-2.5 bg-pink-600"
                        : "w-2.5 h-2.5 bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-11 h-11 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-200 transition active:scale-90"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Texte indicatif */}
            <p className="text-center text-xs text-gray-400 mt-4">
              Glissez ou utilisez les flèches
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
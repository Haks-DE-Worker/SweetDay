import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Emma",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    review: "Le gâteau était magnifique et délicieux ! Ma fille était ravie, merci !",
    rating: 5,
  },
  {
    name: "Lucas",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    review: "Livraison rapide et gâteau parfaitement personnalisé. Très satisfait !",
    rating: 5,
  },
  {
    name: "Sophie",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    review: "Service très professionnel, gâteau magnifique et goût excellent.",
    rating: 5,
  },
  {
    name: "Mathieu",
    photo: "https://randomuser.me/api/portraits/men/15.jpg",
    review: "Un anniversaire inoubliable grâce à SweetDay ! Je recommande à 100%.",
    rating: 4,
  },
];

// Composant pour afficher les étoiles
const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={`${
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Avis de nos clients
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ils nous ont fait confiance pour leurs moments spéciaux. Découvrez leurs expériences.
          </p>
        </div>

        {/* CARDS TESTIMONIALS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s backwards`
              }}
            >
              {/* QUOTE ICON DECORATIF */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={64} className="text-pink-600" />
              </div>

              {/* CONTENU PRINCIPAL - Image et Texte côte à côte */}
              <div className="flex gap-4 relative z-10">
                
                {/* IMAGE */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-lg ring-4 ring-pink-100 group-hover:ring-pink-200 transition-all"
                    />
                    {/* Badge vérifié */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* TEXTE */}
                <div className="flex-1 min-w-0">
                  
                  {/* NOM */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                    {testimonial.name}
                  </h3>

                  {/* ÉTOILES */}
                  <div className="mb-3">
                    <StarRating rating={testimonial.rating} />
                  </div>

                  {/* AVIS */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
                    "{testimonial.review}"
                  </p>
                </div>
              </div>

              {/* BORDURE DÉCORATIVE */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

      </div>

      {/* ANIMATIONS CSS */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
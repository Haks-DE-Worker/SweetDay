import { Cake, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-pink-50 text-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <a href="#home" className="flex items-center gap-2 font-bold text-xl text-pink-600 mb-4">
            <Cake size={28} />
            <span>SweetDay</span>
          </a>
          <p className="text-gray-600">
            Des gâteaux uniques pour des anniversaires inoubliables.
          </p>
        </div>

        {/* Liens rapides */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-pink-600 transition">Accueil</a>
            </li>
            <li>
              <a href="#cakes" className="hover:text-pink-600 transition">Gâteaux</a>
            </li>
            <li>
              <a href="#how" className="hover:text-pink-600 transition">Comment ça marche</a>
            </li>
            <li>
              <a href="#why" className="hover:text-pink-600 transition">Pourquoi nous</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-pink-600 transition">Avis</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p>Téléphone : +229 01 59 52 27 06</p>
          <p>Email : contact@sweetday.com</p>
          <p className="mt-2">Adresse : Cotonou, Bénin</p>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Réseaux sociaux</h3>
          <div className="flex gap-4">
            <a href="#" className="text-gray-700 hover:text-pink-600 transition">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SweetDay. Tous droits réservés.
      </div>
    </footer>
  );
}

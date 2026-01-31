import { useState } from "react";
import { Cake, Menu, X } from "lucide-react";

const links = [
  { name: "Accueil", href: "#home" },
  { name: "Gâteaux", href: "#cakes" },
  { name: "Comment ça marche", href: "#how" },
  { name: "Pourquoi nous", href: "#why" },
  { name: "Avis", href: "#testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-[60] bg-white/90 backdrop-blur shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <a
            href="#home"
            className="flex items-center gap-2 font-bold text-lg sm:text-xl text-pink-600"
          >
            <Cake size={24} className="sm:w-7 sm:h-7" />
            <span>SweetDay</span>
          </a>

          {/* MENU DESKTOP */}
          <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-pink-600 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-pink-700 transition"
              >
                Commander
              </a>
            </li>
          </ul>

          {/* HAMBURGER MOBILE */}
          <button
            className="md:hidden text-gray-800 z-[70] relative"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-[50] bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden
          ${open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />

      {/* MENU MOBILE */}
      <div
        className={`fixed top-0 right-0 z-[55] h-full w-[85%] max-w-sm bg-white shadow-2xl
          transform transition-transform duration-300 ease-out md:hidden overflow-y-auto
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col gap-6 py-20 px-6 text-gray-700 font-medium">

          {links.map((link, index) => (
            <li
              key={link.name}
              className={`transition-all duration-300 ${
                open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg block hover:text-pink-600 transition"
              >
                {link.name}
              </a>
            </li>
          ))}

          <li
            className={`pt-4 transition-all duration-300 ${
              open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition"
            >
              Commander
            </a>
          </li>

        </ul>
      </div>
    </>
  );
}

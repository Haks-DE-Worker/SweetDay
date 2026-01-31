import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // On écoute le scroll pour afficher le bouton
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll vers le haut en douceur
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50 p-3 rounded-full bg-pink-600 text-white shadow-lg
        hover:bg-pink-700 transition transform duration-300
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}
      `}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
}

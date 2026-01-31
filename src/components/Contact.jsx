import { useState } from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const todayISO = `${yyyy}-${mm}-${dd}`; // pour le champ date

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: todayISO,
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // loader

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Soumission classique
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérification simple des champs
    if (!form.name || !form.phone || !form.date || !form.type) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Veuillez remplir tous les champs obligatoires !",
      });
      return;
    }

    setLoading(true);

    // Simuler envoi API / backend
    setTimeout(() => {
      setLoading(false);
      Swal.fire({
        icon: "success",
        title: "Merci !",
        html: `
          Votre demande pour le <strong>${form.date.split("-").reverse().join("/")}</strong> a été reçue.<br/>
          Nous reviendrons vers vous très vite.
        `,
        confirmButtonColor: "#ec4899",
      });

      // Reset formulaire si besoin
      setForm({
        name: "",
        phone: "",
        date: todayISO,
        type: "",
        message: "",
      });
    }, 2000); // simule 2 secondes d'envoi
  };

  // Soumission via WhatsApp
  const handleWhatsApp = () => {
    if (!form.name || !form.phone || !form.date || !form.type) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Veuillez remplir tous les champs obligatoires avant d'envoyer via WhatsApp.",
      });
      return;
    }

    const phoneNumber = "+2290159522706";
    const dateFR = form.date.split("-").reverse().join("/");
    const message = `Bonjour SweetDay !\n\nJ'aimerais commander un gâteau :\n- Nom : ${form.name}\n- Téléphone : ${form.phone}\n- Date de l'anniversaire : ${dateFR}\n- Type de gâteau : ${form.type}\n- Message : ${form.message || "Aucun"}\n\nMerci !`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    Swal.fire({
      icon: "success",
      title: "WhatsApp prêt !",
      text: "Votre message a été préparé pour WhatsApp.",
      confirmButtonColor: "#25D366",
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 text-center">
          Commander
        </h2>
        <p className="text-gray-600 mb-12 text-center">
          Réponse rapide – Devis gratuit
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-8 rounded-2xl shadow-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Nom complet"
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Téléphone"
            value={form.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            required
          />

          <input
            type="date"
            name="date"
            value={form.date}
            min={todayISO}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            required
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none text-gray-700"
            required
          >
            <option value="" disabled>
              Sélectionner un type de gâteau
            </option>
            <option value="Pour enfants">Pour enfants</option>
            <option value="Pour adultes">Pour adultes</option>
            <option value="Personnalisé">Personnalisé</option>
          </select>

          <textarea
            name="message"
            placeholder="Message / Instructions spéciales"
            value={form.message}
            onChange={handleChange}
            className="sm:col-span-2 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            rows={4}
          ></textarea>

          {/* BOUTONS */}
          <div className="sm:col-span-2 flex flex-col sm:flex-row justify-between items-center gap-4">
            <button
              type="submit"
              className="w-full sm:w-auto bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition flex justify-center items-center"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              ) : null}
              {loading ? "Envoi..." : "Envoyer"}
            </button>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="w-full sm:w-auto bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition text-center"
            >
              WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

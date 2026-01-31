import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cakes from "./components/Cakes";
import HowItWorks from "./components/HowItWorks";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <>
      <Navbar />

      <main className="">
        <Hero />
        <Cakes />
        <HowItWorks />
        <WhyUs />
        <Testimonials />
        <Contact />
        {/*<section id="cakes" className="h-screen">Nos Gâteaux</section>
        <section id="how" className="h-screen">Comment ça marche</section>
        <section id="why" className="h-screen">Pourquoi nous</section>
        <section id="testimonials" className="h-screen">Avis</section>
        <section id="contact" className="h-screen">Contact</section> */}
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;

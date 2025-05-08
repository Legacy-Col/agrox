import About from "@/components/About";
import Farmers from "@/components/Farmers";
import Footer from "@/components/Footer";
import HeroSlide from "@/components/Heroslide";
import NavBar from "@/components/Navbar";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <section className="overflow-hidden">
      <div>
        <NavBar />
        <HeroSlide />
        <About />
        <Products />
        <Farmers />
        <Testimonials />
        <Footer />
      </div>
    </section>
  );
}
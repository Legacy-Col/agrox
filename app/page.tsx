import About from "@/components/About";
import Farmers from "@/components/Farmers";
import HeroSlide from "@/components/Heroslide";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <section>
      <div>
        <HeroSlide />
        <About />
        <Products />
        <Farmers />
        <Testimonials />
      </div>
    </section>
  );
}
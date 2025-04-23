import About from "@/components/About";
import Farmers from "@/components/Farmers";
import HeroSlide from "@/components/Heroslide";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <section className="">
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
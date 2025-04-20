import About from "@/components/About";
import HeroSlide from "@/components/Heroslide";
import Products from "@/components/Products";

export default function Home() {
  return (
    <section>
      <div>
        <HeroSlide />
        <About />
        <Products />
      </div>
    </section>
  );
}
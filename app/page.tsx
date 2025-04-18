import About from "@/components/About";
import HeroSlide from "@/components/Heroslide";

export default function Home() {
  return (
    <section>
      <div>
        <HeroSlide />
        <About />
      </div>
    </section>
  );
}
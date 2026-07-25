import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Academics from "@/components/Academics";
import Gallery from "@/components/Gallery";
import AmbientBackground from "@/components/AmbientBackground";

export default function Home() {
  return (
    <div className="relative">
      <AmbientBackground />
      <Hero />
      <About />
      <WhyChooseUs />
      <Academics />
      <Gallery />
    </div>
  );
}

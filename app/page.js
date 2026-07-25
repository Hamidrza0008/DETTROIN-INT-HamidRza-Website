import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import AmbientBackground from "@/components/AmbientBackground";

export default function Home() {
  return (
    <div className="relative">
      <AmbientBackground />
      <Hero />
      <About />
      <WhyChooseUs />
    </div>
  );
}

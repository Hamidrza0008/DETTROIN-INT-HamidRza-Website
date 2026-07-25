import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Academics from "@/components/Academics";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import AdmissionProcess from "@/components/AdmissionProcess";
import Contact from "@/components/Contact";
import AmbientBackground from "@/components/AmbientBackground";
import StringDivider from "@/components/StringDivider";

export default function Home() {
  return (
    <div className="relative">
      <AmbientBackground />
      <Hero />
      <StringDivider />
      <About />
      <StringDivider />
      <WhyChooseUs />
      <StringDivider />
      <Academics />
      <StringDivider />
      <Gallery />
      <StringDivider />
      <Testimonials />
      <StringDivider />
      <AdmissionProcess />
      <StringDivider />
      <Contact />
    </div>
  );
}

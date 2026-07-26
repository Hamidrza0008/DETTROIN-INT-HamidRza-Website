import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import AmbientBackground from "@/components/AmbientBackground";
import StringDivider from "@/components/StringDivider";

const About = dynamic(() => import("@/components/About"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const Academics = dynamic(() => import("@/components/Academics"));
const Gallery = dynamic(() => import("@/components/Gallery"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const AdmissionProcess = dynamic(() => import("@/components/AdmissionProcess"));
const Contact = dynamic(() => import("@/components/Contact"));

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

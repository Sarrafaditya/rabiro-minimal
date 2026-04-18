import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import Certifications from "@/components/sections/Certifications";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <WhyChooseUs />
      <Services />
      <Stats />
      <Projects />
      <Testimonials />
      <Process />
      <Certifications />
      <CTA />
    </>
  );
}

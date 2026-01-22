import { Hero } from "@/components/sections/Hero";
import { AboutFpN } from "@/components/sections/AboutFpN";
import { Stats } from "@/components/sections/Stats";
import { Workshops } from "@/components/sections/Workshops";
import { VideoSection } from "@/components/sections/VideoSection";
import { FAQ } from "@/components/sections/FAQ";
import { ContactForm } from "@/components/sections/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutFpN />
      <Stats />
      <Workshops />
      <VideoSection />
      <FAQ />
      <ContactForm />
    </>
  );
}

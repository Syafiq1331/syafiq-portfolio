import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProfileSection from "../components/ProfileSection";
import SectionProjects from "../components/SectionProjects";
import SectionSkill from "../components/SectionSkill"

export default function Home() {
  return (
    <>
      <Hero />
      <ProfileSection />
      <SectionSkill />
      <SectionProjects />
      <ContactSection />
      <Footer />
    </>
  )
}

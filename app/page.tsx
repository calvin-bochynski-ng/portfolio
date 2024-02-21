import AboutPage from "@/components/aboutPage";
import ProjectsPage from "@/components/projectPage";
import SkillsPage from "@/components/skillsPage";
import ExperiencePage from "@/components/experiencePage";
import ContactPage from "@/components/contactPage";
import Footer from "@/components/footer";
import HomePage from "@/components/homePage";

export default function Home() {
  return (
    <>
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <SkillsPage />
      <ExperiencePage />
      <ContactPage />
      <Footer />
    </>
  );
}

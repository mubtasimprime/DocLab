import AboutBanner from "@/components/client/about/AboutBanner";
import AboutSection from "@/components/client/about/AboutSection";
import AboutAchievements from "@/components/client/about/AboutAchievements";
import AboutSpecialist from "@/components/client/about/AboutSpecialist";

export default function About() {
  return (
    <main>
      <AboutBanner title="About Us" subtitle="About Us" />
      <AboutSection />
      <AboutAchievements />
      <AboutSpecialist />
    </main>
  );
}

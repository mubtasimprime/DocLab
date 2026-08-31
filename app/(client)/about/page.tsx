
import AboutBanner from "@/components/client/about/AboutBanner";
import AboutSection from "@/components/client/about/AboutSection";
import AboutAchievements from "@/components/client/about/AboutAchievements";

export default function About() {
  return (
    <main>
      <AboutBanner title="About Us" subtitle="About Us" />
      <AboutSection />
      <AboutAchievements />
    </main>
  );
}
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import SolutionsSection from "@/components/SolutionsSection";
import StandardsSection from "@/components/StandardsSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-white">
      <Navbar />
      <HeroSection />
      <ProcessSection />
      <SolutionsSection />
      <StandardsSection />
      <LeadCaptureSection />
      <FooterSection />
    </main>
  );
}

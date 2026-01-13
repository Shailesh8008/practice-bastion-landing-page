import { Hero } from "../components/Hero";
import { NewsletterSection } from "../components/NewsletterSection";
import { ScheduleSection } from "../components/ScheduleSection";
import { ReadingTopics } from "../components/ReadingTopics";
import { SectorInsights } from "../components/SectorInsights";
import { Testimonials } from "../components/Testimonials";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <NewsletterSection />
      <ScheduleSection />
      <ReadingTopics />
      <SectorInsights />
      <Testimonials />
      <Footer />
    </div>
  );
}

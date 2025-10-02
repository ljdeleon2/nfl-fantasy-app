import { HeroSection } from "@/components/hero-section"
import { DraftInterface } from "@/components/draft-interface"
import { PowerRankings } from "@/components/power-rankings"
import { LatestNews } from "@/components/latest-news"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <DraftInterface />
      <PowerRankings />
      <LatestNews />
    </div>
  )
}

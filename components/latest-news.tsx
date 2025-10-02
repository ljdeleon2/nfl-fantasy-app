"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink } from "lucide-react"

const newsItems = [
  {
    id: 1,
    image: "/nfl-lions-player-running-with-football-in-blue-jer.jpg",
    title: "Dan Quinn: Marshon Lattimore trade adds 'real dog-ass competitor' to Commanders' CB group",
    date: "Nov 06, 2024",
    category: "Trades",
    url: "https://www.nfl.com/news/commanders-marshon-lattimore-trade-analysis",
  },
  {
    id: 2,
    image: "/nfl-browns-gm-andrew-berry-at-press-conference-spe.jpg",
    title: "Browns GM Andrew Berry says team will deal with Deshaun Watson situation 'at a later moment'",
    date: "Nov 06, 2024",
    category: "Team News",
    url: "https://www.nfl.com/news/browns-deshaun-watson-injury-update",
  },
  {
    id: 3,
    image: "/nfl-injury-report.jpg",
    title: "Week 10 injury report for 2024 NFL season",
    date: "Nov 06, 2024",
    category: "Injuries",
    url: "https://www.nfl.com/news/injury-report-week-10",
  },
  {
    id: 4,
    image: "/nfl-league-updates.jpg",
    title: "NFL news roundup: Latest league updates from Wednesday, Nov. 6",
    date: "Nov 06, 2024",
    category: "League News",
    url: "https://www.nfl.com/news/daily-roundup",
  },
]

export function LatestNews() {
  return (
    <section className="py-12 lg:py-16 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <p className="text-xs lg:text-sm font-bold text-white/50 uppercase tracking-widest mb-2">Stay Updated</p>
          <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight">LATEST NEWS</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 max-w-7xl mx-auto">
          {newsItems.map((item, index) => (
            <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="block">
              <Card
                className="group overflow-hidden bg-gradient-to-br from-gray-900 to-black border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.03] cursor-pointer h-full"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  <Badge className="absolute top-3 left-3 bg-white/90 text-black border-0 font-bold px-3 py-1 text-xs">
                    {item.category}
                  </Badge>

                  <div className="absolute top-3 right-3 w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-3 h-3 text-white" />
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-sm lg:text-base font-bold text-white mb-3 line-clamp-3 group-hover:text-white/80 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-white/50">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

const liveHighlights = [
  {
    id: 1,
    player: "Caleb Williams",
    image: "/caleb-williams-chicago-bears-quarterback-throwing.jpg",
    play: "30-yard passing touchdown to DJ Moore",
    points: 5.2,
    team: "Bears",
    quarter: "Q3 8:42",
    details:
      "Williams drops back, evades pressure, and delivers a perfect strike to Moore in the end zone. Completion probability: 42.3%",
    maxSpeed: "18.2 mph",
    timeToThrow: "2.8s",
    videoPlaceholder:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1ndEHdytvX6cVEFsZvepqtPq4rh6aV.png",
  },
  {
    id: 2,
    player: "Saquon Barkley",
    image: "/saquon-barkley-eagles-running-back-action.jpg",
    play: "19-yard rushing touchdown",
    points: 7.9,
    team: "Eagles",
    quarter: "Q2 3:15",
    details: "Barkley breaks through the line, reaches top speed of 21.4 mph, and outruns defenders to the end zone.",
    maxSpeed: "21.4 mph",
    rushYardsOverExpected: "+8.3 yards",
    videoPlaceholder:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5ik0BEXK2wWeFuv2MoFUOLT8KvNDjD.png",
  },
  {
    id: 3,
    player: "Kyren Williams",
    image: "/kyren-williams-rams-running-back.jpg",
    play: "5-yard receiving touchdown",
    points: 7.5,
    team: "Rams",
    quarter: "Q4 11:23",
    details:
      "Williams catches a screen pass and powers through two defenders for the score. Yards after catch: 12 yards.",
    maxSpeed: "19.8 mph",
    yardsAfterCatch: "12 yards",
    videoPlaceholder:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1ndEHdytvX6cVEFsZvepqtPq4rh6aV.png",
  },
  {
    id: 4,
    player: "Ja'Marr Chase",
    image: "/ja-marr-chase-bengals-wide-receiver.jpg",
    play: "45-yard reception",
    points: 4.5,
    team: "Bengals",
    quarter: "Q1 5:47",
    details: "Chase beats press coverage, creates 3.2 yards of separation, and hauls in a deep ball from Burrow.",
    maxSpeed: "22.1 mph",
    separation: "3.2 yards",
    videoPlaceholder:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5ik0BEXK2wWeFuv2MoFUOLT8KvNDjD.png",
  },
]

const gameCharts = [
  {
    id: 1,
    player: "Caleb Williams",
    image: "/caleb-williams-chicago-bears-quarterback-throwing.jpg",
    position: "QB",
    stat1: "Passing Yards: 243",
    stat2: "Completion Rate: 67%",
    stat3: "Avg. Time to Throw: 2.6s",
    stat4: "Completion % Over Expected: +8.2%",
    chartType: "PASS CHART",
    chartDescription: "Pass locations and completion rates by field zone",
    chartImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n32RJfNwLAkFToFGmD9rCAvf0NZ8eL.png",
  },
  {
    id: 2,
    player: "Saquon Barkley",
    image: "/saquon-barkley-eagles-running-back-action.jpg",
    position: "RB",
    stat1: "Rushing Yards: 105",
    stat2: "Touchdowns: 2",
    stat3: "Rush Yards Over Expected: +32",
    stat4: "Max Speed: 21.4 mph",
    chartType: "CARRY CHART",
    chartDescription: "Rush attempts and yards gained by direction",
    chartImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bslgDIqKQ0zIRpwjpJYDRCKjYD8SR3.png",
  },
  {
    id: 3,
    player: "Kyren Williams",
    image: "/kyren-williams-rams-running-back.jpg",
    position: "RB",
    stat1: "Rushing Yards: 89",
    stat2: "Receiving Yards: 34",
    stat3: "Total Touches: 18",
    stat4: "Yards After Contact: 47",
    chartType: "CARRY CHART",
    chartDescription: "Rush attempts and receiving routes",
    chartImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4WGAJY3zaTBzG90o9gCB07fq5ufrHM.png",
  },
  {
    id: 4,
    player: "Ja'Marr Chase",
    image: "/ja-marr-chase-bengals-wide-receiver.jpg",
    position: "WR",
    stat1: "Receiving Yards: 125",
    stat2: "Receptions: 8",
    stat3: "Avg. Separation: 2.8 yards",
    stat4: "Catch Rate: 88.9%",
    chartType: "ROUTE CHART",
    chartDescription: "Routes run and target locations",
    chartImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n32RJfNwLAkFToFGmD9rCAvf0NZ8eL.png",
  },
]

export default function NextGenPage() {
  const [activeTab, setActiveTab] = useState<"highlights" | "charts">("highlights")
  const [selectedPlay, setSelectedPlay] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-24 pb-16">
        {/* Header */}
        <div className="bg-white py-6 px-8 rounded-lg mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://static.www.nfl.com/image/upload/v1554321393/league/nvfr7ogywskqrfaiu38m.svg"
              alt="NFL Logo"
              className="w-12 h-12"
            />
            <div>
              <h1 className="text-3xl font-black text-gray-800">
                <span className="text-yellow-500">NEXT GEN</span> STATS
              </h1>
            </div>
          </div>
          <div className="text-gray-600 text-sm">
            powered by <span className="font-bold">aws</span>
          </div>
        </div>

        <div className="sticky top-16 lg:top-20 z-40 bg-black/95 backdrop-blur-xl py-4 -mx-4 px-4 lg:-mx-8 lg:px-8 mb-8 border-b border-white/10">
          <div className="flex gap-4 max-w-7xl mx-auto justify-center">
            <Button
              onClick={() => setActiveTab("highlights")}
              className={`px-8 py-3 font-bold text-lg transition-all ${
                activeTab === "highlights"
                  ? "bg-yellow-500 text-black hover:bg-yellow-600"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              Live Highlights
            </Button>
            <Button
              onClick={() => setActiveTab("charts")}
              className={`px-8 py-3 font-bold text-lg transition-all ${
                activeTab === "charts"
                  ? "bg-yellow-500 text-black hover:bg-yellow-600"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              Game Charts
            </Button>
          </div>
        </div>

        <div className={activeTab === "charts" ? "lg:grid lg:grid-cols-3 lg:gap-8" : ""}>
          {/* Main content area */}
          <div className={activeTab === "charts" ? "lg:col-span-2 space-y-6" : "space-y-6"}>
            {activeTab === "highlights" &&
              liveHighlights.map((highlight) => (
                <div
                  key={highlight.id}
                  onClick={() => setSelectedPlay(selectedPlay === highlight.id ? null : highlight.id)}
                  className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all cursor-pointer border-2 border-transparent hover:border-yellow-500"
                >
                  <div className="flex flex-col lg:flex-row items-start gap-6">
                    <div className="flex items-center gap-4 flex-1">
                      <img
                        src={highlight.image || "/placeholder.svg"}
                        alt={highlight.player}
                        className="w-24 h-24 rounded-full object-cover border-4 border-gray-700"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-black text-yellow-500">{highlight.player}</h3>
                          <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                            {highlight.team.toUpperCase()}
                          </span>
                          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs font-bold">
                            {highlight.quarter}
                          </span>
                        </div>
                        <p className="text-white text-lg font-semibold mb-1">{highlight.play}</p>
                        <p className="text-yellow-400 font-bold text-xl mb-2">+{highlight.points} Points</p>
                        <p className="text-gray-400 text-sm">{highlight.details}</p>

                        {selectedPlay === highlight.id && (
                          <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-yellow-500/30">
                            <h4 className="text-yellow-400 font-bold mb-2">Next Gen Stats</h4>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                              {highlight.maxSpeed && (
                                <div>
                                  <span className="text-gray-400">Max Speed:</span>
                                  <span className="text-white font-bold ml-2">{highlight.maxSpeed}</span>
                                </div>
                              )}
                              {highlight.timeToThrow && (
                                <div>
                                  <span className="text-gray-400">Time to Throw:</span>
                                  <span className="text-white font-bold ml-2">{highlight.timeToThrow}</span>
                                </div>
                              )}
                              {highlight.rushYardsOverExpected && (
                                <div>
                                  <span className="text-gray-400">Rush Yards Over Expected:</span>
                                  <span className="text-white font-bold ml-2">{highlight.rushYardsOverExpected}</span>
                                </div>
                              )}
                              {highlight.yardsAfterCatch && (
                                <div>
                                  <span className="text-gray-400">Yards After Catch:</span>
                                  <span className="text-white font-bold ml-2">{highlight.yardsAfterCatch}</span>
                                </div>
                              )}
                              {highlight.separation && (
                                <div>
                                  <span className="text-gray-400">Separation:</span>
                                  <span className="text-white font-bold ml-2">{highlight.separation}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="relative w-full lg:w-80 h-48 bg-gradient-to-br from-yellow-900/20 to-gray-900 rounded-lg overflow-hidden group flex items-center justify-center border-2 border-gray-700">
                      {selectedPlay === highlight.id ? (
                        <img
                          src={highlight.videoPlaceholder || "/placeholder.svg"}
                          alt={`${highlight.player} highlight`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <div className="text-center">
                          <Play className="w-16 h-16 text-yellow-500 mx-auto mb-2" />
                          <p className="text-gray-400 text-sm">Click to view play video</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

            {activeTab === "charts" &&
              gameCharts.map((chart) => (
                <div
                  key={chart.id}
                  onClick={() => setSelectedPlay(selectedPlay === chart.id ? null : chart.id)}
                  className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all cursor-pointer border-2 border-transparent hover:border-yellow-500"
                >
                  <div className="flex flex-col lg:flex-row items-start gap-6">
                    <div className="flex items-center gap-4 flex-1">
                      <img
                        src={chart.image || "/placeholder.svg"}
                        alt={chart.player}
                        className="w-24 h-24 rounded-full object-cover border-4 border-gray-700"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-black text-yellow-500">{chart.player}</h3>
                          <span className="bg-yellow-600 text-black px-2 py-1 rounded text-xs font-bold">
                            {chart.position}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <p className="text-white">{chart.stat1}</p>
                          <p className="text-white">{chart.stat2}</p>
                          <p className="text-gray-400">{chart.stat3}</p>
                          <p className="text-gray-400">{chart.stat4}</p>
                        </div>

                        {selectedPlay === chart.id && (
                          <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-yellow-500/30">
                            <h4 className="text-yellow-400 font-bold mb-2">{chart.chartType}</h4>
                            <p className="text-gray-400 text-sm mb-3">{chart.chartDescription}</p>
                            <div className="relative w-full aspect-square bg-black rounded overflow-hidden">
                              <img
                                src={chart.chartImage || "/placeholder.svg"}
                                alt={`${chart.player} ${chart.chartType}`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {activeTab === "charts" && (
            <div className="hidden lg:block">
              <div className="sticky top-32 bg-gray-900 rounded-lg p-6 border-2 border-yellow-500/30">
                <h3 className="text-xl font-black text-yellow-500 mb-4">Live Highlights</h3>
                <div className="space-y-4">
                  {liveHighlights.map((highlight) => (
                    <div key={highlight.id} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <img
                          src={highlight.image || "/placeholder.svg"}
                          alt={highlight.player}
                          className="w-12 h-12 rounded-full object-cover border-2 border-gray-700"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-yellow-400 truncate">{highlight.player}</h4>
                          <p className="text-xs text-gray-400">
                            {highlight.team} • {highlight.quarter}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-white mb-1">{highlight.play}</p>
                      <p className="text-sm text-yellow-400 font-bold">+{highlight.points} Points</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

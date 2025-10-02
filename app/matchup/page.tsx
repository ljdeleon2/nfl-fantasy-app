"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Swords, ChevronDown, ChevronUp } from "lucide-react"

export default function MatchupPage() {
  const [showYourRoster, setShowYourRoster] = useState(false)
  const [showOpponentRoster, setShowOpponentRoster] = useState(false)

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="container mx-auto px-4 lg:px-8 pt-24 lg:pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Swords className="w-8 h-8 text-white" />
              <h1 className="text-4xl lg:text-6xl font-black text-white">MATCHUP</h1>
            </div>
            <p className="text-lg text-white/60">Week 10 • Sunday, Nov 10</p>
          </div>

          {/* Matchup Card */}
          <Card className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-white/10 p-8 lg:p-12 mb-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Your Team */}
              <div className="text-center">
                <Badge className="bg-green-500 text-white mb-4">YOU</Badge>
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-2">The Champs</h2>
                <p className="text-5xl lg:text-6xl font-black text-white mb-2">123.6</p>
                <p className="text-white/60">Projected: 145.2</p>
              </div>

              {/* VS */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl font-black text-white">VS</span>
                </div>
                <p className="text-sm text-white/60">In Progress</p>
              </div>

              {/* Opponent */}
              <div className="text-center">
                <Badge className="bg-red-500 text-white mb-4">OPPONENT</Badge>
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-2">Grid Warriors</h2>
                <p className="text-5xl lg:text-6xl font-black text-white mb-2">118.4</p>
                <p className="text-white/60">Projected: 138.8</p>
              </div>
            </div>
          </Card>

          {/* Player Comparison */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="bg-gradient-to-br from-green-900/20 to-black border-green-500/20 p-6">
              <div
                className="flex items-center justify-between cursor-pointer mb-4"
                onClick={() => setShowYourRoster(!showYourRoster)}
              >
                <h3 className="text-xl font-black text-white">YOUR TOP PERFORMERS</h3>
                {showYourRoster ? (
                  <ChevronUp className="w-5 h-5 text-white" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-white" />
                )}
              </div>
              <div className="space-y-3">
                {["Caleb Williams - 24.5 pts", "Saquon Barkley - 22.8 pts", "Ja'Marr Chase - 19.2 pts"].map(
                  (player) => (
                    <div key={player} className="flex items-center justify-between text-white/80">
                      <span>{player.split(" - ")[0]}</span>
                      <span className="font-bold">{player.split(" - ")[1]}</span>
                    </div>
                  ),
                )}
              </div>
              {showYourRoster && (
                <div className="mt-4 pt-4 border-t border-green-500/20 space-y-2">
                  <p className="text-sm text-white/60">Full Roster:</p>
                  {["Kyren Williams - 17.2 pts", "George Pickens - 14.1 pts", "Travis Kelce - 12.4 pts"].map(
                    (player) => (
                      <div key={player} className="flex items-center justify-between text-white/60 text-sm">
                        <span>{player.split(" - ")[0]}</span>
                        <span className="font-bold">{player.split(" - ")[1]}</span>
                      </div>
                    ),
                  )}
                </div>
              )}
            </Card>

            <Card className="bg-gradient-to-br from-red-900/20 to-black border-red-500/20 p-6">
              <div
                className="flex items-center justify-between cursor-pointer mb-4"
                onClick={() => setShowOpponentRoster(!showOpponentRoster)}
              >
                <h3 className="text-xl font-black text-white">OPPONENT TOP PERFORMERS</h3>
                {showOpponentRoster ? (
                  <ChevronUp className="w-5 h-5 text-white" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-white" />
                )}
              </div>
              <div className="space-y-3">
                {["Josh Allen - 23.1 pts", "Derrick Henry - 21.4 pts", "CeeDee Lamb - 18.9 pts"].map((player) => (
                  <div key={player} className="flex items-center justify-between text-white/80">
                    <span>{player.split(" - ")[0]}</span>
                    <span className="font-bold">{player.split(" - ")[1]}</span>
                  </div>
                ))}
              </div>
              {showOpponentRoster && (
                <div className="mt-4 pt-4 border-t border-red-500/20 space-y-2">
                  <p className="text-sm text-white/60">Full Roster:</p>
                  {["Stefon Diggs - 15.7 pts", "Mark Andrews - 13.2 pts", "Justin Tucker - 9.0 pts"].map((player) => (
                    <div key={player} className="flex items-center justify-between text-white/60 text-sm">
                      <span>{player.split(" - ")[0]}</span>
                      <span className="font-bold">{player.split(" - ")[1]}</span>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

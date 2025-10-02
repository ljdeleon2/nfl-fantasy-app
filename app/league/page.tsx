"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, TrendingUp, TrendingDown, ChevronDown, ChevronUp } from "lucide-react"

const standings = [
  { rank: 1, team: "The Champs", record: "7-2", points: 1234.5, trend: "up", owner: "You" },
  { rank: 2, team: "Grid Warriors", record: "7-2", points: 1198.3, trend: "up", owner: "Mike" },
  { rank: 3, team: "End Zone Elite", record: "6-3", points: 1156.7, trend: "same", owner: "Sarah" },
  { rank: 4, team: "Touchdown Titans", record: "6-3", points: 1142.1, trend: "down", owner: "James" },
  { rank: 5, team: "Blitz Brigade", record: "5-4", points: 1089.4, trend: "up", owner: "Alex" },
  { rank: 6, team: "Field Goal Fanatics", record: "4-5", points: 1034.2, trend: "down", owner: "Chris" },
  { rank: 7, team: "Hail Mary Heroes", record: "3-6", points: 987.6, trend: "down", owner: "Taylor" },
  { rank: 8, team: "Fumble Force", record: "2-7", points: 892.3, trend: "same", owner: "Jordan" },
]

export default function LeaguePage() {
  const [expandedTeam, setExpandedTeam] = useState<number | null>(null)

  const toggleTeam = (rank: number) => {
    setExpandedTeam(expandedTeam === rank ? null : rank)
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="container mx-auto px-4 lg:px-8 pt-24 lg:pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-yellow-500" />
              <h1 className="text-4xl lg:text-6xl font-black text-white">LEAGUE STANDINGS</h1>
            </div>
            <p className="text-lg text-white/60">Fantasy Fever League • Week 10</p>
          </div>

          {/* Standings Table */}
          <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-white/60 font-bold text-sm">RANK</th>
                    <th className="text-left p-4 text-white/60 font-bold text-sm">TEAM</th>
                    <th className="text-center p-4 text-white/60 font-bold text-sm">RECORD</th>
                    <th className="text-right p-4 text-white/60 font-bold text-sm">POINTS</th>
                    <th className="text-center p-4 text-white/60 font-bold text-sm">TREND</th>
                    <th className="text-center p-4 text-white/60 font-bold text-sm"></th>
                  </tr>
                </thead>
                <tbody>
                  {standings.map((team) => (
                    <>
                      <tr
                        key={team.rank}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer"
                        onClick={() => toggleTeam(team.rank)}
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            {team.rank === 1 && <Trophy className="w-5 h-5 text-yellow-500" />}
                            <span className="text-2xl font-black text-white">{team.rank}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white">{team.team}</span>
                            {team.owner === "You" && <Badge className="bg-green-500 text-white text-xs">YOU</Badge>}
                          </div>
                          <p className="text-sm text-white/60">Owner: {team.owner}</p>
                        </td>
                        <td className="p-4 text-center">
                          <span className="font-bold text-white">{team.record}</span>
                        </td>
                        <td className="p-4 text-right">
                          <span className="font-bold text-white">{team.points.toFixed(1)}</span>
                        </td>
                        <td className="p-4 text-center">
                          {team.trend === "up" && <TrendingUp className="w-5 h-5 text-green-500 mx-auto" />}
                          {team.trend === "down" && <TrendingDown className="w-5 h-5 text-red-500 mx-auto" />}
                          {team.trend === "same" && <span className="text-white/40">—</span>}
                        </td>
                        <td className="p-4 text-center">
                          {expandedTeam === team.rank ? (
                            <ChevronUp className="w-5 h-5 text-white/60 mx-auto" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-white/60 mx-auto" />
                          )}
                        </td>
                      </tr>
                      {expandedTeam === team.rank && (
                        <tr className="bg-white/5">
                          <td colSpan={6} className="p-4">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              <div>
                                <p className="text-xs text-white/60 mb-1">Points For</p>
                                <p className="text-lg font-bold text-white">{team.points.toFixed(1)}</p>
                              </div>
                              <div>
                                <p className="text-xs text-white/60 mb-1">Points Against</p>
                                <p className="text-lg font-bold text-white">{(team.points * 0.92).toFixed(1)}</p>
                              </div>
                              <div>
                                <p className="text-xs text-white/60 mb-1">Avg Points/Week</p>
                                <p className="text-lg font-bold text-white">{(team.points / 9).toFixed(1)}</p>
                              </div>
                              <div>
                                <p className="text-xs text-white/60 mb-1">Streak</p>
                                <p className="text-lg font-bold text-green-400">W3</p>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

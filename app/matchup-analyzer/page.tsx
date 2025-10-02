"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, TrendingUp, TrendingDown, Minus, Target, Shield } from "lucide-react"

const availablePlayers = [
  {
    id: "caleb-williams",
    name: "Caleb Williams",
    position: "QB",
    team: "CHI",
    opponent: "SEA",
    projected: 23.7,
    image: "/caleb-williams-chicago-bears-quarterback-throwing.jpg",
    defenseRank: 19,
    recentAvg: 15.8,
    trend: "up",
  },
  {
    id: "saquon-barkley",
    name: "Saquon Barkley",
    position: "RB",
    team: "PHI",
    opponent: "CIN",
    projected: 18.6,
    image: "/saquon-barkley-eagles-running-back-action.jpg",
    defenseRank: 15,
    recentAvg: 19.2,
    trend: "up",
  },
  {
    id: "kyren-williams",
    name: "Kyren Williams",
    position: "RB",
    team: "LAR",
    opponent: "MIN",
    projected: 17.2,
    image: "/kyren-williams-rams-running-back.jpg",
    defenseRank: 8,
    recentAvg: 15.4,
    trend: "down",
  },
  {
    id: "jamarr-chase",
    name: "Ja'Marr Chase",
    position: "WR",
    team: "CIN",
    opponent: "PHI",
    projected: 17.8,
    image: "/ja-marr-chase-bengals-wide-receiver.jpg",
    defenseRank: 23,
    recentAvg: 16.8,
    trend: "up",
  },
  {
    id: "george-pickens",
    name: "George Pickens",
    position: "WR",
    team: "PIT",
    opponent: "NYG",
    projected: 14.1,
    image: "/george-pickens-steelers-wide-receiver.jpg",
    defenseRank: 14,
    recentAvg: 10.9,
    trend: "up",
  },
  {
    id: "travis-kelce",
    name: "Travis Kelce",
    position: "TE",
    team: "KC",
    opponent: "TB",
    projected: 12.4,
    image: "/travis-kelce-chiefs-tight-end.jpg",
    defenseRank: 12,
    recentAvg: 11.8,
    trend: "neutral",
  },
  {
    id: "jordan-mason",
    name: "Jordan Mason",
    position: "RB",
    team: "SF",
    opponent: "DAL",
    projected: 16.0,
    image: "/jordan-mason-49ers-running-back.jpg",
    defenseRank: 29,
    recentAvg: 15.9,
    trend: "up",
  },
  {
    id: "dak-prescott",
    name: "Dak Prescott",
    position: "QB",
    team: "DAL",
    opponent: "SF",
    projected: 19.2,
    image: "/dak-prescott.jpg",
    defenseRank: 10,
    recentAvg: 18.5,
    trend: "neutral",
  },
  {
    id: "jonathan-taylor",
    name: "Jonathan Taylor",
    position: "RB",
    team: "IND",
    opponent: "BUF",
    projected: 17.1,
    image: "/jonathan-taylor-colts-running-back.jpg",
    defenseRank: 5,
    recentAvg: 16.8,
    trend: "down",
  },
  {
    id: "davante-adams",
    name: "Davante Adams",
    position: "WR",
    team: "NYJ",
    opponent: "ARI",
    projected: 17.2,
    image: "/davante-adams-jets-wide-receiver.jpg",
    defenseRank: 28,
    recentAvg: 15.4,
    trend: "up",
  },
]

export default function MatchupAnalyzerPage() {
  const [player1, setPlayer1] = useState<any>(null)
  const [player2, setPlayer2] = useState<any>(null)
  const [selectedPosition, setSelectedPosition] = useState<string>("ALL")

  const positions = ["ALL", "QB", "RB", "WR", "TE"]

  const filteredPlayers =
    selectedPosition === "ALL" ? availablePlayers : availablePlayers.filter((p) => p.position === selectedPosition)

  const getMatchupRating = (defenseRank: number) => {
    if (defenseRank >= 25) return { label: "Excellent", color: "text-green-400", bg: "bg-green-500/20" }
    if (defenseRank >= 17) return { label: "Good", color: "text-blue-400", bg: "bg-blue-500/20" }
    if (defenseRank >= 9) return { label: "Average", color: "text-yellow-400", bg: "bg-yellow-500/20" }
    return { label: "Tough", color: "text-red-400", bg: "bg-red-500/20" }
  }

  const getTrendIcon = (trend: string) => {
    if (trend === "up") return <TrendingUp className="w-5 h-5 text-green-400" />
    if (trend === "down") return <TrendingDown className="w-5 h-5 text-red-400" />
    return <Minus className="w-5 h-5 text-gray-400" />
  }

  const getRecommendation = () => {
    if (!player1 || !player2) return null

    const p1Score = player1.projected + (player1.defenseRank - 15) * 0.2 + (player1.recentAvg - player1.projected)
    const p2Score = player2.projected + (player2.defenseRank - 15) * 0.2 + (player2.recentAvg - player2.projected)

    if (Math.abs(p1Score - p2Score) < 1) {
      return {
        winner: null,
        message: "This is a close matchup! Both players have similar upside this week.",
        confidence: "Low",
      }
    }

    const winner = p1Score > p2Score ? player1 : player2
    const loser = p1Score > p2Score ? player2 : player1
    const diff = Math.abs(p1Score - p2Score)

    return {
      winner,
      loser,
      message: `${winner.name} has the edge with a better matchup and recent performance.`,
      confidence: diff > 3 ? "High" : diff > 1.5 ? "Medium" : "Low",
    }
  }

  const recommendation = getRecommendation()

  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="mb-8">
          <h1 className="text-5xl font-black text-yellow-400 mb-2">Matchup Analyzer</h1>
          <p className="text-gray-400 text-lg">Compare players and make smarter start/sit decisions</p>
        </div>

        {/* Position Filter */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {positions.map((pos) => (
            <Button
              key={pos}
              onClick={() => setSelectedPosition(pos)}
              variant={selectedPosition === pos ? "default" : "outline"}
              className={
                selectedPosition === pos
                  ? "bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
                  : "border-gray-600 text-gray-300 hover:bg-gray-800"
              }
            >
              {pos}
            </Button>
          ))}
        </div>

        {/* Player Selection Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Player 1 Selection */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-yellow-400">Player 1</CardTitle>
            </CardHeader>
            <CardContent>
              {player1 ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={player1.image || "/placeholder.svg"}
                      alt={player1.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{player1.name}</h3>
                      <p className="text-gray-400">
                        {player1.position} - {player1.team}
                      </p>
                      <p className="text-sm text-gray-500">vs {player1.opponent}</p>
                    </div>
                    <Button
                      onClick={() => setPlayer1(null)}
                      variant="ghost"
                      className="text-red-400 hover:text-red-300"
                    >
                      Remove
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-900 rounded-lg p-3">
                      <p className="text-xs text-gray-400 mb-1">Projected</p>
                      <p className="text-2xl font-bold text-green-400">{player1.projected}</p>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-3">
                      <p className="text-xs text-gray-400 mb-1">Recent Avg</p>
                      <p className="text-2xl font-bold text-blue-400">{player1.recentAvg}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-gray-900 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-gray-400" />
                      <span className="text-sm text-gray-400">Matchup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-bold ${getMatchupRating(player1.defenseRank).color}`}>
                        {getMatchupRating(player1.defenseRank).label}
                      </span>
                      <span className="text-xs text-gray-500">(#{player1.defenseRank})</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-gray-900 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-gray-400" />
                      <span className="text-sm text-gray-400">Trend</span>
                    </div>
                    {getTrendIcon(player1.trend)}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-400 mb-4">Select a player to analyze</p>
                  <div className="grid grid-cols-2 gap-2 max-h-96 overflow-y-auto">
                    {filteredPlayers.map((player) => (
                      <button
                        key={player.id}
                        onClick={() => setPlayer1(player)}
                        disabled={player2?.id === player.id}
                        className="bg-gray-900 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg p-2 text-left transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <img
                            src={player.image || "/placeholder.svg"}
                            alt={player.name}
                            className="w-12 h-12 rounded object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-white truncate">{player.name}</p>
                            <p className="text-xs text-gray-400">
                              {player.position} - {player.team}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Player 2 Selection */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-cyan-400">Player 2</CardTitle>
            </CardHeader>
            <CardContent>
              {player2 ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={player2.image || "/placeholder.svg"}
                      alt={player2.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{player2.name}</h3>
                      <p className="text-gray-400">
                        {player2.position} - {player2.team}
                      </p>
                      <p className="text-sm text-gray-500">vs {player2.opponent}</p>
                    </div>
                    <Button
                      onClick={() => setPlayer2(null)}
                      variant="ghost"
                      className="text-red-400 hover:text-red-300"
                    >
                      Remove
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-900 rounded-lg p-3">
                      <p className="text-xs text-gray-400 mb-1">Projected</p>
                      <p className="text-2xl font-bold text-green-400">{player2.projected}</p>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-3">
                      <p className="text-xs text-gray-400 mb-1">Recent Avg</p>
                      <p className="text-2xl font-bold text-blue-400">{player2.recentAvg}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-gray-900 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-gray-400" />
                      <span className="text-sm text-gray-400">Matchup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-bold ${getMatchupRating(player2.defenseRank).color}`}>
                        {getMatchupRating(player2.defenseRank).label}
                      </span>
                      <span className="text-xs text-gray-500">(#{player2.defenseRank})</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-gray-900 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-gray-400" />
                      <span className="text-sm text-gray-400">Trend</span>
                    </div>
                    {getTrendIcon(player2.trend)}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-400 mb-4">Select a player to analyze</p>
                  <div className="grid grid-cols-2 gap-2 max-h-96 overflow-y-auto">
                    {filteredPlayers.map((player) => (
                      <button
                        key={player.id}
                        onClick={() => setPlayer2(player)}
                        disabled={player1?.id === player.id}
                        className="bg-gray-900 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg p-2 text-left transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <img
                            src={player.image || "/placeholder.svg"}
                            alt={player.name}
                            className="w-12 h-12 rounded object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-white truncate">{player.name}</p>
                            <p className="text-xs text-gray-400">
                              {player.position} - {player.team}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Recommendation */}
        {recommendation && player1 && player2 && (
          <Card className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/30">
            <CardHeader>
              <CardTitle className="text-yellow-400 flex items-center gap-2">
                <Target className="w-6 h-6" />
                Recommendation
              </CardTitle>
            </CardHeader>
            <CardContent>
              {recommendation.winner ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-center opacity-60">
                      <img
                        src={recommendation.loser.image || "/placeholder.svg"}
                        alt={recommendation.loser.name}
                        className="w-24 h-24 rounded-full mx-auto mb-2 border-2 border-gray-600"
                      />
                      <p className="text-sm font-bold text-gray-400">{recommendation.loser.name}</p>
                    </div>

                    <ArrowRight className="w-8 h-8 text-yellow-400" />

                    <div className="text-center">
                      <img
                        src={recommendation.winner.image || "/placeholder.svg"}
                        alt={recommendation.winner.name}
                        className="w-32 h-32 rounded-full mx-auto mb-2 border-4 border-yellow-400 shadow-lg shadow-yellow-400/50"
                      />
                      <p className="text-xl font-bold text-yellow-400">{recommendation.winner.name}</p>
                      <p className="text-sm text-gray-400">Start This Player</p>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-lg p-4 text-center">
                    <p className="text-white mb-2">{recommendation.message}</p>
                    <p className="text-sm text-gray-400">
                      Confidence: <span className="font-bold text-yellow-400">{recommendation.confidence}</span>
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-white text-lg mb-2">{recommendation.message}</p>
                  <p className="text-sm text-gray-400">Consider other factors like injuries and weather.</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

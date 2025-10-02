"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Search, TrendingUp } from "lucide-react"
import { getTopProspects, searchPlayers, type NFLPlayer } from "@/lib/nfl-database"

const tierColors = {
  gold: "from-yellow-500/20 to-yellow-600/20 border-yellow-400",
  green: "from-green-500/20 to-green-600/20 border-green-400",
  blue: "from-blue-500/20 to-blue-600/20 border-blue-400",
  orange: "from-orange-500/20 to-orange-600/20 border-orange-400",
  purple: "from-purple-500/20 to-purple-600/20 border-purple-400",
  red: "from-red-500/20 to-red-600/20 border-red-400",
}

const currentRoster = [
  {
    id: "caleb-williams",
    name: "Caleb Williams",
    position: "QB",
    team: "CHI",
    projected: 23.7,
    stats: { passing: 88, rushing: 65 },
    image: "/caleb-williams-chicago-bears-quarterback-throwing.jpg",
  },
  {
    id: "saquon-barkley",
    name: "Saquon Barkley",
    position: "RB",
    team: "PHI",
    projected: 18.6,
    stats: { rushing: 90, receiving: 75 },
    image: "/saquon-barkley-eagles-running-back-action.jpg",
  },
]

interface DraftInterfaceProps {
  onDraftPlayer?: (player: NFLPlayer) => void
}

export function DraftInterface({ onDraftPlayer }: DraftInterfaceProps) {
  const [showDraft, setShowDraft] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPlayer, setSelectedPlayer] = useState<NFLPlayer | null>(null)
  const [filterPosition, setFilterPosition] = useState<string>("ALL")

  const topProspects = getTopProspects(12)
  const searchResults = searchQuery ? searchPlayers(searchQuery) : []

  const displayPlayers = searchQuery ? searchResults : topProspects

  const handlePlayerClick = (player: NFLPlayer) => {
    setSelectedPlayer(player)
  }

  const handleDraft = (player: NFLPlayer) => {
    if (onDraftPlayer) {
      onDraftPlayer(player)
    }
    setSelectedPlayer(null)
    setShowDraft(false)
  }

  const showComparison = selectedPlayer !== null

  if (!showDraft) {
    return (
      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-black text-yellow-400 mb-4">Build Your Dream Team</h2>
          <p className="text-gray-400 text-lg mb-8">Draft players and compare them with your current roster</p>
          <Button
            onClick={() => setShowDraft(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl px-12 py-6 rounded-lg shadow-2xl shadow-yellow-500/50"
          >
            Start Draft
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-black text-yellow-400 mb-2">Player Draft</h2>
            <p className="text-gray-400">Search and compare players to build your roster</p>
          </div>
          <Button onClick={() => setShowDraft(false)} variant="outline" className="border-yellow-500 text-yellow-400">
            Close Draft
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search players by name, team, or position..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 bg-gray-800 border-gray-700 text-white text-lg py-6"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {["ALL", "QB", "RB", "WR", "TE", "K", "D/ST"].map((pos) => (
              <Button
                key={pos}
                onClick={() => setFilterPosition(pos)}
                variant={filterPosition === pos ? "default" : "outline"}
                className={
                  filterPosition === pos
                    ? "bg-yellow-500 text-black hover:bg-yellow-600"
                    : "border-gray-600 text-gray-400 hover:bg-gray-800"
                }
              >
                {pos}
              </Button>
            ))}
          </div>
        </div>

        {/* Top Prospects Banner */}
        {!searchQuery && (
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg p-4 mb-8">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-yellow-400" />
              <h3 className="text-xl font-bold text-yellow-400">Top Prospects</h3>
            </div>
            <p className="text-gray-400 text-sm">Highest ranked players available for draft</p>
          </div>
        )}

        {/* Player Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-8">
          {displayPlayers
            .filter((p) => filterPosition === "ALL" || p.position === filterPosition)
            .map((player) => (
              <div
                key={player.id}
                onClick={() => handlePlayerClick(player)}
                className={`cursor-pointer bg-gradient-to-b ${
                  tierColors[player.tier]
                } bg-gray-800 rounded-lg border-2 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20`}
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={player.image || "/placeholder.svg"}
                    alt={player.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded text-xs font-bold text-yellow-400">
                    #{player.rank}
                  </div>
                </div>

                <div className="p-3 space-y-1">
                  <h3 className="text-sm font-bold text-white truncate">{player.name}</h3>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">
                      {player.position} - {player.team}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-gray-700">
                    <span className="text-xs text-gray-400">Proj:</span>
                    <span className="text-lg font-bold text-green-400">{player.projected}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Comparison Modal */}
        {showComparison && selectedPlayer && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto border-2 border-yellow-500">
              <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-6 flex items-center justify-between z-10">
                <h2 className="text-2xl font-black text-yellow-500">Player Comparison</h2>
                <Button
                  onClick={() => {
                    setShowDraft(false)
                    setSelectedPlayer(null)
                  }}
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Draft Player (Left) */}
                  <div className="bg-gray-800 rounded-lg p-6 border-2 border-yellow-500">
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={selectedPlayer.image || "/placeholder.svg"}
                        alt={selectedPlayer.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-yellow-500"
                      />
                      <div>
                        <h3 className="text-xl font-black text-white">{selectedPlayer.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                            {selectedPlayer.position}
                          </span>
                          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs font-bold">
                            {selectedPlayer.team}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-400 text-sm">Projected Points</span>
                          <span className="text-yellow-400 font-bold text-lg">{selectedPlayer.projected}</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-yellow-500"
                            style={{ width: `${(selectedPlayer.projected / 25) * 100}%` }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-400 text-sm">ADP</span>
                          <span className="text-white font-bold">{selectedPlayer.adp.toFixed(1)}</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-500"
                            style={{ width: `${Math.max(5, 100 - selectedPlayer.adp * 5)}%` }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-400 text-sm">Position Rank</span>
                          <span className="text-white font-bold">#{selectedPlayer.rank}</span>
                        </div>
                      </div>

                      {selectedPlayer.stats && Object.keys(selectedPlayer.stats).length > 0 && (
                        <div className="pt-4 border-t border-gray-700">
                          <h4 className="text-sm font-bold text-gray-400 mb-3">Stats</h4>
                          <div className="space-y-2">
                            {Object.entries(selectedPlayer.stats).map(([key, value]) => (
                              <div key={key} className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm capitalize">{key}</span>
                                <span className="text-white font-bold">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <Button
                      onClick={() => handleDraft(selectedPlayer)}
                      className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3"
                    >
                      Draft {selectedPlayer.name}
                    </Button>
                  </div>

                  {/* VS Divider */}
                  <div className="flex items-center justify-center">
                    <div className="text-4xl font-black text-yellow-500">VS</div>
                  </div>

                  {/* Current Roster Players (Right) */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-yellow-500 mb-4">Current Roster</h3>
                    {currentRoster.map((rosterPlayer) => (
                      <div key={rosterPlayer.id} className="bg-gray-800 rounded-lg p-4 border-2 border-gray-700">
                        <div className="flex items-center gap-3 mb-4">
                          <img
                            src={rosterPlayer.image || "/placeholder.svg"}
                            alt={rosterPlayer.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-gray-600"
                          />
                          <div>
                            <h4 className="text-lg font-bold text-white">{rosterPlayer.name}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="bg-gray-600 text-white px-2 py-0.5 rounded text-xs font-bold">
                                {rosterPlayer.position}
                              </span>
                              <span className="bg-gray-700 text-white px-2 py-0.5 rounded text-xs font-bold">
                                {rosterPlayer.team}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400 text-sm">Projected</span>
                            <span className="text-green-400 font-bold">{rosterPlayer.projected}</span>
                          </div>
                          {rosterPlayer.stats &&
                            Object.entries(rosterPlayer.stats).map(([key, value]) => (
                              <div key={key} className="flex justify-between items-center">
                                <span className="text-gray-400 text-xs capitalize">{key}</span>
                                <span className="text-white text-sm font-bold">{value}</span>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

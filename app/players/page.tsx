"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, TrendingUp, Star } from "lucide-react"
import { nflPlayerDatabase } from "@/lib/nfl-database"

export default function PlayersPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [showTopProspects, setShowTopProspects] = useState(false)
  const [filterPosition, setFilterPosition] = useState<string>("ALL")

  const allPlayers = nflPlayerDatabase.map((player) => ({
    id: player.id,
    name: player.name,
    position: player.position,
    team: player.team,
    points: player.projected,
    trend: `+${(Math.random() * 3).toFixed(1)}`,
    available: Math.random() > 0.3,
    image: player.image,
    isTopProspect: player.adp < 5,
  }))

  const filteredPlayers = allPlayers.filter((player) => {
    const matchesSearch =
      player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.team.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilter = !showTopProspects || player.isTopProspect
    const matchesPosition = filterPosition === "ALL" || player.position === filterPosition

    return matchesSearch && matchesFilter && matchesPosition
  })

  const handlePlayerClick = (playerId: string) => {
    router.push(`/player/${playerId}`)
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="container mx-auto px-4 lg:px-8 pt-24 lg:pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl lg:text-6xl font-black text-white mb-4">PLAYERS</h1>
            <p className="text-lg text-white/60">Browse and search all NFL fantasy players</p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Search players by name, position, or team..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-900 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30"
                />
              </div>
              <Button
                onClick={() => setShowTopProspects(!showTopProspects)}
                className={`${
                  showTopProspects
                    ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                    : "bg-white/10 hover:bg-white/20 text-white"
                } border border-white/10`}
              >
                <Star className="w-5 h-5 mr-2" />
                Top Prospects
              </Button>
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

          {/* Players List */}
          <div className="space-y-3">
            {filteredPlayers.map((player) => (
              <Card
                key={player.id}
                onClick={() => handlePlayerClick(player.id)}
                className="bg-gradient-to-r from-gray-900 to-black border-white/10 hover:border-white/30 transition-all p-4 cursor-pointer"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <img
                      src={player.image || "/placeholder.svg"}
                      alt={player.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                    />
                    <Badge className="bg-white text-black font-bold">{player.position}</Badge>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-bold text-white">{player.name}</p>
                        {player.isTopProspect && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />}
                        {!player.available && <Badge className="bg-red-500/20 text-red-400 text-xs">Rostered</Badge>}
                      </div>
                      <p className="text-sm text-white/60">{player.team}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-2xl font-black text-white">{player.points}</p>
                      <p className="text-xs text-white/60">avg pts</p>
                    </div>
                    <div className="flex items-center gap-1 text-green-400">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-bold">{player.trend}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredPlayers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/60 text-lg">No players found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

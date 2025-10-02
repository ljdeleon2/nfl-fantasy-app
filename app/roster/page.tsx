"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, X, ArrowLeftRight } from "lucide-react"

const rosterPlayers = [
  {
    id: "caleb-williams",
    name: "C. Williams",
    fullName: "Caleb Williams",
    position: "QB",
    number: "18",
    team: "CHI",
    projected: 23.7,
    matchup: "@Sea (19th) - Sun 3:05 PM",
    image: "/caleb-williams-chicago-bears-quarterback-throwing.jpg",
    tier: "gold",
  },
  {
    id: "saquon-barkley",
    name: "S. Barkley",
    fullName: "Saquon Barkley",
    position: "RB",
    number: "26",
    team: "PHI",
    projected: 18.6,
    matchup: "@Cin (15th) - Sun 12:00 PM",
    image: "/saquon-barkley-eagles-running-back-action.jpg",
    tier: "green",
  },
  {
    id: "kyren-williams",
    name: "K. Williams",
    fullName: "Kyren Williams",
    position: "RB",
    number: "23",
    team: "LAR",
    projected: 17.2,
    matchup: "Min (8th) - Thu 7:15 PM",
    image: "/kyren-williams-rams-running-back.jpg",
    tier: "blue",
  },
  {
    id: "jamarr-chase",
    name: "J. Chase",
    fullName: "Ja'Marr Chase",
    position: "WR",
    number: "1",
    team: "CIN",
    projected: 17.8,
    matchup: "Phi (23rd) - Sun 12:00 PM",
    image: "/ja-marr-chase-bengals-wide-receiver.jpg",
    tier: "orange",
  },
  {
    id: "george-pickens",
    name: "G. Pickens",
    fullName: "George Pickens",
    position: "WR",
    number: "14",
    team: "PIT",
    projected: 14.1,
    matchup: "NYG (14th) - Mon 7:15 PM",
    image: "/george-pickens-steelers-wide-receiver.jpg",
    tier: "gold",
  },
  {
    id: "travis-kelce",
    name: "T. Kelce",
    fullName: "Travis Kelce",
    position: "TE",
    number: "87",
    team: "KC",
    projected: 12.4,
    matchup: "@TB (12th) - Mon 7:15 PM",
    image: "/travis-kelce-chiefs-tight-end.jpg",
    tier: "blue",
  },
  {
    id: "jordan-mason",
    name: "J. Mason",
    fullName: "Jordan Mason",
    position: "FLEX",
    number: "44",
    team: "SF",
    projected: 16.0,
    matchup: "Dal (29th) - Sun 7:20 PM",
    image: "/jordan-mason-49ers-running-back.jpg",
    tier: "green",
  },
  {
    id: "49ers-dst",
    name: "49ers",
    fullName: "49ers D/ST",
    position: "D/ST",
    number: "",
    team: "SF",
    projected: 6.3,
    matchup: "Dal (22nd) - Sun 7:20 PM",
    image: "/san-francisco-49ers-defense-team-celebration.jpg",
    tier: "red",
  },
  {
    id: "austin-seibert",
    name: "A. Seibert",
    fullName: "Austin Seibert",
    position: "K",
    number: "16",
    team: "WAS",
    projected: 7.9,
    matchup: "Chi (14th) - Sun 3:25 PM",
    image: "/austin-seibert-commanders-kicker.jpg",
    tier: "purple",
  },
]

const benchPlayers = [
  {
    id: "dak-prescott",
    name: "D. Prescott",
    fullName: "Dak Prescott",
    position: "QB",
    number: "4",
    team: "DAL",
    projected: 19.2,
    image: "/dak-prescott.jpg",
    tier: "blue",
    stats: { passing: 85, rushing: 45 },
  },
  {
    id: "jonathan-taylor",
    name: "J. Taylor",
    fullName: "Jonathan Taylor",
    position: "RB",
    number: "28",
    team: "IND",
    projected: 17.1,
    image: "/jonathan-taylor-colts-running-back.jpg",
    tier: "green",
    stats: { rushing: 91, receiving: 62 },
  },
  {
    id: "davante-adams",
    name: "D. Adams",
    fullName: "Davante Adams",
    position: "WR",
    number: "17",
    team: "NYJ",
    projected: 17.2,
    image: "/davante-adams-jets-wide-receiver.jpg",
    tier: "green",
    stats: { receiving: 91, rushing: 25 },
  },
  {
    id: "george-kittle",
    name: "G. Kittle",
    fullName: "George Kittle",
    position: "TE",
    number: "85",
    team: "SF",
    projected: 10.8,
    image: "/placeholder.svg?height=200&width=200",
    tier: "green",
    stats: { receiving: 85, blocking: 75 },
  },
  {
    id: "brandon-aubrey",
    name: "B. Aubrey",
    fullName: "Brandon Aubrey",
    position: "K",
    number: "17",
    team: "DAL",
    projected: 7.8,
    image: "/placeholder.svg?height=200&width=200",
    tier: "purple",
    stats: {},
  },
]

const tierColors = {
  gold: "from-yellow-500/20 to-yellow-600/20 border-yellow-400",
  green: "from-green-500/20 to-green-600/20 border-green-400",
  blue: "from-blue-500/20 to-blue-600/20 border-blue-400",
  orange: "from-orange-500/20 to-orange-600/20 border-orange-400",
  purple: "from-purple-500/20 to-purple-600/20 border-purple-400",
  red: "from-red-500/20 to-red-600/20 border-red-400",
}

export default function RosterPage() {
  const [showBench, setShowBench] = useState(false)
  const [comparePlayer, setComparePlayer] = useState<any>(null)
  const [selectedStarter, setSelectedStarter] = useState<any>(null)
  const [roster, setRoster] = useState(rosterPlayers)
  const [bench, setBench] = useState(benchPlayers)

  const handleCompare = (benchPlayer: any, starter: any) => {
    setComparePlayer(benchPlayer)
    setSelectedStarter(starter)
  }

  const handleSwap = () => {
    if (!comparePlayer || !selectedStarter) return

    // Find indices
    const rosterIndex = roster.findIndex((p) => p.id === selectedStarter.id)
    const benchIndex = bench.findIndex((p) => p.id === comparePlayer.id)

    if (rosterIndex === -1 || benchIndex === -1) return

    // Create new arrays with swapped players
    const newRoster = [...roster]
    const newBench = [...bench]

    // Swap the players
    newRoster[rosterIndex] = {
      ...comparePlayer,
      matchup: selectedStarter.matchup, // Keep the matchup info
    }
    newBench[benchIndex] = {
      ...selectedStarter,
      matchup: undefined, // Remove matchup from bench
    }

    setRoster(newRoster)
    setBench(newBench)
    setComparePlayer(null)
    setSelectedStarter(null)
  }

  const getStatColor = (benchStat: number, starterStat: number) => {
    if (benchStat > starterStat) return "text-green-400"
    if (benchStat < starterStat) return "text-red-400"
    return "text-gray-400"
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="mb-8">
          <h1 className="text-5xl font-black text-yellow-400 mb-2">Fantasy Football Roster</h1>
          <p className="text-gray-400 text-lg">Your drafted team for the 2025 season</p>
        </div>

        {/* Starting Roster */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
          {roster.map((player) => (
            <div key={player.id} className="relative group">
              <Link href={`/player/${player.id}`} className="cursor-pointer block">
                <div
                  className={`relative bg-gradient-to-b ${
                    tierColors[player.tier as keyof typeof tierColors]
                  } bg-gray-800 rounded-lg border-2 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20`}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={player.image || "/placeholder.svg"}
                      alt={player.fullName}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  </div>

                  <div className="p-3 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-yellow-400 truncate">{player.name}</h3>
                      <span className="text-xs font-bold text-gray-400">{player.position}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{player.team}</span>
                      <span className="text-lg font-black text-green-400">{player.projected}</span>
                    </div>
                  </div>
                </div>
              </Link>
              {showBench && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <ArrowLeftRight className="w-3 h-3" />
                    Swap
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border-2 border-gray-700">
          <Button
            onClick={() => setShowBench(!showBench)}
            className="w-full flex items-center justify-between bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold py-4 px-6 rounded-lg mb-4 text-lg"
          >
            <span className="flex items-center gap-2">
              <ArrowLeftRight className="w-5 h-5" />
              Bench Players ({bench.length})
            </span>
            {showBench ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </Button>

          {showBench && (
            <>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-4">
                <p className="text-yellow-400 font-bold text-center">
                  💡 Click on any bench player to compare with your starters and make swaps
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {bench.map((player) => (
                  <div
                    key={player.id}
                    onClick={() => {
                      const starterInPosition = roster.find((p) => p.position === player.position)
                      if (starterInPosition) {
                        handleCompare(player, starterInPosition)
                      }
                    }}
                    className="bg-gray-700 rounded-lg overflow-hidden hover:bg-gray-600 transition-all cursor-pointer border-2 border-transparent hover:border-yellow-500 group"
                  >
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={player.image || "/placeholder.svg"}
                        alt={player.fullName}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                    </div>
                    <div className="p-2">
                      <h4 className="font-bold text-white text-sm truncate">{player.name}</h4>
                      <p className="text-xs text-gray-400">
                        {player.position} - {player.team}
                      </p>
                      <p className="text-green-400 font-bold text-sm">Proj: {player.projected}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {comparePlayer && selectedStarter && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-lg p-8 max-w-4xl w-full border-2 border-yellow-500">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-black text-yellow-400">Player Comparison</h2>
                <Button
                  onClick={() => {
                    setComparePlayer(null)
                    setSelectedStarter(null)
                  }}
                  variant="ghost"
                  className="text-white hover:text-yellow-400"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {/* Bench Player */}
                <div className="text-center">
                  <img
                    src={comparePlayer.image || "/placeholder.svg"}
                    alt={comparePlayer.fullName}
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
                  />
                  <h3 className="text-xl font-bold text-white mb-1">{comparePlayer.fullName}</h3>
                  <p className="text-gray-400 mb-2">
                    {comparePlayer.position} - {comparePlayer.team}
                  </p>
                  <div className="bg-blue-600 text-white font-bold py-1 px-3 rounded inline-block">BENCH</div>
                </div>

                {/* Starter */}
                <div className="text-center">
                  <img
                    src={selectedStarter.image || "/placeholder.svg"}
                    alt={selectedStarter.fullName}
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-yellow-500"
                  />
                  <h3 className="text-xl font-bold text-white mb-1">{selectedStarter.fullName}</h3>
                  <p className="text-gray-400 mb-2">
                    {selectedStarter.position} - {selectedStarter.team}
                  </p>
                  <div className="bg-yellow-600 text-black font-bold py-1 px-3 rounded inline-block">STARTER</div>
                </div>
              </div>

              {/* Stats Comparison */}
              <div className="mt-8 space-y-4">
                <h3 className="text-center text-xl font-bold text-white mb-4">Attributes</h3>

                {/* Projected Points */}
                <div className="flex items-center gap-4">
                  <div className="w-16 text-right font-bold text-white">{comparePlayer.projected}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex-1 h-6 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                          style={{ width: `${(comparePlayer.projected / 25) * 100}%` }}
                        />
                      </div>
                      <div className="flex-1 h-6 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600"
                          style={{ width: `${(selectedStarter.projected / 25) * 100}%` }}
                        />
                      </div>
                    </div>
                    <p className="text-center text-sm text-gray-400">PROJECTED POINTS</p>
                  </div>
                  <div className="w-16 text-left font-bold text-white">{selectedStarter.projected}</div>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <Button onClick={handleSwap} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3">
                  Swap Players
                </Button>
                <Button
                  onClick={() => {
                    setComparePlayer(null)
                    setSelectedStarter(null)
                  }}
                  variant="outline"
                  className="flex-1 border-2 border-gray-500 bg-gray-800 text-white hover:bg-gray-700 hover:border-gray-400 font-bold py-3"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

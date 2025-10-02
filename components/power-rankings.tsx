"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

const rankings = [
  {
    rank: 1,
    team: "Philadelphia Eagles",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    record: "4-0",
    change: 0,
    gradient: "from-emerald-900 via-slate-800 to-emerald-900",
  },
  {
    rank: 2,
    team: "Buffalo Bills",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    record: "3-1",
    change: 1,
    gradient: "from-blue-900 via-red-900 to-blue-900",
  },
  {
    rank: 3,
    team: "Detroit Lions",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    record: "3-1",
    change: 0,
    gradient: "from-blue-900 via-slate-800 to-blue-900",
  },
  {
    rank: 4,
    team: "Kansas City Chiefs",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    record: "4-0",
    change: -1,
    gradient: "from-red-900 via-amber-900 to-red-900",
  },
  {
    rank: 5,
    team: "Los Angeles Rams",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    record: "2-2",
    change: 3,
    gradient: "from-blue-900 via-yellow-800 to-blue-900",
  },
  {
    rank: 6,
    team: "Tampa Bay Buccaneers",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    record: "3-1",
    change: 2,
    gradient: "from-red-950 via-orange-900 to-red-950",
  },
  {
    rank: 7,
    team: "Los Angeles Chargers",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    record: "2-2",
    change: 1,
    gradient: "from-blue-900 via-yellow-700 to-blue-900",
  },
  {
    rank: 8,
    team: "Baltimore Ravens",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    record: "2-2",
    change: -2,
    gradient: "from-purple-900 via-purple-800 to-indigo-900",
  },
  {
    rank: 9,
    team: "San Francisco 49ers",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    record: "2-2",
    change: -3,
    gradient: "from-red-900 via-amber-800 to-red-900",
  },
  {
    rank: 10,
    team: "Green Bay Packers",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    record: "2-2",
    change: 0,
    gradient: "from-green-900 via-yellow-800 to-green-900",
  },
]

export function PowerRankings() {
  const currentYear = new Date().getFullYear()

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-xs lg:text-sm font-bold text-white/50 uppercase tracking-widest mb-3">
            Week 5 • {currentYear}
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tight">NFL POWER RANKINGS</h2>
          <p className="text-sm lg:text-base text-white/60">Compiled from FOX Sports, ESPN, and The Athletic</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4 max-w-7xl mx-auto">
          {rankings.map((team, index) => (
            <Card
              key={team.team}
              className={`relative overflow-hidden bg-gradient-to-br ${team.gradient} border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 group cursor-pointer`}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <div className="p-4 lg:p-5">
                {/* Rank Number Background */}
                <div className="text-6xl lg:text-7xl font-black text-white/5 absolute -top-2 -left-1 group-hover:text-white/10 transition-colors select-none">
                  {team.rank}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <img
                      src={team.logo || "/placeholder.svg"}
                      alt={team.team}
                      className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
                    />
                    <div className="flex items-center gap-1 text-xs font-bold">
                      {team.change > 0 && (
                        <>
                          <TrendingUp className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">+{team.change}</span>
                        </>
                      )}
                      {team.change < 0 && (
                        <>
                          <TrendingDown className="w-3 h-3 text-red-400" />
                          <span className="text-red-400">{team.change}</span>
                        </>
                      )}
                      {team.change === 0 && (
                        <>
                          <Minus className="w-3 h-3 text-white/40" />
                          <span className="text-white/40">—</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg lg:text-xl font-black text-white leading-tight">{team.team}</h3>
                    <p className="text-xs text-white/60 font-semibold">{team.record}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

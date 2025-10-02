import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Activity, Target } from "lucide-react"

const nextGenStats = [
  {
    player: "Tyreek Hill",
    team: "MIA",
    stat: "Max Speed",
    value: "22.3 mph",
    rank: 1,
    icon: Zap,
  },
  {
    player: "Christian McCaffrey",
    team: "SF",
    stat: "Rush Yards Over Expected",
    value: "+342 yds",
    rank: 2,
    icon: Activity,
  },
  {
    player: "Patrick Mahomes",
    team: "KC",
    stat: "Completion % Above Expectation",
    value: "+8.4%",
    rank: 1,
    icon: Target,
  },
]

export default function NextGenPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="container mx-auto px-4 lg:px-8 pt-24 lg:pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-blue-500" />
              <h1 className="text-4xl lg:text-6xl font-black text-white">NEXT GEN STATS</h1>
            </div>
            <p className="text-lg text-white/60">Advanced analytics powered by NFL Next Gen Stats</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {nextGenStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-blue-900 via-purple-900 to-black border-white/10 p-6 hover:border-blue-500/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-8 h-8 text-blue-400" />
                    <Badge className="bg-blue-500 text-white">#{stat.rank}</Badge>
                  </div>
                  <h3 className="text-sm text-white/60 mb-2">{stat.stat}</h3>
                  <p className="text-3xl font-black text-white mb-3">{stat.value}</p>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-white">{stat.player}</p>
                    <span className="text-white/40">•</span>
                    <p className="text-white/60">{stat.team}</p>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Additional Stats */}
          <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10 p-8">
            <h2 className="text-2xl font-black text-white mb-6">TRENDING METRICS</h2>
            <div className="space-y-4">
              {[
                "Average Separation at Catch: 3.2 yards",
                "Time to Throw: 2.4 seconds",
                "Expected Points Added: +12.3",
                "Completion Probability: 68.5%",
              ].map((metric, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-white">{metric.split(":")[0]}</span>
                  <span className="font-black text-white text-xl">{metric.split(":")[1]}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

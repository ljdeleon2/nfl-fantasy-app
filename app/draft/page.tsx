import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users } from "lucide-react"

export default function DraftPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="container mx-auto px-4 lg:px-8 pt-24 lg:pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl lg:text-6xl font-black text-white mb-4">DRAFT ROOM</h1>
            <p className="text-lg text-white/60">Your draft starts soon!</p>
          </div>

          {/* Draft Info */}
          <Card className="bg-gradient-to-br from-purple-900 via-blue-900 to-black border-white/10 p-8 lg:p-12 mb-8">
            <div className="text-center">
              <Badge className="bg-white text-black font-bold mb-6 text-lg px-6 py-2">UPCOMING DRAFT</Badge>
              <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">Fantasy Fever League Draft</h2>
              <div className="flex items-center justify-center gap-8 mb-8">
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="w-5 h-5" />
                  <span>Sunday, Nov 10 • 7:00 PM EST</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Users className="w-5 h-5" />
                  <span>10 Teams</span>
                </div>
              </div>
              <Button size="lg" className="bg-white text-black hover:bg-white/90 font-bold text-lg px-12 py-6">
                Enter Draft Room
              </Button>
            </div>
          </Card>

          {/* Draft Order */}
          <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10 p-6 lg:p-8">
            <h3 className="text-2xl font-black text-white mb-6">DRAFT ORDER</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "The Champs",
                "Grid Warriors",
                "End Zone Elite",
                "Touchdown Titans",
                "Blitz Brigade",
                "Field Goal Fanatics",
                "Hail Mary Heroes",
                "Fumble Force",
                "Gridiron Gladiators",
                "Pigskin Pros",
              ].map((team, index) => (
                <div
                  key={team}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="font-black text-white">{index + 1}</span>
                  </div>
                  <span className="font-bold text-white">{team}</span>
                  {team === "The Champs" && <Badge className="bg-green-500 text-white text-xs ml-auto">YOU</Badge>}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

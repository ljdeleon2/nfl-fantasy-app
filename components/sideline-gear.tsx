"use client"

import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

export function SidelineGear() {
  return (
    <section className="py-8 lg:py-12 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-950 via-black to-gray-950 hover:border-white/20 transition-all group">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-[16/12] md:aspect-auto overflow-hidden">
                <img
                  src="/nfl-patriots-player-number-10-in-white-jersey-prof.jpg"
                  alt="NFL Sideline Gear"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 md:to-black/80" />
              </div>

              <div className="p-6 lg:p-10 flex flex-col justify-center">
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">OFFICIAL NFL SHOP</p>

                <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-none tracking-tight">
                  SIDELINE
                  <br />
                  GEAR
                  <br />
                  IS HERE
                </h2>

                <p className="text-sm lg:text-base text-white/60 mb-6 leading-relaxed max-w-md">
                  Get the authentic sideline gear worn by your favorite teams. Premium quality, official NFL
                  merchandise.
                </p>

                <a href="https://shop.nfl.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-fit bg-white hover:bg-white/90 text-black font-bold text-sm px-6 py-5 rounded-lg shadow-xl hover:scale-105 transition-transform"
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Shop Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

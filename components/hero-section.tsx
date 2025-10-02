"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  const currentYear = new Date().getFullYear()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/dramatic-nfl-football-players-in-action-on-field-w.jpg"
          alt="NFL Players"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-yellow-950/40 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_50%)]" />

        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(234,179,8,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.3) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-20">
        <div className="animate-fade-in">
          <div className="inline-block mb-6 lg:mb-8 px-6 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-400/30 shadow-lg shadow-yellow-500/20">
            <span className="text-xs lg:text-sm font-bold text-yellow-300 uppercase tracking-widest">
              {currentYear} SEASON
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black text-white mb-6 lg:mb-8 tracking-tighter leading-none drop-shadow-2xl">
            NFL FANTASY
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">
              FOOTBALL
            </span>
          </h1>

          <p className="text-lg lg:text-2xl text-white/80 mb-10 lg:mb-14 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg">
            Welcome to Fantasy Fever! Experience the ultimate fantasy draft platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6">
            <Link href="/draft">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-black font-bold text-base lg:text-lg px-10 py-7 rounded-lg shadow-2xl shadow-yellow-500/50 hover:scale-105 transition-transform"
              >
                Start Your Draft
              </Button>
            </Link>
            <Link href="/roster">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-yellow-400/50 hover:bg-yellow-500/20 text-white font-bold text-base lg:text-lg px-10 py-7 rounded-lg backdrop-blur-sm hover:scale-105 transition-transform bg-transparent shadow-xl"
              >
                View Rankings
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

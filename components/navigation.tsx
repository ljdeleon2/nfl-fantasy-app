"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Home } from "lucide-react"

export function Navigation() {
  const navItems = [
    { name: "Roster", href: "/roster" },
    { name: "Matchup", href: "/matchup" },
    { name: "League", href: "/league" },
    { name: "Players", href: "/players" },
    { name: "Next Gen", href: "/nextgen" },
    { name: "Analyzer", href: "/matchup-analyzer" },
  ]

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
    window.location.href = "/"
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity mr-6">
            <img
              src="https://static.www.nfl.com/image/upload/v1554321393/league/nvfr7ogywskqrfaiu38m.svg"
              alt="NFL Logo"
              className="w-8 h-8 lg:w-10 lg:h-10"
            />
            <div className="flex flex-col">
              <span className="font-black text-xs lg:text-sm text-white leading-tight tracking-tight">
                Fantasy Fever
              </span>
              <span className="text-[8px] lg:text-[10px] text-yellow-400 font-bold tracking-wide">POWERED BY NFL</span>
            </div>
          </Link>

          <div className="flex items-center gap-1">
            <Button
              onClick={handleHomeClick}
              variant="ghost"
              className="text-white/70 hover:text-white hover:bg-white/10 font-medium transition-colors text-xs sm:text-sm px-2 sm:px-4"
            >
              <Home className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Home</span>
            </Button>
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button
                  variant="ghost"
                  className="text-white/70 hover:text-white hover:bg-white/10 font-medium transition-colors text-xs sm:text-sm px-2 sm:px-4"
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

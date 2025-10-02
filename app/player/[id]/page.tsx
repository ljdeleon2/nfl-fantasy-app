"use client"

import { useParams, useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"
import { ChartContainer } from "@/components/ui/chart"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const playersData: Record<string, any> = {
  "caleb-williams": {
    name: "Caleb Williams",
    position: "QB",
    number: "18",
    team: "Chicago Bears",
    byeWeek: 7,
    rank: 19,
    rostered: 71.6,
    change: 0.3,
    week8Pts: 9.34,
    week9Proj: 15.66,
    image: "/caleb-williams-chicago-bears-quarterback-throwing.jpg",
    weeklyStats: [
      {
        week: 1,
        pts: 7.22,
        opponent: "W 24-17",
        opponentLogo: "TEN",
        passingYds: 93,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 15,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 1,
      },
      {
        week: 2,
        pts: 7.36,
        opponent: "L 13-19",
        opponentLogo: "HOU",
        passingYds: 174,
        passingTD: 0,
        interceptions: 2,
        rushingYds: 44,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 3,
        pts: 17.32,
        opponent: "L 16-21",
        opponentLogo: "IND",
        passingYds: 363,
        passingTD: 2,
        interceptions: 2,
        rushingYds: 8,
        rushingTD: 0,
        fumblesLost: 1,
        misc2PT: 0,
      },
      {
        week: 4,
        pts: 11.48,
        opponent: "W 24-18",
        opponentLogo: "LAR",
        passingYds: 157,
        passingTD: 1,
        interceptions: 0,
        rushingYds: 12,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 5,
        pts: 23.56,
        opponent: "W 36-10",
        opponentLogo: "CAR",
        passingYds: 304,
        passingTD: 2,
        interceptions: 0,
        rushingYds: 34,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 6,
        pts: 28.64,
        opponent: "W 35-16",
        opponentLogo: "JAX",
        passingYds: 226,
        passingTD: 4,
        interceptions: 1,
        rushingYds: 56,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 7,
        pts: 0,
        opponent: "BYE",
        opponentLogo: "",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 0,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 8,
        pts: 9.34,
        opponent: "L 15-18",
        opponentLogo: "WAS",
        passingYds: 131,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 41,
        rushingTD: 0,
        fumblesLost: 1,
        misc2PT: 1,
      },
    ],
    chartData: [
      { week: "1", totalPoints: 7.22, projectedPoints: 18 },
      { week: "2", totalPoints: 7.36, projectedPoints: 17 },
      { week: "3", totalPoints: 17.32, projectedPoints: 16 },
      { week: "4", totalPoints: 11.48, projectedPoints: 17 },
      { week: "5", totalPoints: 23.56, projectedPoints: 18 },
      { week: "6", totalPoints: 28.64, projectedPoints: 19 },
      { week: "7", totalPoints: null, projectedPoints: 0 },
      { week: "8", totalPoints: 9.34, projectedPoints: 18 },
      { week: "9", totalPoints: null, projectedPoints: 15.66 },
    ],
  },
  "saquon-barkley": {
    name: "Saquon Barkley",
    position: "RB",
    number: "26",
    team: "Philadelphia Eagles",
    byeWeek: 5,
    rank: 3,
    rostered: 99.8,
    change: 0.1,
    week8Pts: 22.4,
    week9Proj: 19.8,
    image: "/saquon-barkley-eagles-running-back-action.jpg",
    weeklyStats: [
      {
        week: 1,
        pts: 18.5,
        opponent: "W 34-29",
        opponentLogo: "GB",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 109,
        rushingTD: 2,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 2,
        pts: 24.2,
        opponent: "W 34-28",
        opponentLogo: "ATL",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 95,
        rushingTD: 2,
        fumblesLost: 0,
        misc2PT: 1,
      },
      {
        week: 3,
        pts: 15.8,
        opponent: "W 15-12",
        opponentLogo: "NO",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 147,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 4,
        pts: 19.6,
        opponent: "W 33-16",
        opponentLogo: "TB",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 84,
        rushingTD: 2,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 5,
        pts: 0,
        opponent: "BYE",
        opponentLogo: "",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 0,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 6,
        pts: 13.2,
        opponent: "W 20-16",
        opponentLogo: "CLE",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 118,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 7,
        pts: 16.4,
        opponent: "W 28-3",
        opponentLogo: "NYG",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 176,
        rushingTD: 1,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 8,
        pts: 22.4,
        opponent: "W 37-17",
        opponentLogo: "CIN",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 108,
        rushingTD: 2,
        fumblesLost: 0,
        misc2PT: 0,
      },
    ],
    chartData: [
      { week: "1", totalPoints: 18.5, projectedPoints: 17 },
      { week: "2", totalPoints: 24.2, projectedPoints: 18 },
      { week: "3", totalPoints: 15.8, projectedPoints: 16 },
      { week: "4", totalPoints: 19.6, projectedPoints: 17 },
      { week: "5", totalPoints: null, projectedPoints: 0 },
      { week: "6", totalPoints: 13.2, projectedPoints: 18 },
      { week: "7", totalPoints: 16.4, projectedPoints: 17 },
      { week: "8", totalPoints: 22.4, projectedPoints: 19 },
      { week: "9", totalPoints: null, projectedPoints: 19.8 },
    ],
  },
  "kyren-williams": {
    name: "Kyren Williams",
    position: "RB",
    number: "23",
    team: "Los Angeles Rams",
    byeWeek: 6,
    rank: 8,
    rostered: 98.2,
    change: -0.5,
    week8Pts: 14.7,
    week9Proj: 17.2,
    image: "/kyren-williams-rams-running-back.jpg",
    weeklyStats: [
      {
        week: 1,
        pts: 12.3,
        opponent: "L 22-26",
        opponentLogo: "DET",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 91,
        rushingTD: 1,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 2,
        pts: 18.9,
        opponent: "W 41-10",
        opponentLogo: "ARI",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 104,
        rushingTD: 2,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 3,
        pts: 9.4,
        opponent: "L 20-27",
        opponentLogo: "SF",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 89,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 4,
        pts: 21.6,
        opponent: "W 24-18",
        opponentLogo: "CHI",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 122,
        rushingTD: 2,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 5,
        pts: 16.8,
        opponent: "W 24-19",
        opponentLogo: "GB",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 102,
        rushingTD: 1,
        fumblesLost: 0,
        misc2PT: 1,
      },
      {
        week: 6,
        pts: 0,
        opponent: "BYE",
        opponentLogo: "",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 0,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 7,
        pts: 11.2,
        opponent: "W 30-20",
        opponentLogo: "LV",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 76,
        rushingTD: 1,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 8,
        pts: 14.7,
        opponent: "L 20-30",
        opponentLogo: "MIN",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 97,
        rushingTD: 1,
        fumblesLost: 0,
        misc2PT: 0,
      },
    ],
    chartData: [
      { week: "1", totalPoints: 12.3, projectedPoints: 15 },
      { week: "2", totalPoints: 18.9, projectedPoints: 16 },
      { week: "3", totalPoints: 9.4, projectedPoints: 14 },
      { week: "4", totalPoints: 21.6, projectedPoints: 15 },
      { week: "5", totalPoints: 16.8, projectedPoints: 16 },
      { week: "6", totalPoints: null, projectedPoints: 0 },
      { week: "7", totalPoints: 11.2, projectedPoints: 15 },
      { week: "8", totalPoints: 14.7, projectedPoints: 16 },
      { week: "9", totalPoints: null, projectedPoints: 17.2 },
    ],
  },
  "jamarr-chase": {
    name: "Ja'Marr Chase",
    position: "WR",
    number: "1",
    team: "Cincinnati Bengals",
    byeWeek: 12,
    rank: 5,
    rostered: 99.9,
    change: 0.2,
    week8Pts: 26.8,
    week9Proj: 17.8,
    image: "/ja-marr-chase-bengals-wide-receiver.jpg",
    weeklyStats: [
      {
        week: 1,
        pts: 11.4,
        opponent: "L 10-16",
        opponentLogo: "NE",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 62,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 2,
        pts: 19.8,
        opponent: "W 25-22",
        opponentLogo: "KC",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 89,
        rushingTD: 2,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 3,
        pts: 14.2,
        opponent: "L 33-38",
        opponentLogo: "WAS",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 118,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 1,
      },
      {
        week: 4,
        pts: 22.6,
        opponent: "W 34-24",
        opponentLogo: "CAR",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 141,
        rushingTD: 2,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 5,
        pts: 17.3,
        opponent: "W 38-17",
        opponentLogo: "BAL",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 193,
        rushingTD: 1,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 6,
        pts: 8.9,
        opponent: "L 17-21",
        opponentLogo: "NYG",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 55,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 7,
        pts: 15.6,
        opponent: "W 21-14",
        opponentLogo: "CLE",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 97,
        rushingTD: 1,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 8,
        pts: 26.8,
        opponent: "L 17-37",
        opponentLogo: "PHI",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 125,
        rushingTD: 3,
        fumblesLost: 0,
        misc2PT: 0,
      },
    ],
    chartData: [
      { week: "1", totalPoints: 11.4, projectedPoints: 16 },
      { week: "2", totalPoints: 19.8, projectedPoints: 17 },
      { week: "3", totalPoints: 14.2, projectedPoints: 16 },
      { week: "4", totalPoints: 22.6, projectedPoints: 18 },
      { week: "5", totalPoints: 17.3, projectedPoints: 17 },
      { week: "6", totalPoints: 8.9, projectedPoints: 16 },
      { week: "7", totalPoints: 15.6, projectedPoints: 17 },
      { week: "8", totalPoints: 26.8, projectedPoints: 18 },
      { week: "9", totalPoints: null, projectedPoints: 17.8 },
    ],
  },
  "george-pickens": {
    name: "George Pickens",
    position: "WR",
    number: "14",
    team: "Pittsburgh Steelers",
    byeWeek: 9,
    rank: 24,
    rostered: 87.3,
    change: 1.2,
    week8Pts: 18.4,
    week9Proj: 0,
    image: "/george-pickens-steelers-wide-receiver.jpg",
    weeklyStats: [
      {
        week: 1,
        pts: 9.7,
        opponent: "W 18-10",
        opponentLogo: "ATL",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 85,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 2,
        pts: 12.3,
        opponent: "W 13-6",
        opponentLogo: "DEN",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 111,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 3,
        pts: 6.8,
        opponent: "L 13-20",
        opponentLogo: "LAC",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 57,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 4,
        pts: 14.9,
        opponent: "W 27-24",
        opponentLogo: "IND",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 113,
        rushingTD: 1,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 5,
        pts: 11.2,
        opponent: "W 32-13",
        opponentLogo: "DAL",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 74,
        rushingTD: 1,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 6,
        pts: 8.4,
        opponent: "W 32-13",
        opponentLogo: "LV",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 58,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 1,
      },
      {
        week: 7,
        pts: 7.1,
        opponent: "L 13-37",
        opponentLogo: "NYJ",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 41,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 8,
        pts: 18.4,
        opponent: "W 26-18",
        opponentLogo: "NYG",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 89,
        rushingTD: 2,
        fumblesLost: 0,
        misc2PT: 0,
      },
    ],
    chartData: [
      { week: "1", totalPoints: 9.7, projectedPoints: 12 },
      { week: "2", totalPoints: 12.3, projectedPoints: 13 },
      { week: "3", totalPoints: 6.8, projectedPoints: 11 },
      { week: "4", totalPoints: 14.9, projectedPoints: 13 },
      { week: "5", totalPoints: 11.2, projectedPoints: 12 },
      { week: "6", totalPoints: 8.4, projectedPoints: 13 },
      { week: "7", totalPoints: 7.1, projectedPoints: 11 },
      { week: "8", totalPoints: 18.4, projectedPoints: 14 },
      { week: "9", totalPoints: null, projectedPoints: 0 },
    ],
  },
  "travis-kelce": {
    name: "Travis Kelce",
    position: "TE",
    number: "87",
    team: "Kansas City Chiefs",
    byeWeek: 6,
    rank: 7,
    rostered: 99.1,
    change: -0.3,
    week8Pts: 15.8,
    week9Proj: 12.4,
    image: "/travis-kelce-chiefs-tight-end.jpg",
    weeklyStats: [
      {
        week: 1,
        pts: 13.6,
        opponent: "W 27-20",
        opponentLogo: "BAL",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 89,
        rushingTD: 1,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 2,
        pts: 9.8,
        opponent: "L 22-25",
        opponentLogo: "CIN",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 78,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 3,
        pts: 11.4,
        opponent: "W 22-17",
        opponentLogo: "ATL",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 63,
        rushingTD: 1,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 4,
        pts: 14.2,
        opponent: "W 17-10",
        opponentLogo: "LAC",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 108,
        rushingTD: 1,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 5,
        pts: 8.7,
        opponent: "W 26-13",
        opponentLogo: "NO",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 70,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 6,
        pts: 0,
        opponent: "BYE",
        opponentLogo: "",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 0,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 7,
        pts: 12.9,
        opponent: "W 28-18",
        opponentLogo: "SF",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 64,
        rushingTD: 1,
        fumblesLost: 0,
        misc2PT: 1,
      },
      {
        week: 8,
        pts: 15.8,
        opponent: "W 27-20",
        opponentLogo: "LV",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 90,
        rushingTD: 1,
        fumblesLost: 0,
        misc2PT: 1,
      },
    ],
    chartData: [
      { week: "1", totalPoints: 13.6, projectedPoints: 11 },
      { week: "2", totalPoints: 9.8, projectedPoints: 12 },
      { week: "3", totalPoints: 11.4, projectedPoints: 11 },
      { week: "4", totalPoints: 14.2, projectedPoints: 13 },
      { week: "5", totalPoints: 8.7, projectedPoints: 11 },
      { week: "6", totalPoints: null, projectedPoints: 0 },
      { week: "7", totalPoints: 12.9, projectedPoints: 12 },
      { week: "8", totalPoints: 15.8, projectedPoints: 13 },
      { week: "9", totalPoints: null, projectedPoints: 12.4 },
    ],
  },
  "jordan-mason": {
    name: "Jordan Mason",
    position: "RB",
    number: "44",
    team: "San Francisco 49ers",
    byeWeek: 9,
    rank: 12,
    rostered: 94.6,
    change: 2.1,
    week8Pts: 19.3,
    week9Proj: 0,
    image: "/jordan-mason-49ers-running-back.jpg",
    weeklyStats: [
      {
        week: 1,
        pts: 22.8,
        opponent: "W 32-19",
        opponentLogo: "NYJ",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 147,
        rushingTD: 1,
        fumblesLost: 0,
        misc2PT: 1,
      },
      {
        week: 2,
        pts: 18.4,
        opponent: "W 23-17",
        opponentLogo: "MIN",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 100,
        rushingTD: 2,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 3,
        pts: 14.7,
        opponent: "W 27-20",
        opponentLogo: "LAR",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 123,
        rushingTD: 1,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 4,
        pts: 11.2,
        opponent: "L 21-24",
        opponentLogo: "NE",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 89,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 1,
      },
      {
        week: 5,
        pts: 16.9,
        opponent: "W 24-23",
        opponentLogo: "ARI",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 115,
        rushingTD: 1,
        fumblesLost: 0,
        misc2PT: 1,
      },
      {
        week: 6,
        pts: 13.8,
        opponent: "W 36-24",
        opponentLogo: "SEA",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 95,
        rushingTD: 1,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 7,
        pts: 9.4,
        opponent: "L 17-28",
        opponentLogo: "KC",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 78,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 8,
        pts: 19.3,
        opponent: "W 30-24",
        opponentLogo: "DAL",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 134,
        rushingTD: 2,
        fumblesLost: 0,
        misc2PT: 0,
      },
    ],
    chartData: [
      { week: "1", totalPoints: 22.8, projectedPoints: 14 },
      { week: "2", totalPoints: 18.4, projectedPoints: 15 },
      { week: "3", totalPoints: 14.7, projectedPoints: 14 },
      { week: "4", totalPoints: 11.2, projectedPoints: 13 },
      { week: "5", totalPoints: 16.9, projectedPoints: 15 },
      { week: "6", totalPoints: 13.8, projectedPoints: 14 },
      { week: "7", totalPoints: 9.4, projectedPoints: 13 },
      { week: "8", totalPoints: 19.3, projectedPoints: 16 },
      { week: "9", totalPoints: null, projectedPoints: 0 },
    ],
  },
  "49ers-dst": {
    name: "49ers D/ST",
    position: "D/ST",
    number: "",
    team: "San Francisco 49ers",
    byeWeek: 9,
    rank: 8,
    rostered: 92.4,
    change: -1.2,
    week8Pts: 11.0,
    week9Proj: 0,
    image: "/san-francisco-49ers-defense-team-celebration.jpg",
    weeklyStats: [
      {
        week: 1,
        pts: 14.0,
        opponent: "W 32-19",
        opponentLogo: "NYJ",
        passingYds: 0,
        passingTD: 0,
        interceptions: 2,
        rushingYds: 0,
        rushingTD: 0,
        fumblesLost: 1,
        misc2PT: 0,
      },
      {
        week: 2,
        pts: 8.0,
        opponent: "W 23-17",
        opponentLogo: "MIN",
        passingYds: 0,
        passingTD: 0,
        interceptions: 1,
        rushingYds: 0,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 3,
        pts: 6.0,
        opponent: "W 27-20",
        opponentLogo: "LAR",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 0,
        rushingTD: 0,
        fumblesLost: 1,
        misc2PT: 0,
      },
      {
        week: 4,
        pts: 4.0,
        opponent: "L 21-24",
        opponentLogo: "NE",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 0,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 5,
        pts: 9.0,
        opponent: "W 24-23",
        opponentLogo: "ARI",
        passingYds: 0,
        passingTD: 0,
        interceptions: 1,
        rushingYds: 0,
        rushingTD: 0,
        fumblesLost: 1,
        misc2PT: 0,
      },
      {
        week: 6,
        pts: 12.0,
        opponent: "W 36-24",
        opponentLogo: "SEA",
        passingYds: 0,
        passingTD: 0,
        interceptions: 2,
        rushingYds: 0,
        rushingTD: 0,
        fumblesLost: 1,
        misc2PT: 0,
      },
      {
        week: 7,
        pts: 3.0,
        opponent: "L 17-28",
        opponentLogo: "KC",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 0,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 8,
        pts: 11.0,
        opponent: "W 30-24",
        opponentLogo: "DAL",
        passingYds: 0,
        passingTD: 0,
        interceptions: 1,
        rushingYds: 0,
        rushingTD: 1,
        fumblesLost: 1,
        misc2PT: 0,
      },
    ],
    chartData: [
      { week: "1", totalPoints: 14.0, projectedPoints: 8 },
      { week: "2", totalPoints: 8.0, projectedPoints: 7 },
      { week: "3", totalPoints: 6.0, projectedPoints: 6 },
      { week: "4", totalPoints: 4.0, projectedPoints: 5 },
      { week: "5", totalPoints: 9.0, projectedPoints: 7 },
      { week: "6", totalPoints: 12.0, projectedPoints: 8 },
      { week: "7", totalPoints: 3.0, projectedPoints: 5 },
      { week: "8", totalPoints: 11.0, projectedPoints: 7 },
      { week: "9", totalPoints: null, projectedPoints: 0 },
    ],
  },
  "austin-seibert": {
    name: "Austin Seibert",
    position: "K",
    number: "16",
    team: "Washington Commanders",
    byeWeek: 14,
    rank: 4,
    rostered: 78.9,
    change: 3.4,
    week8Pts: 12.0,
    week9Proj: 7.9,
    image: "/austin-seibert-commanders-kicker.jpg",
    weeklyStats: [
      {
        week: 1,
        pts: 9.0,
        opponent: "W 37-20",
        opponentLogo: "TB",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 0,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 2,
        pts: 11.0,
        opponent: "W 21-18",
        opponentLogo: "NYG",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 0,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 3,
        pts: 13.0,
        opponent: "W 38-33",
        opponentLogo: "CIN",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 0,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 4,
        pts: 7.0,
        opponent: "L 38-42",
        opponentLogo: "ARI",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 0,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 5,
        pts: 10.0,
        opponent: "W 34-13",
        opponentLogo: "CLE",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 0,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 6,
        pts: 8.0,
        opponent: "W 30-23",
        opponentLogo: "BAL",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 0,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 7,
        pts: 6.0,
        opponent: "L 13-40",
        opponentLogo: "CAR",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 0,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
      {
        week: 8,
        pts: 12.0,
        opponent: "W 18-15",
        opponentLogo: "CHI",
        passingYds: 0,
        passingTD: 0,
        interceptions: 0,
        rushingYds: 0,
        rushingTD: 0,
        fumblesLost: 0,
        misc2PT: 0,
      },
    ],
    chartData: [
      { week: "1", totalPoints: 9.0, projectedPoints: 7 },
      { week: "2", totalPoints: 11.0, projectedPoints: 8 },
      { week: "3", totalPoints: 13.0, projectedPoints: 8 },
      { week: "4", totalPoints: 7.0, projectedPoints: 7 },
      { week: "5", totalPoints: 10.0, projectedPoints: 8 },
      { week: "6", totalPoints: 8.0, projectedPoints: 7 },
      { week: "7", totalPoints: 6.0, projectedPoints: 6 },
      { week: "8", totalPoints: 12.0, projectedPoints: 8 },
      { week: "9", totalPoints: null, projectedPoints: 7.9 },
    ],
  },
}

const teamLogos: Record<string, string> = {
  TEN: "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
  HOU: "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
  IND: "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
  LAR: "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
  CAR: "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
  JAX: "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
  WAS: "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
  ARI: "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
  GB: "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
  ATL: "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
  NO: "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
  TB: "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
  CLE: "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
  NYG: "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
  CIN: "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
  DET: "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
  SF: "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
  CHI: "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
  MIN: "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
  LV: "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
  NE: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
  KC: "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
  BAL: "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
  LAC: "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
  DEN: "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
  DAL: "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
  NYJ: "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
  SEA: "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
  PHI: "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
}

export default function PlayerProfilePage() {
  const params = useParams()
  const router = useRouter()
  const playerId = params.id as string
  const player = playersData[playerId]

  if (!player) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <Navigation />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Player Not Found</h1>
          <p className="text-gray-400">The player you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      <Button
        onClick={() => router.back()}
        variant="outline"
        className="fixed top-20 left-4 z-[60] bg-gray-800 border-gray-700 hover:bg-gray-700 text-white shadow-lg"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="bg-gray-800 rounded-lg p-6 flex flex-col lg:flex-row items-center gap-6 mb-6">
          <div className="relative w-48 h-48 flex-shrink-0">
            <img
              src={player.image || "/placeholder.svg"}
              alt={player.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="flex-1 space-y-2">
            <h1 className="text-4xl font-black text-cyan-400">{player.name}</h1>
            <p className="text-xl text-gray-300">
              {player.position} {player.number && `#${player.number}`} - {player.team}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              <div>
                <p className="text-sm text-gray-400">Bye Week</p>
                <p className="text-2xl font-bold">{player.byeWeek}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Rank</p>
                <p className="text-2xl font-bold">{player.rank}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">% Rostered</p>
                <p className="text-2xl font-bold">{player.rostered}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">% Change</p>
                <p className="text-2xl font-bold">{player.change}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Week 8 Pts</p>
                <p className="text-2xl font-bold">{player.week8Pts}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Week 9 Proj.</p>
                <p className="text-2xl font-bold">{player.week9Proj}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-black text-white mb-6">Fantasy Points - {currentYear} Season</h2>
          <ChartContainer
            config={{
              totalPoints: {
                label: "Total Points",
                color: "#3b82f6",
              },
              projectedPoints: {
                label: "Projected Points",
                color: "#ef4444",
              },
            }}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={player.chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis
                  dataKey="week"
                  label={{ value: "Week", position: "insideBottom", offset: -5, fill: "#9ca3af" }}
                  stroke="#6b7280"
                  tick={{ fill: "#9ca3af" }}
                />
                <YAxis
                  label={{ value: "Fantasy Points", angle: -90, position: "insideLeft", fill: "#9ca3af" }}
                  stroke="#6b7280"
                  tick={{ fill: "#9ca3af" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                  labelStyle={{ color: "#9ca3af" }}
                />
                <Line
                  type="monotone"
                  dataKey="totalPoints"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ fill: "#3b82f6", r: 5 }}
                  name="Total Points"
                  connectNulls
                />
                <Line
                  type="monotone"
                  dataKey="projectedPoints"
                  stroke="#ef4444"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: "#ef4444", r: 4 }}
                  name="Projected Points"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>

        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-teal-700">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-bold whitespace-nowrap">Week</th>
                  <th className="px-4 py-3 text-left text-sm font-bold whitespace-nowrap">Pts</th>
                  <th className="px-4 py-3 text-left text-sm font-bold whitespace-nowrap">Opponent</th>
                  <th className="px-4 py-3 text-left text-sm font-bold whitespace-nowrap">Passing Yds</th>
                  <th className="px-4 py-3 text-left text-sm font-bold whitespace-nowrap">Passing TD</th>
                  <th className="px-4 py-3 text-left text-sm font-bold whitespace-nowrap">Interceptions</th>
                  <th className="px-4 py-3 text-left text-sm font-bold whitespace-nowrap">Rushing Yds</th>
                  <th className="px-4 py-3 text-left text-sm font-bold whitespace-nowrap">Rushing TD</th>
                  <th className="px-4 py-3 text-left text-sm font-bold whitespace-nowrap">Fumbles Lost</th>
                  <th className="px-4 py-3 text-left text-sm font-bold whitespace-nowrap">Misc 2PT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {player.weeklyStats.map((stat: any) => (
                  <tr key={stat.week} className="hover:bg-gray-700/50 transition-colors">
                    <td className="px-4 py-3 font-bold">{stat.week}</td>
                    <td className="px-4 py-3 font-bold">{stat.pts}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {stat.opponentLogo && teamLogos[stat.opponentLogo] && (
                          <img
                            src={teamLogos[stat.opponentLogo] || "/placeholder.svg"}
                            alt={stat.opponentLogo}
                            className="w-6 h-6 object-contain"
                          />
                        )}
                        <span
                          className={
                            stat.opponent.startsWith("W")
                              ? "text-green-400 font-semibold"
                              : stat.opponent.startsWith("L")
                                ? "text-red-400 font-semibold"
                                : "text-gray-400"
                          }
                        >
                          {stat.opponent}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3">{stat.passingYds}</td>
                    <td className="px-4 py-3">{stat.passingTD}</td>
                    <td className="px-4 py-3">{stat.interceptions}</td>
                    <td className="px-4 py-3">{stat.rushingYds}</td>
                    <td className="px-4 py-3">{stat.rushingTD}</td>
                    <td className="px-4 py-3">{stat.fumblesLost}</td>
                    <td className="px-4 py-3">{stat.misc2PT}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

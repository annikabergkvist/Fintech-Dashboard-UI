"use client"

import * as React from "react"
import { Area, AreaChart, XAxis, YAxis } from "recharts"

import { cn } from "@/lib/utils"
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"

const chartConfig = {
  balance: {
    label: "Balance (EUR)",
    color: "var(--chart-balance-line-start)",
  },
} satisfies ChartConfig

const DAYS = 30
const START_EUR = 86
const END_EUR = 100

/** Deterministic “random” wobble so SSR/client match and the line looks organic. */
function jitter(seed: number, i: number) {
  const x = Math.sin(seed * 12.9898 + i * 78.233) * 43758.5453
  return x - Math.floor(x)
}

function buildMarchBalanceSeries() {
  return Array.from({ length: DAYS }, (_, i) => {
    const day = i + 1
    const t = i / (DAYS - 1)
    const trend = START_EUR + (END_EUR - START_EUR) * Math.pow(t, 1.08)
    const waveA = 2.5 * Math.sin((day / DAYS) * Math.PI * 2.35)
    const waveB = 1.7 * Math.sin(day * 0.58 + 0.45)
    const waveC = 1.15 * Math.sin(day * 1.28 - 0.9)
    const noise = (jitter(42, day) - 0.5) * 1.1
    const raw = trend + waveA + waveB + waveC + noise
    const balance = Math.round(Math.min(102.8, Math.max(82.5, raw)) * 100) / 100
    return { day, balance }
  })
}

/** Barely inset from 1 / 30 — labels only a hair closer together. */
const X_TICKS = [2, 15, 28] as const

const CHART_PX = 140

function formatMarchTick(value: number) {
  if (value === 2) return "2 Mar"
  if (value === 15) return "15 Mar"
  if (value === 28) return "28 Mar"
  return ""
}

type TotalBalanceAreaChartProps = {
  /** When nested in a padded card, bleed chart to card edges and sit flush on the bottom. */
  variant?: "default" | "cardFooter"
}

export function TotalBalanceAreaChart({ variant = "default" }: TotalBalanceAreaChartProps) {
  const data = React.useMemo(() => buildMarchBalanceSeries(), [])
  const gid = React.useId().replace(/:/g, "")

  const isCardFooter = variant === "cardFooter"

  return (
    <div className={cn("w-full", isCardFooter && "mt-6")}>
      <p
        className={cn(
          "text-xs font-semibold tracking-wider text-balance-label-foreground uppercase",
          isCardFooter ? "px-0" : "px-4"
        )}
      >
        30-DAY BALANCE
      </p>
      <div
        className={cn(
          "mt-3 h-[140px] shrink-0 overflow-hidden",
          isCardFooter
            ? "w-[calc(100%+3rem)] -mx-6 rounded-none"
            : "w-[calc(100%+2rem)] -mx-4 rounded-b-xl"
        )}
      >
        <ChartContainer
          config={chartConfig}
          className="h-full w-full !aspect-auto justify-stretch [&_.recharts-cartesian-axis-tick_text]:fill-balance-label-foreground [&_.recharts-cartesian-axis-tick_text]:text-[11px] [&_.recharts-responsive-container]:h-full"
          initialDimension={{ width: 600, height: CHART_PX }}
          minHeight={CHART_PX}
          role="img"
          aria-label="30-day balance in March with varied daily movement between about 83 and 103 EUR"
        >
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{ top: 4, right: 24, left: 24, bottom: 4 }}
          >
            <defs>
              <linearGradient
                id={`${gid}-stroke`}
                x1="0"
                y1="0"
                x2="1"
                y2="0"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0%" stopColor="var(--chart-balance-line-start)" />
                <stop offset="100%" stopColor="var(--chart-balance-line-end)" />
              </linearGradient>
              <linearGradient
                id={`${gid}-fill`}
                x1="0"
                y1="1"
                x2="0"
                y2="0"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0%" stopColor="var(--chart-balance-area-fade)" stopOpacity={0} />
                <stop
                  offset="45%"
                  stopColor="var(--chart-balance-area-glow)"
                  stopOpacity="var(--chart-balance-area-opacity-mid)"
                />
                <stop
                  offset="100%"
                  stopColor="var(--chart-balance-area-glow)"
                  stopOpacity="var(--chart-balance-area-opacity-top)"
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              type="number"
              domain={[1, 30]}
              ticks={[...X_TICKS]}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              padding={{ left: 4, right: 2 }}
              tickFormatter={formatMarchTick}
            />
            <YAxis hide domain={["dataMin - 1.25", "dataMax + 1.25"]} />
            <Area
              type="monotone"
              dataKey="balance"
              stroke={`url(#${gid}-stroke)`}
              strokeWidth={2.5}
              fill={`url(#${gid}-fill)`}
              fillOpacity={1}
              dot={false}
              activeDot={false}
              isAnimationActive={false}
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  )
}

import Link from "next/link"
import { EU, AU, CA, GB } from "country-flag-icons/react/3x2"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TotalBalanceAreaChart } from "@/components/total-balance-area-chart"
import { cn } from "@/lib/utils"
import { ArrowDown, ArrowUp, Landmark, Plus } from "lucide-react"

/**
 * DESIGNER NOTE: Wise-style dashboard — layout and structure only.
 * All core sections use ShadCN components. Designers can restyle to match Wise UI (colours, typography, spacing).
 *
 * Sections:
 * — Total balance + action buttons (Send, Add money, Request) + Overview metrics (grid on md+)
 * — Currency account cards (EUR, AUD, CAD, GBP)
 * — Recent transactions list
 * — Footer (Provided by Wise Assets Europe)
 */

const OVERVIEW_SECTIONS = [
  {
    id: "monthly-in",
    label: "Monthly in",
    amount: "+€ 3,240",
    trend: {
      direction: "up" as const,
      text: "+12% vs last month",
      className: "text-muted-foreground dark:text-brand-green-500",
    },
  },
  {
    id: "monthly-out",
    label: "Monthly out",
    amount: "-€ 1,580",
    trend: {
      direction: "down" as const,
      text: "-4% vs last month",
      className: "text-muted-foreground dark:text-primary",
    },
  },
  {
    id: "savings-rate",
    label: "Savings rate",
    amount: "51%",
    trend: {
      direction: "up" as const,
      text: "On track",
      className: "text-muted-foreground dark:text-primary",
    },
  },
] as const

const CURRENCY_ACCOUNTS = [
  { code: "EUR", label: "EUR", accountId: "51568", balance: "98.00", Flag: EU },
  { code: "AUD", label: "AUD", accountId: "30779", balance: "0.00", Flag: AU },
  { code: "CAD", label: "CAD", accountId: "15376", balance: "0.00", Flag: CA },
  { code: "GBP", label: "GBP", accountId: "13159", balance: "0.00", Flag: GB },
] as const

const RECENT_TRANSACTIONS = [
  { id: "1", icon: ArrowUp, name: "Hannah Johnson", subtitle: "Sent - 18 Apr", amount: "49 EUR", isCredit: false },
  {
    id: "2",
    icon: Plus,
    name: "To EUR",
    subtitle: "Added - 18 Apr",
    amount: "+ 50 EUR",
    subAmount: "50.44 EUR",
    isCredit: true,
  },
  { id: "3", icon: ArrowUp, name: "Brandon Bolt", subtitle: "Sent - 2 Apr", amount: "110 EUR", isCredit: false },
]

/** Uses CSS vars so hover colors always apply (palette `text-grey-*` utilities may not emit). */
const balanceSecondaryActionBtnClassName =
  "text-balance-label-foreground transition-colors hover:text-[var(--grey-300)] dark:hover:text-[var(--grey-200)]"

export default function Home() {
  return (
    <div className="flex w-full max-w-[var(--layout-max-width)] flex-1 flex-col gap-6 py-4 md:gap-8 md:py-6">
      {/* Total balance + overview — 2:1 column grid from md breakpoint */}
      <section
        aria-label="Balance and overview"
        className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]"
      >
        <Card className="gap-0 overflow-hidden py-0">
          <CardHeader className="space-y-0 px-4 pt-5 pb-2 md:px-6 md:pt-6">
            <p className="text-xs font-semibold tracking-wider text-balance-label-foreground uppercase">
              TOTAL BALANCE
            </p>
            <h2 className="flex flex-wrap items-baseline gap-x-2 gap-y-1 pt-2 text-card-foreground">
              <span className="font-display text-[2.75rem] font-thin leading-[0.95] tracking-tighter tabular-nums sm:text-[3.25rem] md:text-[4.5rem]">
                98.00
              </span>
              <span className="text-base font-normal text-balance-label-foreground">EUR</span>
            </h2>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 px-4 pb-5 pt-0 md:px-6 md:pb-6">
            <div className="flex flex-col items-start gap-2">
              <p className="text-xs text-balance-label-foreground">
                Across 4 currencies · Updated just now
              </p>
              <Badge
                variant="outline"
                className="w-fit rounded-full border-transparent bg-balance-trend-outline-bg px-2 py-0.5 text-xs font-medium text-balance-trend-outline-foreground dark:border-balance-trend-outline-border"
              >
                ↑ +2.4% this month
              </Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant="default">
                Send
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className={balanceSecondaryActionBtnClassName}
              >
                Add
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className={balanceSecondaryActionBtnClassName}
              >
                Request
              </Button>
            </div>
            <TotalBalanceAreaChart variant="cardFooter" />
          </CardContent>
        </Card>

        <Card className="gap-0 overflow-hidden rounded-3xl py-0 shadow-none">
          <CardContent className="space-y-6 p-6 md:p-8">
            <p className="text-xs font-semibold tracking-wider text-balance-label-foreground uppercase">
              Overview
            </p>
            <div className="space-y-0">
              {OVERVIEW_SECTIONS.map((row, index) => (
                <div
                  key={row.id}
                  className={cn(
                    "space-y-1.5",
                    index > 0 &&
                      "mt-6 border-t border-border pt-6"
                  )}
                >
                  <p className="text-[0.625rem] font-semibold leading-snug tracking-wider text-balance-label-foreground uppercase">
                    {row.label}
                  </p>
                  <p className="font-display text-2xl font-bold tracking-tight text-card-foreground tabular-nums">
                    {row.amount}
                  </p>
                  <p
                    className={cn(
                      "flex items-center gap-1 text-xs font-medium",
                      row.trend.className
                    )}
                  >
                    {row.trend.direction === "up" ? (
                      <ArrowUp className="size-3 shrink-0" aria-hidden />
                    ) : (
                      <ArrowDown className="size-3 shrink-0" aria-hidden />
                    )}
                    <span>{row.trend.text}</span>
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Currency account cards */}
      <section className="flex gap-3 overflow-x-auto pb-1 no-scrollbar">
        {CURRENCY_ACCOUNTS.map((account) => (
          <Card
            key={account.code}
            className="h-[206px] w-[256px] shrink-0 gap-0"
          >
            <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-2">
              <div className="flex size-10 items-center justify-center overflow-hidden rounded-full ring-1 ring-border/50">
                <account.Flag aria-hidden className="h-full w-full scale-[1.5]" />
              </div>
              <CardTitle className="text-base font-medium text-balance-label-foreground">
                {account.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-auto space-y-1">
              <div className="flex items-center gap-2 text-xs text-balance-label-foreground">
                <Landmark className="size-3.5" aria-hidden />
                <span aria-hidden>•</span>
                <span>{account.accountId}</span>
              </div>
              <p className="font-display text-2xl font-bold">{account.balance}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Recent transactions */}
      <section className="mt-6 mb-[88px]">
        <Card className="gap-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-base font-semibold">Transactions</CardTitle>
            <Link
              href="/"
              className="text-xs font-bold text-balance-label-foreground underline underline-offset-4 hover:opacity-90"
            >
              See all
            </Link>
          </CardHeader>
          <CardContent className="pt-0">
            <ul>
              {RECENT_TRANSACTIONS.map((tx) => (
                <li key={tx.id} className="flex items-center gap-4 py-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted/50 ring-1 ring-border/50">
                    <tx.icon
                      className={cn(
                        "size-5",
                        tx.icon === ArrowUp &&
                          "text-muted-foreground dark:text-primary",
                        tx.icon === Plus &&
                          "text-muted-foreground dark:text-brand-green-500"
                      )}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold leading-5 text-foreground">
                      {tx.name}
                    </p>
                    <p className="text-xs leading-5 text-balance-label-foreground">
                      {tx.subtitle}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p
                      className={
                        tx.isCredit
                          ? "text-sm font-semibold text-muted-foreground dark:text-brand-green-500"
                          : "text-sm font-semibold text-foreground"
                      }
                    >
                      {tx.amount}
                    </p>
                    {"subAmount" in tx && tx.subAmount ? (
                      <p className="text-xs leading-5 text-muted-foreground">
                        {tx.subAmount}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="mt-auto pt-4">
        <p className="text-xs text-muted-foreground">
          Provided by Wise Assets Europe
        </p>
      </footer>
    </div>
  )
}

import Link from "next/link"
import { EU, AU, CA, GB } from "country-flag-icons/react/3x2"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUp, Plus, Landmark } from "lucide-react"

/**
 * DESIGNER NOTE: Wise-style dashboard — layout and structure only.
 * All core sections use ShadCN components. Designers can restyle to match Wise UI (colours, typography, spacing).
 *
 * Sections:
 * — Total balance + action buttons (Send, Add money, Request)
 * — Currency account cards (EUR, AUD, CAD, GBP)
 * — Recent transactions list
 * — Footer (Provided by Wise Assets Europe)
 */

const CURRENCY_ACCOUNTS = [
  { code: "EUR", label: "EUR", accountId: "51568", balance: "98.00", Flag: EU },
  { code: "AUD", label: "AUD", accountId: "30779", balance: "0.00", Flag: AU },
  { code: "CAD", label: "CAD", accountId: "15376", balance: "0.00", Flag: CA },
  { code: "GBP", label: "GBP", accountId: "13159", balance: "0.00", Flag: GB },
] as const

const RECENT_TRANSACTIONS = [
  { id: "1", icon: ArrowUp, name: "Hannah Johnson", subtitle: "Sent - 18 Apr", amount: "49 EUR", isCredit: false },
  { id: "2", icon: Plus, name: "To EUR", subtitle: "Added - 18 Apr", amount: "+ 50 EUR", subAmount: "50.44 EUR", isCredit: true },
  { id: "3", icon: ArrowUp, name: "Brandon Bolt", subtitle: "Sent - 2 Apr", amount: "110 EUR", isCredit: false },
]

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-[976px] flex-1 flex-col gap-8 py-6 pr-6 pb-6 pl-6 md:pl-0">
      {/* Total balance + actions */}
      <section className="space-y-4">
        <div className="space-y-0">
          <p className="text-sm font-medium text-muted-foreground">Total balance</p>
          <h2 className="text-3xl font-bold tracking-tight">98.00 EUR</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="default">
            Send money
          </Button>
          <Button size="sm" variant="secondary">
            Add money
          </Button>
          <Button size="sm" variant="secondary">
            Request money
          </Button>
        </div>
      </section>

      {/* Currency account cards */}
      <section className="flex gap-3 overflow-x-auto pb-1 no-scrollbar">
        {CURRENCY_ACCOUNTS.map((account) => (
          <Card
            key={account.code}
            className="h-[206px] w-[256px] shrink-0 gap-0 bg-muted/50 dark:bg-muted/50"
          >
            <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-2">
              <div className="flex size-10 items-center justify-center overflow-hidden rounded-full ring-1 ring-border/50">
                <account.Flag aria-hidden className="h-full w-full scale-[1.5]" />
              </div>
              <CardTitle className="text-base font-medium">{account.label}</CardTitle>
            </CardHeader>
            <CardContent className="mt-auto space-y-1">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Landmark className="size-3.5" aria-hidden />
                <span aria-hidden>•</span>
                <span>{account.accountId}</span>
              </div>
              <p className="text-2xl font-bold">{account.balance}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Recent transactions */}
      <section className="mt-6 mb-[88px] space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold text-foreground">Transactions</h2>
          <Link
            href="/"
            className="pr-4 text-xs font-bold text-foreground underline underline-offset-4 hover:opacity-90 dark:text-brand-green-500"
          >
            See all
          </Link>
        </div>
        <ul className="rounded-lg bg-background p-4">
          {RECENT_TRANSACTIONS.map((tx) => (
            <li key={tx.id} className="flex items-center gap-4 py-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted/50 ring-1 ring-border/50 dark:ring-grey-300/40">
                <tx.icon className="size-5 text-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold leading-5 text-foreground">
                  {tx.name}
                </p>
                <p className="text-xs leading-5 text-muted-foreground">
                  {tx.subtitle}
                </p>
              </div>
              <div className="shrink-0 text-right">
                <p
                  className={
                    tx.isCredit
                      ? "text-sm font-semibold text-sidebar-primary"
                      : "text-sm font-semibold text-foreground"
                  }
                >
                  {tx.amount}
                </p>
                {tx.subAmount && (
                  <p className="text-xs leading-5 text-muted-foreground">
                    {tx.subAmount}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
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

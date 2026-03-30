"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "@/components/mode-toggle"
import { ChevronRight } from "lucide-react"

/**
 * DESIGNER NOTE: Wise-style top header
 * — Left: sidebar trigger + WISE logo. Right: Earn CTA + user profile (avatar, name, dropdown).
 * — Restyle: edit button variants, avatar size, or add --wise-* CSS variables in globals.css.
 */
export function AppHeader() {
  return (
    <header className="h-14 shrink-0 bg-background">
      <div className="mx-auto flex h-14 w-full max-w-[976px] items-center gap-4 px-4">
        <div className="flex flex-1" />
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button size="sm" variant="default">
          Earn €90
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 rounded-full px-2"
            >
              <Avatar className="size-8">
                <AvatarImage src="" alt="Annika Bergkvist" />
                <AvatarFallback className="bg-muted text-foreground/80 text-xs">
                  CF
                </AvatarFallback>
              </Avatar>
              <span className="hidden text-sm font-medium sm:inline-block">
                Annika Bergkvist
              </span>
              <ChevronRight className="size-4 text-foreground dark:text-brand-green-500" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <span className="font-normal">Account</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

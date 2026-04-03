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
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ChevronRight, Menu } from "lucide-react"

/**
 * DESIGNER NOTE: Wise-style top header
 * — Left: spacer (aligns with content grid). Right: Earn CTA + user profile (avatar, name, dropdown).
 * — Restyle: edit button variants, avatar size, or add --wise-* CSS variables in globals.css.
 */
export function AppHeader() {
  return (
    <header className="h-14 shrink-0 bg-background">
      <div className="flex h-14 w-full min-w-0 max-w-[var(--layout-max-width)] items-center gap-2 sm:gap-4">
        <SidebarTrigger className="shrink-0 md:hidden">
          <Menu className="size-5" />
        </SidebarTrigger>
        <div className="min-w-0 flex flex-1" />
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <ModeToggle />
          <Button size="sm" variant="default" className="px-2.5 text-xs sm:px-3 sm:text-sm">
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
                  AB
                </AvatarFallback>
              </Avatar>
              <span className="hidden text-sm font-medium sm:inline-block">
                Annika Bergkvist
              </span>
              <ChevronRight className="size-4 text-foreground dark:text-primary" />
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

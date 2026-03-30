"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Home,
  CreditCard,
  List,
  ArrowLeftRight,
  Users,
  BarChart3,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

/**
 * DESIGNER NOTE: Wise-style app sidebar (left navigation)
 * — Flat list only: Home, Cards, Transactions, Payments, Recipients, Insights (no sub-navigation).
 * — To restyle: edit className on Sidebar, or override --sidebar-* in globals.css
 */
export function AppSidebar() {
  return (
    <Sidebar className="border-r border-sidebar-border/0">
      <SidebarHeader className="mb-10 w-full items-center px-6 pb-0 pt-6">
        <Link href="/" className="flex shrink-0" aria-label="Wise home">
          <Image
            src="/Logo.svg"
            alt=""
            width={106}
            height={24}
            priority
            className="h-5 w-auto dark:hidden"
          />
          <Image
            src="/LogoGreen.svg"
            alt=""
            width={106}
            height={24}
            priority
            className="hidden h-5 w-auto dark:block"
          />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="px-6 pb-6 pt-0">
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive size="lg">
                  <Link href="/" className="flex items-center gap-3">
                    <Home className="size-4" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild size="lg">
                  <Link href="/" className="flex items-center gap-3">
                    <CreditCard className="size-4" />
                    <span>Cards</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild size="lg">
                  <Link href="/" className="flex items-center gap-3">
                    <List className="size-4" />
                    <span>Transactions</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild size="lg">
                  <Link href="/" className="flex items-center gap-3">
                    <ArrowLeftRight className="size-4" />
                    <span>Payments</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild size="lg">
                  <Link href="/" className="flex items-center gap-3">
                    <Users className="size-4" />
                    <span>Recipients</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild size="lg">
                  <Link href="/" className="flex items-center gap-3">
                    <BarChart3 className="size-4" />
                    <span>Insights</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

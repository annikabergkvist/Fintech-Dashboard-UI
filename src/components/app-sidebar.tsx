"use client"

import type { ComponentProps } from "react"
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
  useSidebar,
} from "@/components/ui/sidebar"

/**
 * DESIGNER NOTE: Wise-style app sidebar (left navigation)
 * — Desktop: fixed rail (offcanvas). Mobile: same links in a Sheet, opened from the header menu.
 * — Nav links close the sheet on tap so the overlay does not stay open after navigation.
 */
function NavMenuLink({
  href,
  className,
  children,
  ...props
}: ComponentProps<typeof Link>) {
  const { isMobile, setOpenMobile } = useSidebar()
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        if (isMobile) setOpenMobile(false)
      }}
      {...props}
    >
      {children}
    </Link>
  )
}

export function AppSidebar() {
  return (
    <Sidebar collapsible="offcanvas" className="border-r border-sidebar-border/0">
      <SidebarHeader className="mb-8 w-full items-center px-0 pb-0 pt-1 md:mb-10 md:pr-6 md:pt-0">
        <NavMenuLink href="/" className="flex shrink-0" aria-label="Wise home">
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
        </NavMenuLink>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="px-0 pb-6 md:pr-6">
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive size="lg">
                  <NavMenuLink href="/" className="flex items-center gap-3">
                    <Home className="size-4" />
                    <span>Home</span>
                  </NavMenuLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild size="lg">
                  <NavMenuLink href="/" className="flex items-center gap-3">
                    <CreditCard className="size-4" />
                    <span>Cards</span>
                  </NavMenuLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild size="lg">
                  <NavMenuLink href="/" className="flex items-center gap-3">
                    <List className="size-4" />
                    <span>Transactions</span>
                  </NavMenuLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild size="lg">
                  <NavMenuLink href="/" className="flex items-center gap-3">
                    <ArrowLeftRight className="size-4" />
                    <span>Payments</span>
                  </NavMenuLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild size="lg">
                  <NavMenuLink href="/" className="flex items-center gap-3">
                    <Users className="size-4" />
                    <span>Recipients</span>
                  </NavMenuLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild size="lg">
                  <NavMenuLink href="/" className="flex items-center gap-3">
                    <BarChart3 className="size-4" />
                    <span>Insights</span>
                  </NavMenuLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

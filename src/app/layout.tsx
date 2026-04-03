import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { TooltipProvider } from "@/components/ui/tooltip"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { AppHeader } from "@/components/app-header"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
})

export const metadata: Metadata = {
  title: "Wise UI Dashboard — Next.js + ShadCN",
  description: "Wise-style dashboard template for designers to learn layout and styling with ShadCN components",
}

/**
 * DESIGNER NOTE: Root layout
 * — Global fonts and theme are applied here; body styles come from globals.css
 * — Inter via next/font (--font-inter); Cabinet Grotesk via Fontshare @import in globals.css
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <SidebarProvider>
              <AppSidebar />
              <SidebarInset className="min-w-0 flex-1 px-4 md:pl-16 md:pr-6">
                <div className="pt-4 md:pt-16">
                  <AppHeader />
                </div>
                {/* Mobile: px-4; desktop: sidebar gap + md:pl-16 for main-column gutter */}
                <div className="pt-6 md:pt-14">{children}</div>
              </SidebarInset>
            </SidebarProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

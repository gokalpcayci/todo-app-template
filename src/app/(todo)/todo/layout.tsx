

import { notFound } from "next/navigation"
import { Separator } from "@/components/ui/separator"

import { dashboardConfig } from "@/config/dashboard"
import { MainNav } from "@/components/layouts/main-nav"
import { DashboardNav } from "@/components/nav"
import { SiteFooter } from "@/components/layouts/site-footer"
interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function LandingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={dashboardConfig.mainNav} />
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        
        <div className="hidden md:flex  md:items-start md:justify-center  md:gap-4">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <Separator className="hidden md:flex" orientation="vertical"/>
        </div>

        <main className="flex w-full flex-1 flex-col overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-4 w-full h-32 mb-6 border rounded-2xl">
          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-end gap-[1px] justify-center">
              <h1 className="text-2xl  font-heading">2</h1>
              <span>h</span>
            </div>
            <p className="text-xs lg:text-sm text-muted-foreground">Estimated Time</p>
          </div>
          <div className="flex flex-col items-center justify-center ">
              <h1 className="text-2xl  font-heading">2</h1>
            <p className="text-xs lg:text-sm text-center text-muted-foreground">Tasks to be Completed</p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-end gap-[1px] justify-center">
              <h1 className="text-2xl  font-heading">2</h1>
              <span>m</span>
            </div>
            <p className="text-xs lg:text-sm text-muted-foreground">Elapsed Time</p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-end gap-[1px] justify-center">
              <h1 className="text-2xl  font-heading">2</h1>
            </div>
            <p className="text-xs lg:text-sm  text-muted-foreground">Completed Tasks</p>
          </div>
        </div>
          {children}
        </main>
      </div>
      <SiteFooter className="border-t" />
    </div>
  )
}

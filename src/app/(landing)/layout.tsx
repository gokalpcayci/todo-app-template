import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/layouts/main-nav"
import { SiteFooter } from "@/components/layouts/site-footer"
import { landingConfig } from "@/config/site"
interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function LandingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={landingConfig.mainNav} />
          <nav>
            <Link
              href="/login"
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                buttonVariants({ variant: "secondary", size: "sm" }),
               "px-4",
                 "cursor-not-allowed opacity-80"
              )}
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}

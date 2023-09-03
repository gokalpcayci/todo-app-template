import { Separator } from "@/components/ui/separator";
import { dashboardConfig } from "@/config/dashboard";
import { MainNav } from "@/components/layouts/main-nav";
import { DashboardNav } from "@/components/nav";
import { SiteFooter } from "@/components/layouts/site-footer";
import { getCurrentUser } from "@/lib/session";
import { notFound } from "next/navigation";
import { UserAccountNav } from "@/components/user-account-nav";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function LandingLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser();

  if (!user) {
    return notFound();
  }
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={dashboardConfig.mainNav} />
          <UserAccountNav
            user={{
              name: user.name,
              image: user.image,
              email: user.email,
            }}
          />
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <div className="hidden md:flex  md:items-start md:justify-center  md:gap-4">
          <aside className="hidden w-[200px] flex-col justify-between h-full md:flex">
            <DashboardNav items={dashboardConfig.sidebarNav} />
            <div className="grid gap-2">
              <Link
                href="/dashboard/billing"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-full px-3 flex items-center justify-between "
                )}
              >
                Billing
                <Icons.billing className="h-4 w-4 mr-2 " />
              </Link>
              <Link
                href="/dashboard/settings"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-full px-3 flex items-center justify-between "
                )}
              >
                Settings
                <Icons.settings className="h-4 w-4 mr-2 " />
              </Link>
            </div>
          </aside>
          <Separator className="hidden md:flex" orientation="vertical" />
        </div>

        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
      <SiteFooter className="border-t" />
    </div>
  );
}

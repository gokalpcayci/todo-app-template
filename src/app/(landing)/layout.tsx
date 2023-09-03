import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MainNav } from "@/components/layouts/main-nav";
import { SiteFooter } from "@/components/layouts/site-footer";
import { getCurrentUser } from "@/lib/session";
import { UserAccountNav } from "@/components/user-account-nav";
interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function LandingLayout({
  children,
}: MarketingLayoutProps) {
  const user = await getCurrentUser();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav />
          <nav>
            {user ? (
              <UserAccountNav
                user={{
                  name: user.name,
                  email: user.email,
                  image: user.image,
                }}
              />
            ) : (
              <Link
                href="/login"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "sm" }),
                  "px-4"
                )}
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

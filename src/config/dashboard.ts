import { DashboardConfig } from "@/types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Today",
      href: "/dashboard",
      icon: "sun",
    },
    {
      title: "Tomorow",
      href: "/dashboard",
      icon: "sunset",
    },
    {
      title: "This Week",
      href: "/dashboard",
      icon: "calendar",
    },
    {
      title: "Completed",
      href: "/dashboard",
      icon: "check",
    }
  ],
}



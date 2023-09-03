"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { SidebarNavItem } from "@/types";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { buttonVariants } from "./ui/button";
import { Separator } from "@radix-ui/react-separator";
interface DashboardNavProps {
  items: SidebarNavItem[];
}

export function DashboardNav({ items }: DashboardNavProps) {
  const [isOpen, setIsOpen] = React.useState(true);

  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <button
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-full flex items-center justify-between"
            )}
          >
            Tasks
            <div>
              {!isOpen ? (
                <Icons.chevronDown className="h-4 w-4" />
              ) : (
                <Icons.chevronUp className="h-4 w-4" />
              )}
            </div>
          </button>
        </CollapsibleTrigger>
        <Separator className="border my-2" />

        {items.map((item, index) => {
          const Icon = Icons[item.icon || "arrowRight"];
          return (
            item.href && (
              <CollapsibleContent asChild>
                <Link key={index} href={item.disabled ? "/" : item.href}>
                  <span
                    className={cn(
                      "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                      path === item.href ? "bg-accent" : "transparent",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    <span>{item.title}</span>
                  </span>
                </Link>
              </CollapsibleContent>
            )
          );
        })}
      </Collapsible>
    </nav>
  );
}

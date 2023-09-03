import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DashboardShell } from "@/components/shell";
import { DashboardHeader } from "@/components/header";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Icons } from "@/components/icons";
type Props = {};

export default function BillingPage({}: Props) {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Billing"
        text="I will write subscription plans later, right now this page is empty"
      />
      <div className="grid gap-8"></div>
    </DashboardShell>
  );
}

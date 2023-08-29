"use client";
import React from "react";
import { DashboardShell } from "@/components/shell";
import { DashboardHeader } from "@/components/header";
import { PostCreateButton } from "@/components/post-create-button";
import { EmptyPlaceholder } from "@/components/empty-placeholder";

export default function DashboardPage() {
  const posts = [""];

  return (
    <DashboardShell>
      <DashboardHeader heading="Todo" text="Create and manage todos.">
        <PostCreateButton />
      </DashboardHeader>
      <div>
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name="post" />
          <EmptyPlaceholder.Title>No todos created</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            You don&apos;t have any todos yet. Start creating content.
          </EmptyPlaceholder.Description>
          <PostCreateButton variant="outline" />
        </EmptyPlaceholder>
      </div>
    </DashboardShell>
  );
}

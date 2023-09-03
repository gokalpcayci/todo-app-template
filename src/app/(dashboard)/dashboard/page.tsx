import React from "react";
import { DashboardShell } from "@/components/shell";
import { DashboardHeader } from "@/components/header";
import { PostCreateButton } from "@/components/post-create-button";
import { EmptyPlaceholder } from "@/components/empty-placeholder";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="grid grid-cols-2 sm:grid-cols-4 w-full h-32 mb-6 border rounded-2xl">
        <div className="flex flex-col items-center justify-center ">
          <div className="flex items-end gap-[1px] justify-center">
            <h1 className="text-2xl  font-heading">2</h1>
            <span>h</span>
          </div>
          <p className="text-xs lg:text-sm text-muted-foreground">
            Estimated Time
          </p>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-2xl  font-heading">2</h1>
          <p className="text-xs lg:text-sm text-center text-muted-foreground">
            Tasks to be Completed
          </p>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <div className="flex items-end gap-[1px] justify-center">
            <h1 className="text-2xl  font-heading">2</h1>
            <span>m</span>
          </div>
          <p className="text-xs lg:text-sm text-muted-foreground">
            Elapsed Time
          </p>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <div className="flex items-end gap-[1px] justify-center">
            <h1 className="text-2xl  font-heading">2</h1>
          </div>
          <p className="text-xs lg:text-sm  text-muted-foreground">
            Completed Tasks
          </p>
        </div>
      </div>
      <DashboardHeader heading="Tasks" text="Create and manage tasks.">
        <PostCreateButton />
      </DashboardHeader>
      <div>
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name="post" />
          <EmptyPlaceholder.Title>No tasks created</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            You don&apos;t have any tasks yet. Start creating content.
          </EmptyPlaceholder.Description>
          <PostCreateButton variant="outline" />
        </EmptyPlaceholder>
      </div>
    </DashboardShell>
  );
}

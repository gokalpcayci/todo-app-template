import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PostCreateButton } from "@/components/post-create-button";
type Props = {};

export function PostDialog({}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <PostCreateButton />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader></DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

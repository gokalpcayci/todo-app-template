import React, { Fragment } from "react";
import { UserAuthForm } from "@/components/user-auth-form";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
type Props = {};

export default function Loginpage({}: Props) {
  return (
    <Fragment>
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-0 top-4 md:left-4 md:top-8"
        )}
      >
        <Icons.chevronLeft className="h-4 w-4 mr-2" />
        Back
      </Link>

      <div className="container min-h-screen w-full sm:max-w-lg   mx-auto">
        <div className="h-screen flex flex-col justify-center gap-4">
          <div className="grid gap-2  items-center  ">
            <div className="flex flex-col items-center justify-center gap-2">
              <Icons.logo className="h-8 w-8" />
              <h1 className=" text-2xl font-semibold text-white">
                Welcome back
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email to sign in to your account
              </p>
            </div>

            <UserAuthForm />
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            <Link
              href="/register"
              className="hover:text-brand underline underline-offset-4"
            >
              Don&apos;t have an account? Sign Up
            </Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
}

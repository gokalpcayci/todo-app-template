import React, { Fragment } from "react";
import { UserAuthForm } from "@/components/user-auth-form";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
type Props = {};

export default function Registerpage({}: Props) {
  return (
    <Fragment>
      <Link
        href="/login"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-0 top-0 md:right-4 md:top-4 m-4",
          "flex items-center justify-even "
        )}
      >
        Login
      </Link>

      <div className="container min-h-screen w-full sm:max-w-lg   mx-auto">
        <div className="h-screen flex flex-col justify-center gap-4">
          <div className="grid gap-2  items-center  ">
            <div className="flex flex-col items-center justify-center gap-2">
              <Icons.logo className="h-8 w-8" />
              <h1 className=" text-2xl font-semibold text-white">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email to sign in to your account
              </p>
            </div>

            <UserAuthForm />
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="#"
              className="hover:text-brand underline underline-offset-4"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="#"
              className="hover:text-brand underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </Fragment>
  );
}

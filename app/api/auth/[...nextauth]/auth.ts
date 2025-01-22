import { signIn } from "next-auth/react";
import { Routes } from "@/app/routes/routes";

export const handleSignIn = (link?: string) => {
  signIn("google", {
    callbackUrl: link ?? Routes.DASHBOARD,
  });
};

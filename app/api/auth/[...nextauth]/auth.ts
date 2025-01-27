import { signIn } from "next-auth/react";
import { Routes } from "@/app/routes/routes";

enum AuthProvider {
  Google = "google",
}

export const handleSignIn = (link?: string) => {
  signIn(AuthProvider.Google, {
    callbackUrl: link ?? Routes.DASHBOARD,
  });
};

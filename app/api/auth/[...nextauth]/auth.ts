import { signIn } from "next-auth/react";
import { Routes } from "@/app/routes/routes";

enum AuthProvider {
  Google = "google",
}

export const handleSignIn = () => {
  signIn(AuthProvider.Google, {
    callbackUrl: Routes.DASHBOARD,
  });
};

import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    accessToken: string | unknown;
    refreshToken: string | unknown;
    userId: string;
  }
}

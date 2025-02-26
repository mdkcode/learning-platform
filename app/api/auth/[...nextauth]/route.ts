import { doc, getDoc, setDoc } from "firebase/firestore";
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import { db } from "@/app/configs/firebase/firebase";
import { Roles } from "@/app/configs/utils/roles";

interface CustomJwt extends JWT {
  accessToken: string;
}

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET!,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = (token as CustomJwt)?.accessToken;
      session.userId = token.sub;
      return session;
    },
    async signIn({ user, account }) {
      const userRef = doc(db, "users", user.id);
      try {
        const docSnap = await getDoc(userRef); // check if the user exists
        if (!docSnap.exists()) {
          // if user doesnt exist, create new user
          const userData = {
            name: user.name,
            email: user.email,
            createdAt: new Date(),
            role: Roles.Student,
            oathId: account?.providerAccountId,
          };
          await setDoc(userRef, userData);
        }
        return true;
      } catch (error) {
        return false;
      }
    },
  },
  session: {
    maxAge: 1800,
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };

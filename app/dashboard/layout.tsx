"use client";
import { useSession } from "next-auth/react";
import { MobileHeader } from "../ui/dashboard/MobileHeader";
import SideNav from "../ui/dashboard/sidenav";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Routes } from "../routes/routes";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.expires && !session.user) router.push(Routes.HOME);
  }, [session?.expires, session?.user, router]);

  return (
    <div className="flex flex-col md:h-screen md:flex-row">
      <MobileHeader />
      <SideNav />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
};

export default Layout;

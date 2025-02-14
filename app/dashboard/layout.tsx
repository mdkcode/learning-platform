"use client";
import { useSession } from "next-auth/react";
import { MobileHeader } from "@/app/ui/dashboard/MobileHeader";
import SideNav from "@/app/ui/dashboard/sidenav";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Routes } from "@/app/routes/routes";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const isUserSessionNotValid = session?.expires && !session.user;

  useEffect(() => {
    if (isUserSessionNotValid) router.push(Routes.HOME);
  }, [isUserSessionNotValid, router]);

  return (
    <div className="flex flex-col md:h-screen md:flex-row">
      <MobileHeader />
      <SideNav />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
};

export default Layout;

"use client";
import { useState } from "react";
import SideNav from "../ui/dashboard/sidenav";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col md:h-screen md:flex-row">
      {/* Button to toggle the side navigation */}
      <button
        className="block md:hidden p-4"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Bars3Icon className="size-6" />
      </button>
      <SideNav />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
};

export default Layout;

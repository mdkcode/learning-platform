"use client";
import { useState } from "react";
import Icon from "@/app/ui/components/Icon/Icon";
import { Logo } from "@/app/ui/dashboard/Logo";
import { Links } from "@/app/ui/dashboard/Links";

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div
        className="bg-[#00004B] flex justify-between items-center md:hidden p-5"
        data-test="mobileHeader"
      >
        <Logo />
        <button
          data-test="mobileMenuButton"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Icon name={isOpen ? "close" : "hamburger"} className="text-white" />
        </button>
      </div>
      {isOpen && (
        <div
          className="bg-[#00004B] border-t py-4"
          data-test="mobileMenuRoutes"
        >
          <Links />
        </div>
      )}
    </>
  );
}

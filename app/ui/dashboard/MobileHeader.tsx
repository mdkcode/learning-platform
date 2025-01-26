"use client";
import { useState } from "react";
import Icon from "../components/Icon/Icon";
import { Logo } from "./Logo";
import { Links } from "./Links";

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="bg-[#00004B] flex justify-between items-center md:hidden p-5">
        <Logo />
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <Icon name={isOpen ? "close" : "hamburger"} className="text-white" />
        </button>
      </div>
      {isOpen && (
        <div className="bg-[#00004B] border-t py-4">
          <Links />
        </div>
      )}
    </>
  );
}

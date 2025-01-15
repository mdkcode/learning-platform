import { Logo } from "./Logo";
import { Links } from "./Links";

export default function SideNav() {
  return (
    <div className="hidden h-screen py-4 md:block md:px-2 w bg-[#00004B] w-[10%] text-center">
      <Logo />
      <Links />
    </div>
  );
}

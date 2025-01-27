import { Logo } from "./Logo";
import { Links } from "./Links";

export default function SideNav() {
  return (
    <div className="hidden h-screen py-4 md:block md:px-2 md:min-w-[200px] bg-[#00004B] text-center">
      <Logo />
      <Links />
    </div>
  );
}

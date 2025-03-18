import { Logo } from "@/app/ui/dashboard/Logo";
import { Links } from "@/app/ui/dashboard/Links";

export default function SideNav() {
  return (
    <div
      className="hidden h-screen py-4 md:block md:px-2 md:min-w-[200px] bg-[#00004B] text-center"
      data-test="sidenav"
    >
      <Logo />
      <Links />
    </div>
  );
}

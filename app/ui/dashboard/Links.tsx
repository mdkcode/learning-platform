import { Routes } from "@/app/routes/routes";
import Link from "next/link";
import Icon from "@/app/ui/components/Icon/Icon";

const menu = [
  {
    label: "Dashboard",
    href: Routes.DASHBOARD,
  },
  {
    label: "My courses",
    href: Routes.COURSES,
  },
];

export function Links() {
  return (
    <div className="text-white text-center">
      {menu.map(({ label, href }) => (
        <Link key={label} href={href}>
          <p className="font-medium text-lg my-4">{label}</p>
        </Link>
      ))}
      <Link href={Routes.HOME}>
        <div className="flex justify-center gap-1 items-center mb-2">
          <p className="font-medium text-lg">Exit</p>
          <Icon name="exit" className="text-white" />
        </div>
      </Link>
    </div>
  );
}

import { Routes } from "@/app/routes/routes";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const menu = [
  {
    label: "Home",
    href: Routes.DASHBOARD,
  },
  {
    label: "My courses",
    href: Routes.COURSES,
  },
];

export default function SideNav() {
  return (
    <div className="hidden h-screen py-4 md:block md:px-2 w bg-[#00004B] text-white w-[10%] text-center">
      <h1 className="text-2xl font-bold my-1 bg-gradient-to-r from-orange-400 to-pink-500 inline-block text-transparent bg-clip-text">
        SkillEd
      </h1>
      {menu.map(({ label, href }) => (
        <Link key={label} href={href}>
          <p className="font-medium text-lg my-4">{label}</p>
        </Link>
      ))}
      <Link href={Routes.HOME}>
        <div className="flex justify-center gap-1 items-center">
          <p className="font-medium text-lg my-4">Exit</p>
          <ArrowRightStartOnRectangleIcon className="size-6" />
        </div>
      </Link>
    </div>
  );
}

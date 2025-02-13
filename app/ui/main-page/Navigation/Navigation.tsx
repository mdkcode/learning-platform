"use client";
import Link from "next/link";
import clsx from "clsx";
import { ButtonType } from "@/app/ui/components/Button/utils";
import { Routes } from "@/app/routes/routes";
import Button from "@/app/ui/components/Button/Button";
import { handleSignIn } from "@/app/api/auth/[...nextauth]/auth";

export interface NavigationProps {
  className?: string;
  buttonClassName?: string;
  buttonType?: ButtonType;
}

const Navigation = ({
  className,
  buttonClassName,
  buttonType,
}: NavigationProps) => {
  return (
    <div
      className={clsx(
        "flex flex-row items-center justify-between py-4",
        className
      )}
    >
      <Link href={Routes.HOME}>
        <h4 className="text-2xl font-extrabold">SkillEd</h4>
      </Link>
      <Button
        label="Get started"
        buttonType={ButtonType.NAVIGATION}
        className={buttonClassName}
        onClick={handleSignIn}
      />
    </div>
  );
};

export default Navigation;

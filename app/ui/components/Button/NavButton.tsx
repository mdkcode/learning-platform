"use client";
import { Routes } from "@/app/routes/routes";
import Button from "@/app/ui/components/Button/Button";
import { ButtonType } from "@/app/ui/components/Button/utils";
import { useRouter } from "next/navigation";

export const NavButton = ({
  className,
  buttonType,
  link,
}: {
  className?: string;
  buttonType?: ButtonType;
  link?: string;
}) => {
  const router = useRouter();
  return (
    <Button
      label="Get started"
      buttonType={buttonType ?? ButtonType.NAVIGATION}
      className={className}
      onClick={() => router.push(link ?? Routes.DASHBOARD)}
    />
  );
};

"use client";
import { Routes } from "@/app/routes/routes";
import Button from "@/app/ui/components/Button/Button";
import { ButtonType } from "@/app/ui/components/Button/utils";
import { signIn } from "next-auth/react";

export const NavButton = ({
  className,
  buttonType,
  link,
}: {
  className?: string;
  buttonType?: ButtonType;
  link?: string;
}) => {
  const handleSignIn = () => {
    signIn("google", {
      callbackUrl: link ?? Routes.DASHBOARD, // Redirect after successful login
    });
  };

  return (
    <Button
      label="Get started"
      buttonType={buttonType ?? ButtonType.NAVIGATION}
      className={className}
      onClick={handleSignIn}
    />
  );
};

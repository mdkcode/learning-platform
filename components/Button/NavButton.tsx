"use client";
import Button from "@/components/Button/Button";
import { ButtonType } from "@/components/Button/utils";
import { useRouter } from "next/navigation";

const NavButton = ({
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
      buttonType={buttonType || ButtonType.NAVIGATION}
      className={className}
      onClick={() => router.push(link || "/account")}
    />
  );
};

export default NavButton;

import Link from "next/link";
import NavButton from "../Button/NavButton";
import clsx from "clsx";
import { ButtonType } from "../Button/utils";

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
      <Link href="/">
        <h4 className="text-2xl font-extrabold">SkillEd</h4>
      </Link>
      <NavButton className={buttonClassName} buttonType={buttonType} />
    </div>
  );
};

export default Navigation;

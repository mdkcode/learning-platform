import { ButtonType, defaultButtonClassName } from "./utils";
import clsx from "clsx";

export interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
  buttonType?: ButtonType; // default value - ButtonType.SECONDARY,
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
  buttonType = ButtonType.SECONDARY,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(defaultButtonClassName[buttonType], className)}
    >
      {label}
    </button>
  );
};

export default Button;

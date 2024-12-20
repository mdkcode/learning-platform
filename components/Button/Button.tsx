import { ButtonType, defaultClassName } from "./utils";
import clsx from "clsx";

export interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
  buttonType?: ButtonType;
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
      className={clsx(defaultClassName[buttonType], className)}
    >
      {label}
    </button>
  );
};

export default Button;

import React from "react";
import { IconDictionary } from "./icons";
import clsx from "clsx";

interface IconProps {
  name: keyof typeof IconDictionary;
  size?: string;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = "w-6 h-6",
  color = "text-blue-500",
  className,
}) => {
  const IconComponent = IconDictionary[name];

  return <IconComponent className={clsx(size, color, className)} />;
};

export default Icon;

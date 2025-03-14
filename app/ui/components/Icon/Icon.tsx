import React from "react";
import { IconDictionary, IconName } from "@/app/ui/components/Icon/icons";
import clsx from "clsx";

export interface IconProps {
  name: IconName;
  size?: string;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = "w-6 h-6",
  color = "text-black-500",
  className,
}: IconProps) => {
  const IconComponent = IconDictionary[name];

  return <IconComponent className={clsx(size, color, className)} />;
};

export default Icon;

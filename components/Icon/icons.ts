import LinkIcon from "assets/icons/link-icon.svg";
import { FC, SVGProps } from "react";

export const IconDictionary: { [key: string]: FC<SVGProps<SVGSVGElement>> } = {
  link: LinkIcon,
};

export type IconName = keyof typeof IconDictionary;

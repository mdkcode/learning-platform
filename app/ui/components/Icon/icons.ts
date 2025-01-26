import {
  ArrowRightIcon,
  BeakerIcon,
  LanguageIcon,
  CodeBracketIcon,
  BugAntIcon,
  VariableIcon,
  ArrowRightStartOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export const IconDictionary = {
  link: ArrowRightIcon,
  math: VariableIcon,
  biology: BugAntIcon,
  languages: LanguageIcon,
  chemistry: BeakerIcon,
  code: CodeBracketIcon,
  exit: ArrowRightStartOnRectangleIcon,
  hamburger: Bars3Icon,
  close: XMarkIcon,
};

export type IconName = keyof typeof IconDictionary;

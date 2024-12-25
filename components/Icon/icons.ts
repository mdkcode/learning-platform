import LinkIcon from "assets/icons/link-icon.svg";
import MathIcon from "assets/icons/math-icon.svg";
import ChemistryIcon from "assets/icons/chemistry.svg";
import LanguageIcon from "assets/icons/language.svg";
import CodeIcon from "assets/icons/code.svg";
import BiologyIcon from "assets/icons/biology.svg";

export const IconDictionary = {
  link: LinkIcon,
  math: MathIcon,
  biology: BiologyIcon,
  languages: LanguageIcon,
  chemistry: ChemistryIcon,
  code: CodeIcon,
};

export type IconName = keyof typeof IconDictionary;

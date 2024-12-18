import Image from "next/image";
import LinkIcon from "../../assets/icons/link-icon.svg";

export type LinkProps = {
  href: string;
  label: string;
  className?: string;
};

const Link: React.FC<LinkProps> = ({ href, label, className }) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <a
        href={href}
        className={`underline text-blue-500 font-medium hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
      >
        {label}
      </a>
      <Image src={LinkIcon} alt="" />
    </div>
  );
};

export default Link;
import Icon from "@/app/ui/components/Icon/Icon";

export interface LinkProps {
  href: string;
  label: string;
  className?: string;
  dataCy?: string;
}

const Link: React.FC<LinkProps> = ({ href, label, className, dataCy }) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <a
        href={href}
        className={`underline text-lg text-purple-700 font-medium hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
        data-cy={dataCy}
      >
        {label}
      </a>
      <Icon name="link" />
    </div>
  );
};

export default Link;

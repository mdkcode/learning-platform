import Link from "next/link";
import Icon from "@/app/ui/components/Icon/Icon";
import { IconName } from "@/app/ui/components/Icon/icons";
import { Routes } from "@/app/routes/routes";

export interface CardProps {
  title: string;
  content: string;
  iconName: IconName;
}

const Card = ({ title, content, iconName }: CardProps) => {
  return (
    <div className="w-[400px] h-[400px] bg-white rounded-lg flex flex-col justify-between p-[2rem] pt-[4rem] relative">
      <div className="top-[-15px]  absolute rounded-full p-3 bg-gradient-to-b from-orange-400 to-pink-500">
        <Icon name={iconName} color="text-white" />
      </div>
      <h5 className="text-3xl font-bold text-[#00004B]">{title}</h5>
      <p className="text-lg text-gray-500">{content}</p>
      <Link href={Routes.DASHBOARD} className="text-xl font-bold text-pink-500">
        Get started
      </Link>
    </div>
  );
};

export default Card;

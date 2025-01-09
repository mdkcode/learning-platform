import clsx from "clsx";

export interface StatProps {
  label: string;
  value: string | number;
  className?: string;
}

const Stats = ({ label, value, className }: StatProps) => {
  return (
    <div
      className={clsx(
        "p-4 pr-8 rounded-lg bg-gray-100 inline-block",
        className
      )}
    >
      <p className="font-bold text-gray-500">{label}</p>
      <h4 className="text-3xl font-extrabold text-[#00004B]">{value}</h4>
    </div>
  );
};

export default Stats;

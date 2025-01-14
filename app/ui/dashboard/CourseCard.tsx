import { CourseVideoProps } from "@/app/dashboard/(overview)/VideoList";

export const CourseCard = ({
  title,
  url,
  description,
}: Omit<CourseVideoProps, "id">) => {
  return (
    <div className="w-[400px] inline-block rounded-lg p-5 bg-gradient-to-b bg-gradient-to-b from-gray-100 via-gray-200 to-purple-300">
      <h3 className="text-xl font-bold my-2">{title}</h3>
      <p className="mb-3">{description}</p>
      <video controls width="320" height="240">
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

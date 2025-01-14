import { CourseVideoProps } from "@/app/dashboard/(overview)/VideoList";

export const CourseCard = ({
  title,
  url,
  description,
}: Omit<CourseVideoProps, "id">) => {
  return (
    <div className="inline-block rounded-lg p-4 bg-gradient-to-b from-orange-400 to-pink-500">
      <h3>{title}</h3>
      <p>{description}</p>
      <video controls width="320" height="240">
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

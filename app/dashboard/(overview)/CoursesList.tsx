import { getCourseVideos } from "@/app/api/data";
import { CourseCard } from "@/app/ui/dashboard/CourseCard";

export interface CourseProps {
  id: number;
  title: string;
  url: string;
  description: string;
}

export default async function CoursesList() {
  const videos = await getCourseVideos();
  return (
    <div className="flex gap-5 flex-wrap">
      {videos?.map((video: CourseProps) => (
        <CourseCard key={video.id} {...video} />
      ))}
    </div>
  );
}

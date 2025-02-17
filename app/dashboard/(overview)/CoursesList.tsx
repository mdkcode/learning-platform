import { getCourseList } from "@/app/api/courses/courses.api";
import {
  CourseProps,
  CourseSearchParams,
} from "@/app/api/courses/courses.interface";
import { CourseCard } from "@/app/ui/dashboard/CourseCard";

export default async function CoursesList({ searchQuery }: CourseSearchParams) {
  const videos = await getCourseList(searchQuery);

  return (
    <div className="flex gap-5 flex-wrap">
      {videos?.map((video: CourseProps) => (
        <CourseCard key={video.id} {...video} />
      ))}
    </div>
  );
}

"use client";
import { getCourseList } from "@/app/api/courses/courses.api";
import {
  CourseProps,
  CourseSearchParams,
} from "@/app/api/courses/courses.interface";
import {
  DehydratedState,
  HydrationBoundary,
  useQuery,
} from "@tanstack/react-query";

interface CourseCardsListClientProps extends CourseSearchParams {
  dehydratedState: DehydratedState;
}

export const CourseCardsList = ({
  searchQuery,
  dehydratedState,
}: CourseCardsListClientProps) => {
  const { data: videos } = useQuery({
    queryKey: ["courses", searchQuery],
    queryFn: () => getCourseList(searchQuery),
  });

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="flex gap-5 flex-wrap">
        {videos?.map((video: CourseProps) => (
          <CourseCard key={video.id} {...video} />
        ))}
      </div>
    </HydrationBoundary>
  );
};

export const CourseCard = ({ name, description }: CourseProps) => {
  return (
    <div
      className="w-[400px] inline-block rounded-lg p-5 bg-gradient-to-b bg-gray-200 
      relative cursor-pointer transition-all duration-300 transform 
      hover:scale-105 hover:shadow-lg hover:from-gray-200"
    >
      <h3 className="text-xl font-bold my-2">{name}</h3>
      <p className="mb-8">{description}</p>
      <div className="absolute bottom-3">
        <p className="text-lg text-blue-500">Subscribe</p>
      </div>
    </div>
  );
};

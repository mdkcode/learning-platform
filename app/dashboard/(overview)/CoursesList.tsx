import { getCourseList } from "@/app/api/courses/courses.api";
import { CourseSearchParams } from "@/app/api/courses/courses.interface";
import getQueryClient from "@/app/configs/utils/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { CourseCardsList } from "@/app/ui/dashboard/CourseCard";

export default async function CoursesList({ searchQuery }: CourseSearchParams) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["courses", searchQuery],
    queryFn: () => getCourseList(searchQuery),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <CourseCardsList searchQuery={searchQuery} />
    </HydrationBoundary>
  );
}

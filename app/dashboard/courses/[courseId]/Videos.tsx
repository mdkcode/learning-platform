import { getCourseVideosById } from "@/app/api/courses/courses.api";
import getQueryClient from "@/app/configs/utils/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { VideoList } from "./VideoList";

export const Videos = async ({ id }: { id: string }) => {
  const queryClient = getQueryClient();
  if (id) {
    await queryClient.prefetchQuery({
      queryKey: ["videos", id],
      queryFn: () => getCourseVideosById(id),
    });
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <VideoList id={id} />
    </HydrationBoundary>
  );
};

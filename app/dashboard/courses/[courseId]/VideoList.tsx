"use client";

import { getCourseVideosById } from "@/app/api/courses/courses.api";
import { useQuery } from "@tanstack/react-query";

export const VideoList = ({ id }: { id: string }) => {
  const { data: videos } = useQuery({
    queryKey: ["videos", id],
    queryFn: () => getCourseVideosById(id),
    enabled: Boolean(id),
  });

  return <div>{videos?.map((video) => video.toString())}</div>;
};

"use client";
import { getCourseVideosById } from "@/app/api/courses/courses.api";
import { convertSecondsToMinutes } from "@/app/configs/utils/format";
import { useQuery } from "@tanstack/react-query";

export const VideoList = ({ id }: { id: string }) => {
  const { data: videos } = useQuery({
    queryKey: [`/dashboard/courses/${id}`, id],
    queryFn: () => getCourseVideosById(id),
    enabled: Boolean(id),
  });

  return (
    <div className="space-y-6">
      <p className="text-2xl font-bold">Course Videos</p>
      {videos?.map(({ id: videoId, title, duration, video_url }) => (
        <div
          key={videoId}
          className="bg-white p-4 rounded-lg shadow-md max-w-3xl sm:max-w-4xl md:max-w-5xl border border-gray-200"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-500">
              {`Duration: Approximately ${convertSecondsToMinutes(
                duration
              )} minutes`}
            </p>
          </div>
          <div className="relative w-full h-0 pb-[56.25%] mb-4">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              src={video_url}
              controls
            />
          </div>
        </div>
      ))}
    </div>
  );
};

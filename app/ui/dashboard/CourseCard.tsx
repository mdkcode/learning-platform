"use client";
import {
  getCourseList,
  subscribeToCourseById,
} from "@/app/api/courses/courses.api";
import {
  CourseProps,
  CourseSearchParams,
} from "@/app/api/courses/courses.interface";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export const CourseCardsList = ({ searchQuery }: CourseSearchParams) => {
  const { data: videos } = useQuery({
    queryKey: ["courses", searchQuery],
    queryFn: () => getCourseList(searchQuery),
  });

  return (
    <div className="flex gap-5 flex-wrap">
      {videos?.map((video: CourseProps) => (
        <CourseCard key={video.id} {...video} />
      ))}
    </div>
  );
};

export const CourseCard = ({ name, description, id }: CourseProps) => {
  const { data: session } = useSession();
  const { mutate } = useMutation<
    void,
    Error,
    { courseId: string; subscribedAt: Date; userId: string }
  >({
    mutationFn: subscribeToCourseById,
  });

  const handleSubscribe = () => {
    if (session?.userId)
      mutate({
        courseId: id,
        subscribedAt: new Date(),
        userId: session?.userId,
      });
  };

  return (
    <div
      className="w-[400px] inline-block rounded-lg p-5 bg-gradient-to-b bg-gray-200 
      relative cursor-pointer transition-all duration-300 transform 
      hover:scale-105 hover:shadow-lg hover:from-gray-200"
      onClick={handleSubscribe}
    >
      <h3 className="text-xl font-bold my-2">{name}</h3>
      <p className="mb-8">{description}</p>
      <div className="absolute bottom-3">
        <p className="text-lg text-blue-500">Subscribe</p>
      </div>
    </div>
  );
};

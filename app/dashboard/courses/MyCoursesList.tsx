"use client";
import { getUserSubscribedCourses } from "@/app/api/courses/courses.api";
import { Routes } from "@/app/routes/routes";
import Link from "@/app/ui/components/Link/Link";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export const MyCoursesList = () => {
  const { data: session } = useSession();
  const userId = session?.userId;
  const { data: subscribedCourses, isLoading } = useQuery({
    queryKey: ["courses", userId],
    queryFn: () => getUserSubscribedCourses(userId!),
    enabled: !!userId,
  });

  return (
    <>
      <h1 className="text-xl font-bold mb-6">My courses</h1>
      {isLoading && <p>Loading...</p>}
      <div className="flex flex-col max-w-[50%] gap-4">
        {subscribedCourses?.map((course) => (
          <div
            key={course.id}
            className="flex justify-between bg-white p-4 border rounded-lg"
          >
            <h1 className="text-lg">{course.name}</h1>
            <Link
              label="View the course"
              href={`${Routes.COURSES}/${course.id}`}
              dataCy="course-link"
            />
          </div>
        ))}
      </div>
    </>
  );
};

"use client";
import { getUserCourseSubscriptions } from "@/app/api/courses/courses.api";
import { useSession } from "next-auth/react";
import { useQuery } from "react-query";

export default function Page() {
  const { data: session } = useSession();
  const { data } = useQuery(
    ["subscriptions"],
    () => getUserCourseSubscriptions(session?.userId as string),
    {
      enabled: !!session?.userId,
    }
  );
  console.log(data);
  // const userCourses = await getUserCourseSubscriptions()
  return <>No courses</>;
}

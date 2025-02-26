"use client";
import { getUserCourseSubscriptions } from "@/app/api/courses/courses.api";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();
  const userId = session?.userId;
  const { data: subscriptions } = useQuery({
    queryKey: ["subscriptions", userId],
    queryFn: () => getUserCourseSubscriptions(userId!),
    enabled: !!userId,
  });

  return <></>;
}

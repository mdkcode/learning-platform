"use client";
import { CourseProps } from "@/app/dashboard/(overview)/CoursesList";
import { useEffect, useState } from "react";
import Link from "@/app/ui/components/Link/Link";
import { Routes } from "@/app/routes/routes";

export const CourseCard = ({ id, title, description, url }: CourseProps) => {
  const [subscribedCourses, setSubscribedCourses] = useState<CourseProps[]>(
    JSON.parse(localStorage.getItem("subscriptions") || "[]")
  );
  const isSubscribed = subscribedCourses.some((course) => course.id === id);

  useEffect(() => {
    localStorage.setItem("subscriptions", JSON.stringify(subscribedCourses));
  }, [subscribedCourses]);

  const handleSubscribe = () => {
    setSubscribedCourses((prevSubscriptions) => {
      const newSubscriptions = [...prevSubscriptions];
      if (!newSubscriptions.some((course) => course.id === id)) {
        newSubscriptions.push({ id, title, description, url });
      }
      return newSubscriptions;
    });
  };

  return (
    <div
      className="w-[400px] inline-block rounded-lg p-5 bg-gradient-to-b bg-gray-200 
      relative cursor-pointer transition-all duration-300 transform 
      hover:scale-105 hover:shadow-lg hover:from-gray-200"
      onClick={handleSubscribe}
    >
      <h3 className="text-xl font-bold my-2">{title}</h3>
      <p className="mb-8">{description}</p>
      <div className="absolute bottom-3">
        {isSubscribed ? (
          <Link href={Routes.COURSES} label="Go to my courses" />
        ) : (
          <p className="text-lg text-blue-500">Subscribe</p>
        )}
      </div>
    </div>
  );
};

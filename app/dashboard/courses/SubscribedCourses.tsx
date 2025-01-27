"use client";
import { CourseProps } from "@/app/dashboard/(overview)/CoursesList";

export default function SubscribedCourses() {
  const subscribedCourses = JSON.parse(
    localStorage.getItem("subscriptions") ?? ""
  );

  return (
    <>
      {subscribedCourses && subscribedCourses.length ? (
        subscribedCourses.map(({ id, title }: CourseProps) => (
          <div
            className="w-[400px] mb-4 shadow-md rounded-lg p-5 bg-white cursor-pointer transition-all duration-300 transform 
      hover:scale-105 hover:from-white-200"
            key={id?.toString()}
          >
            <label htmlFor={id?.toString()}>{title}</label>
            <progress
              id="file"
              max="100"
              value="0"
              className="w-full h-2 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg
             [&::-webkit-progress-bar]:bg-slate-300
            [&::-webkit-progress-value]:bg-green-600 [&::-moz-progress-bar]:bg-green-600"
            />
          </div>
        ))
      ) : (
        <p className="text-lg font-bold">No courses added yet..</p>
      )}
    </>
  );
}

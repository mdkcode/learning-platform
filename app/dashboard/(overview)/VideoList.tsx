"use client";
import { CourseCard } from "@/app/ui/dashboard/CourseCard";
import { useEffect, useState } from "react";

export interface CourseVideoProps {
  id: number;
  title: string;
  url: string;
  description: string;
}

export function VideoList() {
  const [videos, setVideos] = useState<CourseVideoProps[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/courseData.json");
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div className="flex gap-5 flex-wrap">
      {videos.map((video) => (
        <CourseCard key={video.id} {...video} />
      ))}
    </div>
  );
}

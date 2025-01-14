"use client";
import { CourseCard } from "@/app/ui/dashboard/CourseCard";
import { useEffect, useState } from "react";

export interface CourseVideoProps {
  id: number;
  title: string;
  url: string;
  description: string;
}

const VideoList = () => {
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
    <div>
      {videos.map((video) => (
        <CourseCard key={video.id} {...video} />
      ))}
    </div>
  );
};

export default VideoList;

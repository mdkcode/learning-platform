import { CourseVideoProps } from "../dashboard/(overview)/CoursesList";

export async function getCourseVideos() {
  try {
    const response = await fetch(
      "https://678df745a64c82aeb11e7a2b.mockapi.io/api/v1/courses/courses"
    );
    const videos: CourseVideoProps[] = await response.json();
    return videos;
  } catch (error) {
    return [];
  }
}

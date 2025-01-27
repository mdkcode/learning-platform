import { CourseProps } from "@/app/dashboard/(overview)/CoursesList";

export async function getCourseVideos(query?: string) {
  try {
    const response = await fetch(
      `https://${process.env.API_SECRET!}.mockapi.io/api/v1/courses/courses`
    );
    const videos: CourseProps[] = await response.json();
    if (query && query.trim() !== "") {
      const lowercasedQuery = query.toLowerCase();
      return videos.filter(({ title, description }) =>
        [title.toLowerCase(), description.toLowerCase()].some((field) =>
          field.includes(lowercasedQuery)
        )
      );
    }
    return videos;
  } catch (error) {
    return [];
  }
}

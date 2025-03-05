export interface CourseSearchParams {
  searchQuery?: string;
}

export interface VideoPageProps {
  params: { courseId: string };
}

export interface CourseProps {
  id: string;
  name: string;
  image_url: string;
  description: string;
  created_at: string;
  duration: number;
}

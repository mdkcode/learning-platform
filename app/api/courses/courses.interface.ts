export interface CourseSearchParams {
  searchQuery?: string;
}

export interface CourseProps {
  id: string;
  name: string;
  image_url: string;
  description: string;
  created_at: string;
  duration: number;
}

export interface VideoProps {
  id: string;
  video_url: string;
  title: string;
  duration: number;
  order: number;
}

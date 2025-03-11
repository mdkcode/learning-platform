import { NextPageProps } from "@/app/api/general/general.interface";
import { Videos } from "@/app/dashboard/courses/[courseId]/Videos";

export default async function Page({ params }: NextPageProps) {
  const { courseId } = await params;
  return <Videos id={courseId} />;
}

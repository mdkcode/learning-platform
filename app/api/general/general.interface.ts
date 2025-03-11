export interface NextPageProps {
  params: Promise<{ [key: string]: string }>;
  searchParams?: Promise<{ [key: string]: string | undefined }>;
}

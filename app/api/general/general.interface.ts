export interface NextPageProps<SlugType = string> {
  params: Promise<{ slug: SlugType }>;
  searchParams?: Promise<{ [key: string]: string | undefined }>;
}

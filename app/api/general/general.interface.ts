export interface NextPageProps<SlugType = string> {
  params: Promise<{ slug: SlugType }>;
  searchParams?: { [key: string]: string | undefined };
}

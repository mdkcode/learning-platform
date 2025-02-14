import { NextPageProps } from "@/app/api/general/general.interface";
import CoursesList from "@/app/dashboard/(overview)/CoursesList";
import { UserGreeting } from "@/app/dashboard/(overview)/UserGreeting";
import Search from "@/app/ui/components/Search/Search";
import { Suspense } from "react";

export default async function Page({ searchParams }: NextPageProps) {
  const searchQuery = searchParams?.search;

  return (
    <main>
      <UserGreeting />
      <h1 className="text-2xl mb-5">Take a look at the available courses</h1>
      <Search />
      <Suspense key={searchQuery} fallback={<p>Loading...</p>}>
        <CoursesList searchQuery={searchQuery} />
      </Suspense>
    </main>
  );
}

import CoursesList from "@/app/dashboard/(overview)/CoursesList";
import { UserGreeting } from "./UserGreeting";
import Search from "./Search";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams?: { search?: string };
}) {
  const searchQueries = await searchParams;

  return (
    <main>
      <UserGreeting />
      <h1 className="text-2xl mb-5">Take a look at the available courses</h1>
      <Search />
      <Suspense key={searchQueries?.search} fallback={<p>Loading...</p>}>
        <CoursesList searchQuery={searchQueries?.search} />
      </Suspense>
    </main>
  );
}

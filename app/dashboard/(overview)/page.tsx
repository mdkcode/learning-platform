import CoursesList from "@/app/dashboard/(overview)/CoursesList";
import { UserGreeting } from "./UserGreeting";
import SearchAndFilter from "./SearchAndFilter";
export default function Page() {
  return (
    <main>
      <UserGreeting />
      <h1 className="text-2xl mb-5">Take a look at the available courses</h1>
      <SearchAndFilter />
      <CoursesList />
    </main>
  );
}

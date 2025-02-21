// import { getCourseList } from "@/app/api/courses/courses.api";
// import { CourseSearchParams } from "@/app/api/courses/courses.interface";
// import getQueryClient from "@/app/configs/utils/get-query-client";
// import Hydrate from "@/app/configs/utils/hydrate-client";
// import { CourseCardsList } from "@/app/ui/dashboard/CourseCard";
// import { dehydrate } from "react-query";

// export default async function CoursesList({ searchQuery }: CourseSearchParams) {
//   const queryClient = getQueryClient();
//   await queryClient.prefetchQuery(["courses", searchQuery], () =>
//     getCourseList(searchQuery)
//   );
//   const dehydratedState = dehydrate(queryClient);
//   // const videos = await getCourseList(searchQuery);

//   return (
//     <Hydrate state={dehydratedState}>
//       <CourseCardsList searchQuery={searchQuery} />
//     </Hydrate>
//   );
// }

import { getCourseList } from "@/app/api/courses/courses.api";
import { CourseSearchParams } from "@/app/api/courses/courses.interface";
import getQueryClient from "@/app/configs/utils/get-query-client";
import { dehydrate } from "react-query";
import { CourseCardsList } from "@/app/ui/dashboard/CourseCard";

export default async function CoursesList({ searchQuery }: CourseSearchParams) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["courses", searchQuery], () =>
    getCourseList(searchQuery)
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <CourseCardsList
      dehydratedState={dehydratedState}
      searchQuery={searchQuery}
    />
  );
}

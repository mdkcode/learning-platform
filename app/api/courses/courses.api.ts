import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/app/configs/firebase/firebase";
import { CourseProps } from "@/app/api/courses/courses.interface";
import { convertTimestampToDateString } from "@/app/configs/utils/format";

export async function getCourseVideos(queryStr?: string) {
  try {
    const coursesRef = collection(db, "courses");
    const coursesQuery = queryStr
      ? query(
          coursesRef,
          where("name", ">=", queryStr),
          where("name", "<=", queryStr + "\uf8ff")
        )
      : coursesRef;
    const querySnapshot = await getDocs(coursesQuery);
    const courses = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      created_at: convertTimestampToDateString(doc.data().created_at),
    }));

    return courses as CourseProps[];
  } catch (error) {
    throw error;
  }
}

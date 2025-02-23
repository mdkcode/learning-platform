import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/app/configs/firebase/firebase";
import { CourseProps } from "@/app/api/courses/courses.interface";
import { convertTimestampToDateString } from "@/app/configs/utils/format";

export async function getCourseList(queryStr?: string) {
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

export async function getUserCourseSubscriptions(userId: string) {
  const subscriptionsRef = collection(db, "subscriptions");
  const subscriptionsQuery = query(
    subscriptionsRef,
    where("userId", "==", userId)
  );
  const querySnapshot = await getDocs(subscriptionsQuery);
  // Get the list of course IDs the user is subscribed to
  const subscribedCourseIds = querySnapshot.docs.map(
    (doc) => doc.data().courseId
  );
  return subscribedCourseIds;
}

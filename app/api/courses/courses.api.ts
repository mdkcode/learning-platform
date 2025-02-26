import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  documentId,
} from "firebase/firestore";
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
  try {
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
  } catch (error) {
    throw error;
  }
}

export async function subscribeToCourseById(data: {
  courseId: string;
  subscribedAt: Date;
  userId: string;
}) {
  try {
    const { courseId, userId } = data;
    const subscriptionsRef = collection(db, "subscriptions");
    const subscriptionsQuery = query(
      subscriptionsRef,
      where("userId", "==", userId),
      where("courseId", "==", courseId)
    );
    const querySnapshot = await getDocs(subscriptionsQuery);
    if (!querySnapshot.empty) {
      throw new Error("You are already subscribed");
    }
    await addDoc(subscriptionsRef, data);
  } catch (error) {
    throw error;
  }
}

export async function getUserSubscribedCourses(userId: string) {
  try {
    const subscribedCourseIds = await getUserCourseSubscriptions(userId);

    if (subscribedCourseIds.length === 0) {
      return [];
    }
    const coursesRef = collection(db, "courses");
    const coursesQuery = query(
      coursesRef,
      where(documentId(), "in", subscribedCourseIds)
    );
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

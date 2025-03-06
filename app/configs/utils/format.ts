import { Timestamp } from "firebase/firestore";

export function convertTimestampToDateString(created_at: Timestamp) {
  return created_at ? created_at.toDate().toISOString() : "";
}

export function convertSecondsToMinutes(seconds: number) {
  const minutes = Math.ceil(seconds / 60);
  return minutes;
}

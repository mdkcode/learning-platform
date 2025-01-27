"use client";
import { useSession } from "next-auth/react";

export function UserGreeting() {
  const { data: session } = useSession();

  return (
    <h1 className="my-5 text-3xl font-bold">
      Welcome, {session?.user?.name ?? "Guest"}
    </h1>
  );
}

"use client";
import { ChangeEvent, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [query, setQuery] = useState(searchParams?.get("search") ?? "");

  const handleSearch = useDebouncedCallback((newQuery: string) => {
    setQuery(newQuery);
    const params = new URLSearchParams(window.location.search);
    params.set("search", newQuery);
    replace(`${pathname}?${params.toString()}`);
  }, 100);

  return (
    <div>
      <input
        type="search"
        placeholder="Search courses..."
        value={query}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleSearch(e.target.value);
        }}
        className="w-full max-w-md p-3 mb-4 border border-gray-300 rounded-lg 
                   focus:outline-none focus:ring-1 transition-all duration-300"
      />
    </div>
  );
}

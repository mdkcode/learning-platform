"use client";
import { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useErrorHandler } from "@/app/configs/hooks/useErrorHandler";

interface ReactQueryProviderProps {
  children?: React.ReactNode;
}

export const ReactQueryProvider: React.FC<ReactQueryProviderProps> = ({
  children,
}) => {
  const onError = useErrorHandler();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // throwOnError(error, query) {
            //   onError(error)
            // },
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}> {children}</QueryClientProvider>
  );
};

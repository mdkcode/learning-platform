"use client";
import { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
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
            onError: onError,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

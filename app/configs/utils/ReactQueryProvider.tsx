"use client";
import { QueryClientProvider, QueryClient } from "react-query";
import { useErrorHandler } from "../hooks/useErrorHandler";

interface ReactQueryProviderProps {
  children?: React.ReactNode;
}

export const ReactQueryProvider: React.FC<ReactQueryProviderProps> = ({
  children,
}) => {
  const onError = useErrorHandler();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        onError: onError,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

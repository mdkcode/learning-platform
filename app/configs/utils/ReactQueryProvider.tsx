"use client";
import { QueryClientProvider, QueryClient } from "react-query";

interface ReactQueryProviderProps {
  children?: React.ReactNode;
}

export const ReactQueryProvider: React.FC<ReactQueryProviderProps> = ({
  children,
}) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

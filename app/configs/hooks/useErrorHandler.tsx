"use client";
import { ToastPortal } from "@/app/ui/components/NotifToast/Toast";

export const useErrorHandler = () => {
  const handleError = (err: unknown) => {
    return (
      <ToastPortal
        message={err?.toString() ?? "An error occured during data retrieval."}
      />
    );
  };

  return handleError;
};

import { ToastPortal } from "@/app/ui/components/NotifToast/Toast";

export const useErrorHandler = () => {
  const handleError = (err: unknown) => {
    return <ToastPortal message={"An error occurred during data retrieval."} />;
  };

  return handleError;
};

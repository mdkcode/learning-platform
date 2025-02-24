"use client";
import { toast } from "react-toastify";

export const useErrorHandler = () => {
  const handleError = (err: Error) => {
    if (err)
      toast.error(err.message, {
        position: "top-center",
      });
  };

  return handleError;
};

"use client";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const DEFAULT_TOAST_DURATION = 3000;

interface ToastProps {
  message: string;
  /**
   If not provided, the default duration is used.
   * {@link DEFAULT_TOAST_DURATION} (3000ms or 3 seconds)
   */
  duration?: number;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({
  message,
  duration = DEFAULT_TOAST_DURATION,
  onClose,
}) => {
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (toastRef.current) {
        toastRef.current.classList.add("animate-fadeOut");
        setTimeout(() => {
          onClose?.();
        }, 500);
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      ref={toastRef}
      className="fixed top-4 left-[50%] bg-red-700 text-white rounded-md p-4 shadow-lg z-50 animate-fadeIn transition-opacity duration-500" // Tailwind classes
    >
      {message}
    </div>
  );
};

export const ToastPortal: React.FC<ToastProps> = ({
  message,
  duration,
  onClose,
}) => {
  const containerRef = useRef<HTMLDivElement>(document.createElement("div"));

  useEffect(() => {
    const container = containerRef.current;
    document.body.appendChild(container);
    return () => {
      if (container.parentNode) {
        document.body.removeChild(container);
      }
    };
  }, []);

  return ReactDOM.createPortal(
    <Toast message={message} duration={duration} onClose={onClose} />,
    containerRef.current
  );
};

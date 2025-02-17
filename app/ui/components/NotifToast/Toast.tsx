import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface ToastProps {
  message: string;
  duration?: number;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, duration = 3000, onClose }) => {
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

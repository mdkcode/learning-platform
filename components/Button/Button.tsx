export type ButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;

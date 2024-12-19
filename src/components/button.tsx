interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-black rounded-full hover:bg-brand-secondary-40 ${className}`}
    >
      <p className=" text-white">{label}</p>
    </button>
  );
};

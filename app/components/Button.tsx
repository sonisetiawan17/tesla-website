'use client';

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  secondary?: boolean;
  transparent?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  secondary,
  transparent,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        py-3
        sm:py-2
        w-full
        sm:w-[300px]
        rounded
        ${secondary ? 'text-black' : 'text-white'}
        ${secondary ? 'bg-[#cfcbd0]' : 'bg-[#323239]'}
        ${transparent && 'bg-[#cfcbd0]/75'}
        font-semibold
     `}
    >
      {label}
    </button>
  );
};

export default Button;

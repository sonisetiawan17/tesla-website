'use client';

interface ButtonSpecsProps {
  title: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  active?: boolean;
  textSmall?: boolean;
}

const ButtonSpecs: React.FC<ButtonSpecsProps> = ({
  title,
  onClick,
  active,
  textSmall,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full
        md:w-[260px]
        py-2
        md:py-1
        border-2
        ${active ? 'border-white' : 'border-neutral-500'}
        font-semibold
        rounded
        transition-all
        duration-300
        ease-in-out
        ${textSmall ? 'text-sm' : 'text-base'}
      `}
    >
      {title}
    </button>
  );
};

export default ButtonSpecs;

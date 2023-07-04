'use client';

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="
        px-4
        hover:text-red-500
        transition
        font-semibold
        cursor-pointer
        tracking-wider
      "
    >
      {label}
    </div>
  );
};

export default MenuItem;

'use client';

interface NavbarScrolledProps {
  title: string;
  menu: string[];
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const NavbarScrolled: React.FC<NavbarScrolledProps> = ({
  title,
  menu,
  onClick,
}) => {
  return (
    <div
      className="
        flex
        flex-row
        items-center
        justify-between
      "
    >
      <div
        className="font-bold text-lg text-white cursor-pointer"
        onClick={onClick}
      >
        <h1>{title}</h1>
      </div>
      <div className="flex flex-row items-center justify-center gap-7">
        <ul
          className="
            hidden
            sm:flex 
            flex-row 
            items-center 
            justify-center 
            gap-6
            text-white
            font-bold
            text-sm
          "
        >
          {menu.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <button
          className="
            px-5 
            py-1 
            bg-gray-800 
            text-sm 
            font-bold 
            rounded 
            text-white
          "
        >
          View Detail
        </button>
      </div>
    </div>
  );
};

export default NavbarScrolled;

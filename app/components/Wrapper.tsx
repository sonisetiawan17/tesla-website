'use client';

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return (
    <div
      className={`
        w-full
        lg:max-w-[1100px]
        md:max-w-[770px]
        mx-auto
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Wrapper;

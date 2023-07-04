'use client';

interface TitleProps {
  label: string;
  large?: boolean;
  medium?: boolean;
  small?: boolean;
  textSecondary?: boolean;
  spacing?: boolean;
  semibold?: boolean;
  className?: string;
}

const Title: React.FC<TitleProps> = ({
  label,
  large,
  medium,
  small,
  textSecondary,
  spacing,
  semibold,
  className,
}) => {
  return (
    <h1
      className={`
        ${semibold ? 'font-semibold' : 'font-medium '}
        ${spacing ? 'tracking-wide' : 'tracking-wider'}
        ${large && 'text-5xl'}
        ${medium && 'text-4xl'}
        ${small && 'text-3xl'}
        ${textSecondary ? 'text-neutral-900' : 'text-neutral-200'}
        ${className}
     `}
    >
      {label}
    </h1>
  );
};

export default Title;

'use client';

import Image from 'next/image';

interface ContentGridSecondaryProps {
  title: string;
  subtitle: string;
  image?: string;
  textBlack?: boolean;
  className?: string;
}

const ContentGridSecondary: React.FC<ContentGridSecondaryProps> = ({
  title,
  subtitle,
  image,
  textBlack,
  className,
}) => {
  return (
    <>
      <Image
        src={`/details/model-3/${image}`}
        alt="Interior"
        height="500"
        width="500"
        className={`w-full ${className}`}
      />
      <div
        className={`
          flex 
          flex-col 
          items-start
          justify-center
          ${textBlack ? 'text-black' : 'text-white'}
          gap-7
          px-7
          lg:px-[60px]
        `}
      >
        <h1 className="font-semibold text-2xl">{title}</h1>
        <p className="font-medium">{subtitle}</p>
      </div>
    </>
  );
};

export default ContentGridSecondary;

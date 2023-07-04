'use client';

import Image from 'next/image';
import { useRef } from 'react';

interface SpecificationProps {
  title?: string;
  subtitle: string;
  imgSource?: string;
  mobileImgWidth?: boolean;
  mobileImgHeight?: boolean;
  image?: boolean;
  textSemiBold?: boolean;
  textBlack?: boolean;
  className?: string;
  additionalSubtitle?: string;
  mobileView?: boolean;
  verticalContent?: boolean;
}

const Specification: React.FC<SpecificationProps> = ({
  title,
  subtitle,
  imgSource,
  mobileImgWidth,
  mobileImgHeight,
  image,
  textSemiBold,
  textBlack,
  className,
  additionalSubtitle,
  mobileView,
  verticalContent,
}) => {
  const titleRef = useRef(null);

  const contentForDesktop = (
    <div
      className={`
        flex
        flex-col
        ${verticalContent ? 'items-start' : 'items-center'}
        ${verticalContent ? 'justify-start' : 'justify-center'}
        ${textBlack ? 'text-neutral-800' : 'text-white'}
        ${className}
      `}
    >
      {image ? (
        <Image
          src={`/details/model-s/${imgSource}`}
          alt="Icon"
          width={`${mobileImgWidth ? '25' : '50'}`}
          height={`${mobileImgHeight ? '25' : '50'}`}
        />
      ) : (
        <h1 className="text-xl sm:text-2xl font-semibold ">{title}</h1>
      )}

      <p className={`text-xs sm:text-sm ${textSemiBold && 'font-semibold'}`}>
        {subtitle}
      </p>
    </div>
  );

  const contentForMobile = (
    <div
      className={`
        flex
        flex-col
        ${verticalContent ? 'items-start' : 'items-center'}
        ${verticalContent ? 'justify-start' : 'justify-center'}
        ${textBlack ? 'text-neutral-800' : 'text-white'}
        ${className}
      `}
    >
      {image ? (
        <Image
          src={`/details/model-s/${imgSource}`}
          alt="Icon"
          width={`${mobileImgWidth ? '25' : '50'}`}
          height={`${mobileImgHeight ? '25' : '50'}`}
        />
      ) : (
        <h1 className="text-xl sm:text-2xl font-semibold ">{title}</h1>
      )}

      <p
        className={`mt-2 text-xs sm:text-sm ${textSemiBold && 'font-semibold'}`}
      >
        {subtitle}
      </p>
      <p className={`text-xs sm:text-sm ${textSemiBold && 'font-semibold'}`}>
        {additionalSubtitle}
      </p>
    </div>
  );

  return <>{mobileView ? contentForMobile : contentForDesktop}</>;
};

export default Specification;

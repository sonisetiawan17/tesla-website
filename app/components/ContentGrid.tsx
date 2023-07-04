'use client';

import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

interface ContentGridProps {
  imgSource?: string;
  videoSource?: string;
  title: string;
  subtitle: string;
  mobileView?: boolean;
  secondLine?: boolean;
  imageContent?: boolean;
  gsapStart?: string;
  gsapEnd?: string;
}

const ContentGrid: React.FC<ContentGridProps> = ({
  imgSource,
  videoSource,
  title,
  subtitle,
  mobileView,
  secondLine,
  imageContent,
  gsapStart,
  gsapEnd,
}) => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const tl = gsap.timeline({
  //     scrollTrigger: imageRef.current,
  //     start: gsapStart,
  //     end: gsapEnd,
  //     markers: true,
  //   });

  //   tl.fromTo(
  //     imageRef.current,
  //     { opacity: 0, y: 50 },
  //     { opacity: 1, y: 0, duration: 0.6 }
  //   ).fromTo(
  //     contentRef.current,
  //     { opacity: 0, y: 50 },
  //     { opacity: 1, y: 0, duration: 0.6 }
  //   );
  // }, [gsapStart, gsapEnd]);

  const contentOnRight = (
    <>
      <Image
        src={`/details/model-s/${imgSource}.jpg`}
        alt="Interior"
        width="500"
        height="500"
        className="w-full"
        ref={imageRef}
      />

      <div
        className="
          px-6
          py-14
          flex
          flex-col
          gap-3
          md:items-start 
          md:justify-center 
          md:pl-20 
          md:gap-3                    
      "
        ref={contentRef}
      >
        <h1 className="font-semibold text-base md:text-sm lg:text-base">
          {title}
        </h1>
        <p className="font-medium md:text-sm lg:text-base">{subtitle}</p>
      </div>
    </>
  );

  const contentOnLeft = (
    <>
      <div
        className="
          hidden
          md:flex
          flex-col
          items-start
          justify-center
          pr-20
          gap-3       
      "
        ref={contentRef}
      >
        <h1 className="font-semibold text-base md:text-sm lg:text-base">
          {title}
        </h1>
        <p className="font-medium md:text-sm lg:text-base">{subtitle}</p>
      </div>

      {imageContent ? (
        <Image
          src={`/details/model-s/${imgSource}.jpg`}
          alt="Interior"
          width="500"
          height="500"
          className="w-full hidden md:block"
          ref={imageRef}
        />
      ) : (
        <video
          src={`/details/model-s/${videoSource}.mp4`}
          autoPlay
          loop
          muted
          className="w-full h-full md:pl-3 hidden md:block"
          ref={imageRef}
        />
      )}
    </>
  );

  const contentOnLeftInMobileView = (
    <>
      {imageContent ? (
        <Image
          src={`/details/model-s/${imgSource}.jpg`}
          alt="Interior"
          width="500"
          height="500"
          className="w-full md:hidden"
          ref={imageRef}
        />
      ) : (
        <video
          src={`/details/model-s/${videoSource}.mp4`}
          autoPlay
          loop
          muted
          className="w-full h-full md:pl-3 md:hidden"
          ref={imageRef}
        />
      )}

      <div
        className="
          px-6
          py-14
          flex
          flex-col
          gap-3
          md:hidden       
        "
        ref={contentRef}
      >
        <h1 className="font-semibold text-base md:text-sm lg:text-base">
          {title}
        </h1>
        <p className="font-medium md:text-sm lg:text-base">{subtitle}</p>
      </div>
    </>
  );

  return (
    <>
      {secondLine && contentOnLeft}
      {mobileView && contentOnLeftInMobileView}
      {!secondLine && !mobileView && contentOnRight}
    </>
  );
};

export default ContentGrid;

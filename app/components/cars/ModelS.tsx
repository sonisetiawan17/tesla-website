'use client';

import Button from '../Button';
import { gsap } from 'gsap';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';
import Title from '../Title';

const ModelS = () => {
  gsap.registerPlugin(ScrollTrigger);

  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const contentRef = useRef(null);

  // useLayoutEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: contentRef.current,
  //     markers: true,
  //     start: 'top 100%',
  //   });

  //   tl.fromTo(
  //     buttonRef.current,
  //     { opacity: 0, y: 30 },
  //     { opacity: 1, y: 0, duration: 1 }
  //   );
  //   tl.fromTo(
  //     titleRef.current,
  //     { opacity: 0, y: -50 },
  //     { opacity: 1, y: 0, duration: 1 }
  //   );
  // }, []);

  return (
    <div className="relative bg-center bg-cover h-screen snap-start model-s-section">
      <div
        className="
          absolute
          md:left-1/2
          md:transform
          md:-translate-x-1/2
          md:top-[150px]
          text-center
          hidden 
          md:block
          lg:hidden
        "
        ref={titleRef}
      >
        <Title label="Model S" medium />
      </div>

      <div
        className="
          absolute
          lg:left-0
          lg:right-0
          lg:bottom-[100px]
          text-center
          hidden 
          lg:block
        "
        ref={titleRef}
      >
        <Title label="Model S" medium />
      </div>

      <div
        className="
          button
          absolute 
          left-1/2 
          transform 
          -translate-x-1/2 
          bottom-[30px] 
          text-center
          sm:space-y-7
          px-5
          sm:px-0
          w-full
        "
      >
        <div ref={buttonRef} className="sm:space-x-10">
          <Button label="Learn More" />
          <Button label="Demo Drive" secondary />
        </div>
      </div>
    </div>
  );
};

export default ModelS;

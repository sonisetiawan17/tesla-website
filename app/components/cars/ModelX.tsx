'use client';

import Button from '../Button';
import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';
import Title from '../Title';

const ModelX = () => {
  return (
    <div className="relative bg-center bg-cover h-screen snap-start model-x-section">
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
      >
        <Title label="Model X" medium />
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
      >
        <Title label="Model X" medium />
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
        <div className="sm:space-x-10">
          <Button label="Learn More" />
          <Button label="Demo Drive" secondary />
        </div>
      </div>
    </div>
  );
};

export default ModelX;

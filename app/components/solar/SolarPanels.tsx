'use client';

import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';
import Button from '../Button';
import Title from '../Title';

const SolarPanels = () => {
  gsap.registerPlugin(ScrollTrigger);

  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  // useLayoutEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: buttonRef.current,
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
    <div
      className="relative bg-center bg-cover h-screen item"
      style={{ backgroundImage: "url('/images/SolarPanels.jpg')" }}
    >
      <div
        className="
          absolute
          left-0
          right-0
          top-[150px]
          text-center
          hidden 
          lg:block
        "
        ref={titleRef}
      >
        <Title label="Solar Panels" medium textSecondary />
        <p className="text-sm mt-2 tracking-wider">
          Lowest Cost Solar Panels in America
        </p>
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
          <Button label="Order Now" secondary transparent />
        </div>
      </div>
    </div>
  );
};

export default SolarPanels;

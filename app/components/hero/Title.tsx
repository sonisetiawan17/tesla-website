'use client';

import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

const Hero = () => {
  let title = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    let timeline = gsap.timeline();

    let ctx = gsap.context(() => {
      timeline.fromTo(
        '.title1',
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 0.8,
          x: 0,
          duration: 0.8,
          delay: 0.1,
          fontStyle: 'italic',
          ease: 'power1.easeinout',
        }
      ),
        timeline.fromTo(
          '.title2',
          {
            opacity: 0,
            x: -100,
          },
          {
            opacity: 0.8,
            x: 0,
            duration: 1,
            ease: 'power1.easeinout',
          }
        ),
        timeline.fromTo(
          '.title3',
          {
            opacity: 0,
            x: -100,
            color: 'white',
          },
          {
            opacity: 0.8,
            x: 0,
            duration: 0.8,
            color: '#cc0000',
            ease: 'power1.easeinout',
          }
        );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      className="
        absolute
        top-1/2
        left-1/2
        transform
        -translate-x-1/2
        -translate-y-1/2
        text-7xl
        lg:text-8xl
        font-extrabold
        space-y-3
        tracking-wider
        italic
        text-center
        font-arial
     "
      ref={title}
    >
      <h1 className="title1">DRIVE</h1>
      <h1 className="title2">EVOLVE</h1>
      <h1 className="text-red-500 title3">CREATE</h1>
    </div>
  );
};

export default Hero;

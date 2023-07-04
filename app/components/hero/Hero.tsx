'use client';

import Title from './Title';
import Video from './Video';

const Hero = () => {
  return (
    <div className="item relative w-full h-screen snap-start text-white">
      <Video />
      <Title />
    </div>
  );
};

export default Hero;

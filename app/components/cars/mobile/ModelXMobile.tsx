'use client';

import Button from '../../Button';
import Title from '../../Title';

const ModelXMobile = () => {
  return (
    <div
      className="snap-start relative bg-center bg-cover h-screen"
      style={{ backgroundImage: "url('/images/modelXMobile.png')" }}
    >
      <div
        className="
          absolute
          left-1/2
          transform
          -translate-x-1/2
          top-[150px]
        "
      >
        <Title label="Model X" medium />
      </div>
      <div
        className="
          absolute 
          left-1/2 
          transform 
          -translate-x-1/2 
          bottom-[50px] 
          text-center
          space-y-5
          sm:space-x-6
          px-5
          sm:px-0
          w-full
        "
      >
        <Button label="Detail" />
        <Button label="Demo Drive" secondary />
      </div>
    </div>
  );
};

export default ModelXMobile;

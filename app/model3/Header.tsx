'use client';

import Title from '../components/Title';
import Specification from '../components/Specification';

const Header = () => {
  return (
    <div className="relative bg-center bg-cover h-screen header-model3-detail">
      <div
        className="
          absolute
          left-0
          right-0
          top-[150px]
          text-center
        "
      >
        <Title
          label="Model 3"
          textSecondary
          semibold
          className="text-4xl md:text-5xl"
        />
      </div>

      <div
        className="
          absolute
          left-0
          right-0
          bottom-[100px]
          text-center
        "
      >
        <div
          className="
            flex
            flex-row
            items-center
            justify-center
            gap-10
            md:gap-20
          "
        >
          <Specification title="3.1s" subtitle="0-60 mph*" />
          <Specification title="333 mi" subtitle="Range (EPA est.)" />
          <Specification title="$32,740†" subtitle="After Tax Credit" />
        </div>
      </div>

      <div
        className="h-12 absolute bottom-0 w-full"
        style={{
          background: 'repeating-linear-gradient(transparent 0%, #000000 100%)',
        }}
      />
    </div>
  );
};

export default Header;

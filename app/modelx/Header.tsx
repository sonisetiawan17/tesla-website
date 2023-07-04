'use client';

import Title from '../components/Title';
import Specification from '../components/Specification';

const Header = () => {
  return (
    <div className="relative bg-center bg-cover h-screen header-modelx-detail">
      <div
        className="
          absolute
          left-0
          right-0
          top-[120px]
          text-center
        "
      >
        <Title
          label="Model X"
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
            justify-between
            md:justify-center
            mx-8
            md:gap-20
          "
        >
          <Specification title="333 mi" subtitle="Range (EPA est.)" />
          <Specification title="2.5 s" subtitle="0-60 mph*" />
          <Specification title="9.9 s" subtitle="1/4 Mile" />
          <div className="hidden lg:block">
            <Specification title="1,020 hp" subtitle="Peak Power" />
          </div>
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

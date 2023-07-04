'use client';

import Title from '../components/Title';
import Specification from '../components/Specification';

const Header = () => {
  return (
    <div className="relative bg-center bg-cover h-screen header-models-detail">
      <div
        className="
          absolute
          left-0
          right-0
          top-[150px]
          text-center
        "
        data-aos="fade-down"
        data-aos-duration={1000}
      >
        <Title
          label="Model S"
          textSecondary
          semibold
          className="text-4xl md:text-5xl"
        />
        <p className="text-base mt-2 tracking-wider font-medium">Plaid</p>
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
          <Specification title="396 mi" subtitle="Range (EPA est.)" />
          <Specification title="1.99 s" subtitle="0-60 mph*" />
          <Specification title="200 mph" subtitle="Top Speed" />
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

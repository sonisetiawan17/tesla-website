'use client';

import Title from '../components/Title';
import Specification from '../components/Specification';

const Header = () => {
  return (
    <div className="relative bg-center bg-cover h-screen header-modely-detail">
      <div
        className="
          absolute
          left-0
          right-0
          top-[150px]
          text-center
        "
      >
        <Title label="Model Y" semibold className="text-4xl md:text-5xl" />
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
            gap-7
            md:gap-20
          "
        >
          <Specification title="76 cu ft" subtitle="Cargo Space" />
          <Specification title="330 mi" subtitle="Range (EPA est.)" />
          <Specification title="$40,240†" subtitle="After Tax Credit" />
        </div>
      </div>
    </div>
  );
};

export default Header;

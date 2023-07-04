'use client';

import CarInformation from '../components/CarInformation';
import Specification from '../components/Specification';
import Wrapper from '../components/Wrapper';

const Acceleration = () => {
  return (
    <>
      <div className="relative bg-center bg-cover h-[520px] acceleration-model3-detail mt-20 lg:mt-0">
        <div
          className="
          absolute
          left-0
          right-0
          bottom-[100px]
          lg:bottom-[50px]
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
            md:gap-30
            lg:gap-60
          "
          >
            <Specification title="3.1s" subtitle="0-60 mph*" />
            <Specification title="152 mph" subtitle="Top Speed" />
            <Specification title="AWD" subtitle="Dual Motor" />
          </div>
        </div>
        <div
          className="absolute bottom-0 h-20 lg:h-24 w-full"
          style={{
            background:
              'repeating-linear-gradient(transparent 0%, #000000 100%)',
          }}
        />
      </div>
      <Wrapper>
        <div className="pt-5 pb-32 lg:pt-10 text-white">
          <CarInformation
            subtitle="Quick Acceleration"
            information="Accelerate from 0-60 mph* in as little as 3.1 seconds with an optional Performance upgrade—featuring Dual Motor AWD, upgraded brakes and more."
          />
        </div>
      </Wrapper>
    </>
  );
};

export default Acceleration;

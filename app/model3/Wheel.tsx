'use client';

import Specification from '../components/Specification';
import { LuSnowflake } from 'react-icons/lu';
import { MdSpeed } from 'react-icons/md';
import Wrapper from '../components/Wrapper';
import CarInformation from '../components/CarInformation';

const Wheel = () => {
  return (
    <>
      <div className="relative bg-center bg-cover h-[500px] wheels-model3-detail">
        <div
          className="absolute top-0 h-20 lg:h-28 w-full"
          style={{
            background:
              'repeating-linear-gradient(0deg, transparent 0%, #000000 100%)',
          }}
        />
        <div
          className="
        absolute
        top-1/2
        right-0
        transform
        -translate-y-1/2
        "
        >
          <div
            className="
              hidden
              lg:flex
              lg:flex-col
              lg:items-start
              lg:gap-24
            "
          >
            <Specification
              title="2"
              subtitle="Independent Motors"
              className="w-[200px] space-y-2"
              verticalContent
              textSemiBold
            />
            <div className="text-white text-4xl">
              <LuSnowflake />
              <Specification
                subtitle="All-Weather Control"
                className="w-[200px] space-y-2"
                verticalContent
                textSemiBold
              />
            </div>
            <div className="text-white text-2xl">
              <MdSpeed />
              <Specification
                subtitle="Instant Torque Response"
                className="w-[200px] space-y-2"
                verticalContent
                textSemiBold
              />
            </div>
          </div>
        </div>
      </div>
      <Wrapper>
        <div className="pt-5 pb-32 lg:pt-10 text-white">
          <CarInformation
            subtitle="Dual Motor AWD"
            information="Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control."
          />
        </div>
      </Wrapper>
    </>
  );
};

export default Wheel;

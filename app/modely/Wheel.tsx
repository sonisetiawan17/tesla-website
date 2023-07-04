'use client';

import CarInformation from '../components/CarInformation';
import Specification from '../components/Specification';
import Title from '../components/Title';
import Wrapper from '../components/Wrapper';

const Wheel = () => {
  return (
    <>
      <div className="relative bg-center bg-cover h-[500px] wheel-modely-detail mt-10">
        <div
          className="
            absolute
            left-0
            right-0
            bottom-[50px]
            text-center
          "
        >
          <div
            className="
              hidden
              lg:flex
              flex-row
              items-center
              justify-center
              gap-10
              md:gap-20
              lg:max-w-[1000px]
              lg:mx-auto
            "
          >
            <Specification
              title="2"
              subtitle="Independent motors digitally control torque to the front and rear wheels"
            />
            <Specification
              title="3.5 s"
              subtitle="Quickest acceleration—from zero to 60 mph* in as little as 3.5 seconds"
            />
            <Specification
              title="3"
              subtitle="Capable in rain, snow, mud and off-road with superior traction control"
            />
          </div>

          {/* Mobile View */}
          <div
            className="
              flex
              flex-row
              items-start
              justify-center
              gap-10
              md:gap-20
              lg:hidden
            "
          >
            <Specification
              title="2"
              subtitle="Independent"
              additionalSubtitle="Motors"
              textSemiBold
              mobileView
            />
            <Specification
              title="3.5 s"
              subtitle="0-60 mph*"
              textSemiBold
              mobileView
            />
            <Specification
              title="3"
              subtitle="All Weather"
              additionalSubtitle="Control"
              textSemiBold
              mobileView
            />
          </div>
        </div>
      </div>
      <Wrapper className="my-10">
        <CarInformation
          title="All Wheel Drive"
          subtitle="Dual Motor"
          information="Tesla All-Wheel Drive has two ultra-responsive, independent electric motors that digitally control torque to the front and rear wheels—for far better handling, traction and stability control. Model Y is capable in rain, snow, mud and off-road."
        />
      </Wrapper>
    </>
  );
};

export default Wheel;

'use client';

import Specification from '../components/Specification';
import CarInformation from '../components/CarInformation';
import Wrapper from '../components/Wrapper';

const Range = () => {
  return (
    <>
      <div
        className="
          relative 
          bg-center 
          bg-cover 
          w-full 
          h-[350px] 
          md:h-[550px] 
          range-model3-detail 
          md:mt-16"
      >
        <div
          className="
            absolute
            top-1/2
            left-[50px]
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
              lg:gap-16
            "
          >
            <Specification
              title="333 mi"
              subtitle="Range (EPA est.)"
              className="w-[300px] space-y-2"
              textBlack
              verticalContent
            />
            <Specification
              title="15 min"
              subtitle="Recharge up to 147 mi of range"
              className="w-[300px] space-y-2"
              textBlack
              verticalContent
            />
            <Specification
              title="45,000 +"
              subtitle="Global Superchargers"
              className="w-[300px] space-y-2"
              textBlack
              verticalContent
            />
          </div>
        </div>

        {/* ---------------------- Mobile View ---------------------- */}
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
            lg:hidden
            flex
            flex-row
            items-center
            justify-center
            gap-10
            md:gap-20
          "
          >
            <Specification
              title="333 mi"
              subtitle="Range"
              additionalSubtitle="(EPA est.)"
              textBlack
              mobileView
            />
            <Specification
              title="15 min"
              subtitle="Recharge up to"
              additionalSubtitle="147 mi of range"
              textBlack
              mobileView
            />
            <Specification
              title="45,000 +"
              subtitle="Global"
              additionalSubtitle="Supercharge"
              textBlack
              mobileView
            />
          </div>
        </div>
      </div>

      <Wrapper>
        <div className="pt-5 pb-32 lg:pt-10">
          <CarInformation
            title="Go Anywhere"
            subtitle="Future of Driving"
            information="Model 3 is fully electric with 333 miles of estimated range, so you never need to visit a gas station again. You can charge at home anytime, or plug in on the road with access to over 45,000 Superchargers worldwide."
          />
        </div>
      </Wrapper>
    </>
  );
};

export default Range;

'use client';

import Specification from '../components/Specification';
import CarInformation from '../components/CarInformation';
import Wrapper from '../components/Wrapper';

const Autopilot = () => {
  return (
    <>
      <div className="relative bg-center bg-cover w-full h-[350px] md:h-[550px] autopilot-model3-detail md:mt-16">
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
              title="360°"
              subtitle="Degrees of Visibility"
              className="w-[300px] space-y-2"
              verticalContent
            />
            <Specification
              imgSource="vision.png"
              subtitle="Tesla vision"
              className="w-[300px] space-y-2"
              verticalContent
              image
            />
            <Specification
              title="250 m"
              subtitle="of Powerful Visual Processing"
              className="w-[300px] space-y-2"
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
              title="360°"
              subtitle="Degrees"
              additionalSubtitle="of Visibility"
              textBlack
              mobileView
            />
            <Specification
              imgSource="vision.png"
              subtitle="Tesla"
              additionalSubtitle="Vision"
              textBlack
              mobileView
              image
              mobileImgWidth
              mobileImgHeight
            />
            <Specification
              title="250 m"
              subtitle="of Powerful"
              additionalSubtitle="Visual Processing"
              textBlack
              mobileView
            />
          </div>
        </div>
      </div>

      <Wrapper>
        <div className="pt-5 pb-32 lg:pt-10 text-white">
          <CarInformation
            title="Autopilot"
            subtitle="Future of Driving"
            information="Autopilot's advanced safety and convenience features are designed to assist you with the most burdensome parts of driving. Autopilot enables your vehicle to steer, accelerate and brake automatically within its lane. Enhanced Autopilot and Full Self-Driving capability introduce additional features."
          />
        </div>
      </Wrapper>
    </>
  );
};

export default Autopilot;

'use client';

import Specification from '../components/Specification';
import CarInformation from '../components/CarInformation';
import Wrapper from '../components/Wrapper';

const Autopilot = () => {
  return (
    <>
      <div className="relative mt-7 bg-center bg-cover w-full h-[350px] md:h-[550px] autopilot-detail md:mt-16">
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
              subtitle="Rear, side and forward-facing cameras provide maximum visibility"
              className="w-[300px] space-y-2"
              textBlack
              verticalContent
            />
            <Specification
              title="250 m"
              subtitle="Powerful visual processing at up to 250 meters of range"
              className="w-[300px] space-y-2"
              textBlack
              verticalContent
            />
            <Specification
              imgSource="tesla-vision.png"
              subtitle="Tesla Vision detects nearby cars, helps prevent potential collisions and assists with parking"
              className="w-[300px] space-y-2"
              textBlack
              verticalContent
              image
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
              title="250 m"
              subtitle="of Powerful"
              additionalSubtitle="Visual Processing"
              textBlack
              mobileView
            />
            <Specification
              imgSource="tesla-vision.png"
              subtitle="Tesla"
              additionalSubtitle="Vision"
              textBlack
              mobileView
              image
              mobileImgWidth
              mobileImgHeight
            />
          </div>
        </div>
      </div>

      <Wrapper>
        <div className="pt-5 pb-32 lg:pt-10">
          <CarInformation
            title="Autopilot"
            subtitle="Future of Driving"
            information="Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly."
          />
        </div>
      </Wrapper>
    </>
  );
};

export default Autopilot;

'use client';

import Specification from '../components/Specification';
import CarInformation from '../components/CarInformation';
import Wrapper from '../components/Wrapper';

const Autopilot = () => {
  return (
    <>
      <div className="relative bg-center bg-cover w-full h-[350px] md:h-[550px] autopilot-detail">
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
              textSemiBold
            />
            <Specification
              title="250 m"
              subtitle="Powerful visual processing at up to 250 meters of range"
              className="w-[300px] space-y-2"
              textBlack
              verticalContent
              textSemiBold
            />
            <Specification
              imgSource="tesla-vision.png"
              subtitle="Tesla Vision detects nearby cars, helps prevent potential collisions and assists with parking"
              className="w-[300px] space-y-2"
              textBlack
              verticalContent
              textSemiBold
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
              textSemiBold
            />
            <Specification
              title="250 m"
              subtitle="of Powerful"
              additionalSubtitle="Visual Processing"
              textBlack
              mobileView
              textSemiBold
            />
            <Specification
              imgSource="tesla-vision.png"
              subtitle="Tesla"
              additionalSubtitle="Vision"
              textBlack
              mobileView
              textSemiBold
              image
              mobileImgWidth
              mobileImgHeight
            />
          </div>
        </div>
      </div>

      <Wrapper className="py-14">
        <CarInformation
          title="Autopilot"
          subtitle="Future of Driving"
          information="Autopilot's advanced safety and convenience features are designed to assist you with the most burdensome parts of driving."
        />
      </Wrapper>
    </>
  );
};

export default Autopilot;

'use client';

import CarInformation from '../components/CarInformation';
import Specification from '../components/Specification';
import Wrapper from '../components/Wrapper';
import { AiOutlineWifi } from 'react-icons/ai';
import { IoCarSportSharp } from 'react-icons/io5';
import ContentGridSecondary from '../components/ContentGridSecondary';

const Interior = () => {
  return (
    <>
      <div
        className="
          relative 
          bg-center 
          bg-cover 
          md:h-[520px] 
          h-[400px]
          interior-modely-detail 
        "
      >
        <div
          className="
            absolute
            top-1/2
            right-[50px]
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
              lg:gap-12
            "
          >
            <Specification
              title="15 min"
              subtitle="A touchscreen display designed to improve over time"
              className="w-[280px] space-y-2"
              verticalContent
              textSemiBold
            />
            <div className="text-white text-4xl">
              <AiOutlineWifi />
              <Specification
                subtitle="Over-the-air software updates introduce new features, functionality and performance"
                className="w-[280px] space-y-2"
                verticalContent
                textSemiBold
              />
            </div>
            <div className="text-white text-2xl">
              <IoCarSportSharp />
              <Specification
                subtitle="An expansive Glass Roof provides more headroom and UV protection"
                className="w-[280px] space-y-2"
                verticalContent
                textSemiBold
              />
            </div>
          </div>
        </div>

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
              justify-between
              md:justify-center
              mx-8
              md:gap-14
              text-white
            "
          >
            <Specification
              title="15 min"
              subtitle="Touchscreen"
              additionalSubtitle="Display"
              mobileView
              textSemiBold
            />
            <div className="text-white text-4xl flex flex-col items-center">
              <AiOutlineWifi />
              <Specification
                subtitle="Over-the-air"
                additionalSubtitle="Software"
                mobileView
                textSemiBold
              />
            </div>
            <div className="text-white text-2xl flex flex-col items-center">
              <IoCarSportSharp />
              <Specification
                subtitle="All Glass"
                additionalSubtitle="Roof"
                mobileView
                textSemiBold
              />
            </div>
          </div>
        </div>
      </div>

      <Wrapper>
        <div className="py-14">
          <CarInformation
            title="Interior"
            subtitle="Built Around the Driver"
            information="With an elevated seating position and low dash, the driver has a commanding view of the road ahead. The interior of Model Y is simple and clean, with a 15-inch touch screen, immersive sound system and an expansive all-glass roof that creates extra headroom and provides a seamless view of the sky."
          />
        </div>

        <div
          className="
            md:grid 
            md:grid-cols-[50%,1fr] 
            space-y-7
          "
        >
          <ContentGridSecondary
            image="Model-Y-Interior-GlassRoof.avif"
            title="Panoramic Views, Quiet Ride"
            subtitle="Our all-glass roof makes the cabin feel open and airy, complete with extra headroom and unobstructed views of land and sky. Layers of acoustic glass provide a quiet ride as well as protection from glare, heat and UV rays—even on hot days."
            textBlack
          />
        </div>
      </Wrapper>
    </>
  );
};

export default Interior;

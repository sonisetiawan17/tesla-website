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
          h-[520px] 
          interior-model3-detail 
        "
      >
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
            <div className="text-white text-4xl">
              <AiOutlineWifi />
              <Specification
                subtitle="Over-the-air Updates"
                className="w-[200px] space-y-2"
                verticalContent
                textSemiBold
              />
            </div>
            <Specification
              title="15 min"
              subtitle="Touchscreen Display"
              className="w-[200px] space-y-2"
              verticalContent
              textSemiBold
            />
            <div className="text-white text-2xl">
              <IoCarSportSharp />

              <Specification
                subtitle="All-Glass Roof"
                className="w-[200px] space-y-2"
                verticalContent
                textSemiBold
              />
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 h-20 lg:h-24 w-full -mt-[94px]"
          style={{
            background:
              'repeating-linear-gradient(transparent 0%, #000000 100%)',
          }}
        />
      </div>

      <Wrapper>
        <div className="pt-5 pb-32 lg:pt-10 text-white">
          <CarInformation
            subtitle="Built Around the Driver"
            information="The inside of Model 3 is unlike any other vehicle with unrivaled technology, premium materials and plenty of legroom."
          />
        </div>

        <div
          className="
            lg:grid 
            lg:grid-cols-[60%,1fr] 
            space-y-7
          "
        >
          <ContentGridSecondary
            image="Model-3-Interior-Grid-1.jpg"
            title="Glass Roof"
            subtitle="The expansive Glass Roof in Model 3 provides passengers with a
            brighter, more spacious experience—and a seamless view of the sky."
          />
          <ContentGridSecondary
            image="Model-3-Interior-Grid-2.jpg"
            title="All-Weather Comfort"
            subtitle="Enhance comfort and convenience with heated seats, side mirrors and steering wheel."
            className="pt-20"
          />
          <ContentGridSecondary
            image="Model-3-Interior-Grid-3.jpg"
            title="Sublime Sound"
            subtitle="Our premium audio system features 14 speakers, including a subwoofer and dual amplifiers, for interior sound dynamics comparable to a recording studio."
          />
        </div>
      </Wrapper>
    </>
  );
};

export default Interior;

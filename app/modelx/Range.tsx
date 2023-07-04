'use client';

import { useEffect, useRef } from 'react';
import Specification from '../components/Specification';
import Wrapper from '../components/Wrapper';
import CarInformation from '../components/CarInformation';
import Image from 'next/image';

const Range = () => {
  return (
    <div className="lg:grid lg:grid-cols-[75%,1fr] mt-20">
      <div className="relative">
        <Image
          src="/details/model-x/Model-X-Range-Hero.jpg"
          alt="Model X"
          width={500}
          height={500}
          className="w-full h-[400px] lg:h-full object-cover"
        />
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
              lg:flex-row
              lg:items-center
              lg:justify-center
              lg:gap-12
              lg:text-white
            "
          >
            <Specification
              title="384 mi"
              subtitle="Go anywhere with up to 348 miles of estimated range on a single charge"
              className="space-y-2 w-[250px]"
              textSemiBold
            />
            <Specification
              title="15 min"
              subtitle="Recharge up to 175 miles in 15 minutes with the latest Supercharger technology"
              className="space-y-2 w-[250px]"
              textSemiBold
            />
            <Specification
              title="45,000+"
              subtitle="Superchargers placed along popular routes"
              className="space-y-2 w-[250px]"
              textSemiBold
            />
          </div>

          {/* --------------- Mobile Device --------------- */}
          <div
            className="
              lg:hidden 
              flex
              flex-row
              items-center
              justify-between
              lg:justify-center
              mx-8
              lg:gap-20
              text-white
            "
          >
            <Specification
              title="384 mi"
              subtitle="Range"
              additionalSubtitle="(EPA est.)"
              textSemiBold
              mobileView
            />
            <Specification
              title="15 min"
              subtitle="Recharge up to"
              additionalSubtitle="175 miles"
              textSemiBold
              mobileView
            />
            <Specification
              title="45,000+"
              subtitle="Global"
              additionalSubtitle="Superchargers"
              textSemiBold
              mobileView
            />
          </div>
        </div>
      </div>

      <div className="hidden lg:block bg-white p-8 md:px-10 md:pt-16">
        <p className="font-medium text-lg md:text-xl">Range</p>
        <h1 className="font-semibold text-xl md:text-3xl md:mt-1 tracking-wider">
          Go Anywhere
        </h1>
        <p className="font-medium mt-3 md:mt-10">
          With up to 348 miles of estimated range and access to the world’s
          largest and most powerful fast charging network, you’ll spend less
          time plugged in and more time on the road.
        </p>
      </div>

      <div className="lg:hidden bg-white md:mt-16 pt-8">
        <Wrapper>
          <CarInformation
            title="Range"
            subtitle="Go Anywhere"
            information="With up to 405 miles of estimated range and access to the world’s largest and most powerful fast charging network, you’ll spend less time plugged in and more time on the road."
          />
        </Wrapper>
      </div>
    </div>
  );
};

export default Range;

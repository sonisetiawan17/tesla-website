'use client';

import Specification from '../components/Specification';
import Wrapper from '../components/Wrapper';
import CarInformation from '../components/CarInformation';
import Image from 'next/image';

const Utility = () => {
  return (
    <div className="lg:grid lg:grid-cols-[1fr,73%] mt-20">
      <div className="hidden lg:block bg-white p-8 md:px-10 md:pt-16">
        <p className="font-medium text-lg md:text-xl">Utility</p>
        <h1 className="font-semibold text-xl md:text-3xl md:mt-1 tracking-wider">
          Even More Capable
        </h1>
        <p className="font-medium mt-3 md:mt-10">
          With ample storage and 5,000 lbs of towing capacity, Model X is built
          for maximum utility. Front doors open and close automatically, Falcon
          Wing rear doors allow for easier loading and a trailer hitch comes
          standard, so you can bring your gear with you wherever you go.
        </p>
      </div>

      <div className="relative">
        <Image
          src="/details/model-x/Model-X-Utility-Hero.jpg"
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
              title="92 ft³"
              subtitle="Up to 92 ft³ of storage"
              className="space-y-2 w-[250px]"
              textSemiBold
            />
            <Specification
              title="5,000 lbs"
              subtitle="Tow up to 5,000 lbs"
              className="space-y-2 w-[250px]"
              textSemiBold
            />
            <Specification
              title="Doors"
              subtitle="Falcon Wing Dors"
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
              title="92 ft³"
              subtitle="Up to 92 ft³"
              additionalSubtitle="of storage"
              textSemiBold
              mobileView
            />
            <Specification
              title="5,000 lbs"
              subtitle="Tow up to"
              additionalSubtitle="5,000 lbs"
              textSemiBold
              mobileView
            />
            <Specification
              title="Doors"
              subtitle="Falcon Wing"
              additionalSubtitle="Doors"
              textSemiBold
              mobileView
            />
          </div>
        </div>
      </div>

      <div className="lg:hidden bg-white md:mt-16 pt-4 pb-12">
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

export default Utility;

'use client';

import Wrapper from '../components/Wrapper';
import CarInformation from '../components/CarInformation';
import Image from 'next/image';

const Safety = () => {
  return (
    <>
      <div className="lg:grid lg:grid-cols-[73%,1fr]">
        <div className="relative pt-10 lg:pt-0">
          <Image
            src="/details/model-y/Safety-Model-Y.avif"
            alt="Model X"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="block bg-white p-6 lg:px-10 md:pt-16">
          <p className="font-medium text-lg">Safety</p>
          <h1 className="font-bold text-2xl md:text-3xl md:mt-1 tracking-wider">
            Designed for Safety
          </h1>
          <p className="font-medium mt-3 lg:mt-10 text-neutral-500">
            Safety is the most important part of every Tesla. We design our
            vehicles to exceed safety standards.
          </p>

          <h1 className="mt-3 md:mt-5 font-lg font-bold">5-Star Rating</h1>
          <p className="font-medium text-neutral-500">
            Model Y achieved NHTSA 5-star safety ratings in every category and
            subcategory.
          </p>

          <h1 className="mt-3 md:mt-5 font-lg font-bold">Top Safety Pick+</h1>
          <p className="font-medium text-neutral-500">
            Model Y received the IIHS Top Safety Pick+ award, with top ratings
            in all crashworthiness and front crash prevention categories.
          </p>
        </div>
      </div>

      <Wrapper className="mt-3 md:mt-16 lg:mt-0">
        <CarInformation
          title="Utility"
          subtitle="A Place For Everything"
          information="Model Y provides maximum versatility—able to carry 7 passengers and their cargo. Each second row seat folds flat independently, creating flexible storage for skis, furniture, luggage and more. The liftgate opens to a low trunk floor that makes loading and unloading easy and quick."
        />
      </Wrapper>
    </>
  );
};

export default Safety;

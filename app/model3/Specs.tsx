'use client';

import { useState } from 'react';
import Wrapper from '../components/Wrapper';
import {
  model3PerformanceCharging,
  model3PerformanceDimension,
  model3PerformanceDrive,
  model3PerformanceWarranty,
  model3RangeCharging,
  model3RangeDimension,
  model3RangeDrive,
  model3RangeWarranty,
  model3WheelCharging,
  model3WheelDimension,
  model3WheelDrive,
  model3WheelWarranty,
} from '../utils/model3specs';
import Image from 'next/image';

const Specs = () => {
  const [tabActiveOne, setTabActiveOne] = useState(true);
  const [tabActiveTwo, setTabActiveTwo] = useState(false);
  const [tabActiveThree, setTabActiveThree] = useState(false);

  const buttonOneHandler = () => {
    setTabActiveOne(true);
    setTabActiveTwo(false);
    setTabActiveThree(false);
  };

  const buttonTwoHandler = () => {
    setTabActiveTwo(true);
    setTabActiveOne(false);
    setTabActiveThree(false);
  };

  const buttonThreeHandler = () => {
    setTabActiveThree(true);
    setTabActiveTwo(false);
    setTabActiveOne(false);
  };

  return (
    <Wrapper>
      <div className="lg:grid lg:grid-cols-[1fr,690px] md:mt-24">
        <div className="mx-4 lg:mx-0 py-2 text-white sticky">
          <h1 className="font-semibold text-2xl md:text-3xl">
            Model 3 <span className="font-medium">Specs</span>
          </h1>
        </div>
        <div
          className={`
            relative
            flex
            flex-row
            items-center
            md:w-fit
            md:mx-6
            md:justify-between
            font-semibold
            text-sm
            border-b
            border-white
            w-full
            py-2
            lg:mx-0
            text-neutral-300
            md:mt-10
          `}
        >
          <button
            onClick={buttonOneHandler}
            className={`w-[230px] ${
              tabActiveOne ? 'text-white' : 'text-neutral-300'
            }`}
          >
            Performance
          </button>
          <button
            onClick={buttonTwoHandler}
            className={`w-[230px] ${
              tabActiveTwo ? 'text-white' : 'text-neutral-300'
            }`}
          >
            Long Range AWD
          </button>
          <button
            onClick={buttonThreeHandler}
            className={`w-[230px] ${
              tabActiveThree ? 'text-white' : 'text-neutral-300'
            }`}
          >
            Real-Wheel Drive
          </button>

          <div
            className={`
              absolute
              ${tabActiveOne && 'left-0'}
              ${tabActiveTwo && 'md:left-[230px]'}
              ${tabActiveThree && 'md:left-[460px]'}
              -bottom-[1px] 
              md:w-[234px] 
              h-[4px] 
              bg-white
              transition-all
              duration-500
              ease-in-out
            `}
          />
        </div>
      </div>

      <div className="text-white">
        {tabActiveOne && (
          <>
            <div
              className="
                py-10 
                mt-2 
                border-b 
                border-b-neutral-700 
                mx-4 
                md:mx-0
              "
            >
              <h1 className="font-bold text-xl">Drive</h1>
              <div
                className="
                  grid 
                  grid-cols-2
                  gap-y-10
                  md:flex 
                  md:flex-row 
                  lg:gap-14 
                  lg:justify-normal 
                  md:justify-between 
                  md:gap-5 
                  mt-8
                "
              >
                {model3PerformanceDrive.map((item) => (
                  <div key={item.title} className="md:w-[170px]">
                    <h1 className="font-bold">{item.title}</h1>
                    <p className="font-medium text-sm md:text-base">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="
                py-10 
                mt-2 
                border-b 
                border-b-neutral-700 
                mx-4 
                md:mx-0
              "
            >
              <h1 className="font-bold text-xl">Dimensions</h1>
              <div
                className="
                  md:grid 
                  md:grid-cols-2 
                  lg:grid-cols-[680px,1fr] 
                  mt-8
                "
              >
                <Image
                  src="/details/model-3/Model-3-Specs-Performance.jpg"
                  alt="Tesla Model 3"
                  width={500}
                  height={500}
                  className="bg-cover block md:hidden my-10"
                />

                <div
                  className="
                    grid 
                    grid-cols-2 
                    gap-7 
                    md:gap-0 
                    md:flex 
                    md:flex-wrap 
                    md:justify-between
                  "
                >
                  {model3PerformanceDimension.map((item) => (
                    <div
                      key={item.title}
                      className="lg:w-[200px] md:w-[150px] pb-[35px]"
                    >
                      <h1 className="font-bold">{item.title}</h1>
                      <p className="font-medium text-sm md:text-base">
                        {item.subtitle}
                      </p>
                      <p className="font-medium text-sm md:text-base">
                        {item.additionalSubtitle}
                      </p>
                    </div>
                  ))}
                </div>

                <Image
                  src="/details/model-3/Model-3-Specs-Performance.jpg"
                  alt="Tesla Model 3"
                  width={500}
                  height={500}
                  className="bg-cover hidden md:block"
                />
              </div>
            </div>

            <div
              className="
                py-10 
                border-b 
                border-b-neutral-700 
                mx-4 md:mx-0
              "
            >
              <h1 className="font-bold text-xl">Charging</h1>
              <div
                className="
                  grid 
                  grid-cols-2 
                  gap-y-7 
                  md:gap-y-0 gap-7 
                  md:flex md:flex-row 
                  md:gap-16 pt-8
                "
              >
                {model3PerformanceCharging.map((item) => (
                  <div key={item.title} className="md:w-[190px]">
                    <h1 className="font-bold">{item.title}</h1>
                    <p className="font-medium text-sm md:text-base">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="
                py-10 
                border-b 
                border-b-neutral-700 
                mx-4 
                md:mx-0
              "
            >
              <h1 className="font-bold text-xl">Warranty</h1>
              <div
                className="
                  grid 
                  grid-cols-2 
                  gap-7 
                  md:flex 
                  md:flex-row 
                  md:gap-16 pt-8
                "
              >
                {model3PerformanceWarranty.map((item) => (
                  <div key={item.title} className="md:w-[190px]">
                    <h1 className="font-bold">{item.title}</h1>
                    <p className="font-medium text-sm md:text-base">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {tabActiveTwo && (
          <>
            <div
              className="
                py-10 
                mt-2 
                border-b 
                border-b-neutral-700 
                mx-4 
                md:mx-0
              "
            >
              <h1 className="font-bold text-xl">Drive</h1>
              <div
                className="
                  grid 
                  grid-cols-2
                  gap-y-10
                  md:flex 
                  md:flex-row 
                  lg:gap-14 
                  lg:justify-normal 
                  md:justify-between 
                  md:gap-5 
                  mt-8
                "
              >
                {model3RangeDrive.map((item) => (
                  <div key={item.title} className="md:w-[170px]">
                    <h1 className="font-bold">{item.title}</h1>
                    <p className="font-medium text-sm md:text-base">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="
                py-10 
                mt-2 
                border-b 
                border-b-neutral-700 
                mx-4 
                md:mx-0
              "
            >
              <h1 className="font-bold text-xl">Dimensions</h1>
              <div
                className="
                  md:grid 
                  md:grid-cols-2 
                  lg:grid-cols-[680px,1fr] 
                  mt-8
                "
              >
                <Image
                  src="/details/model-3/Model-3-Specs-Performance.jpg"
                  alt="Tesla Model 3"
                  width={500}
                  height={500}
                  className="bg-cover block md:hidden my-10"
                />

                <div
                  className="
                    grid 
                    grid-cols-2 
                    gap-7 
                    md:gap-0 
                    md:flex 
                    md:flex-wrap 
                    md:justify-between
                  "
                >
                  {model3RangeDimension.map((item) => (
                    <div
                      key={item.title}
                      className="lg:w-[200px] md:w-[150px] pb-[35px]"
                    >
                      <h1 className="font-bold">{item.title}</h1>
                      <p className="font-medium text-sm md:text-base">
                        {item.subtitle}
                      </p>
                      <p className="font-medium text-sm md:text-base">
                        {item.additionalSubtitle}
                      </p>
                    </div>
                  ))}
                </div>

                <Image
                  src="/details/model-3/Model-3-Specs-Performance.jpg"
                  alt="Tesla Model 3"
                  width={500}
                  height={500}
                  className="bg-cover hidden md:block"
                />
              </div>
            </div>

            <div
              className="
                py-10 
                border-b 
                border-b-neutral-700 
                mx-4 md:mx-0
              "
            >
              <h1 className="font-bold text-xl">Charging</h1>
              <div
                className="
                  grid 
                  grid-cols-2 
                  gap-y-7 
                  md:gap-y-0 gap-7 
                  md:flex md:flex-row 
                  md:gap-16 pt-8
                "
              >
                {model3RangeCharging.map((item) => (
                  <div key={item.title} className="md:w-[190px]">
                    <h1 className="font-bold">{item.title}</h1>
                    <p className="font-medium text-sm md:text-base">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="
                py-10 
                border-b 
                border-b-neutral-700 
                mx-4 
                md:mx-0
              "
            >
              <h1 className="font-bold text-xl">Warranty</h1>
              <div
                className="
                  grid 
                  grid-cols-2 
                  gap-7 
                  md:flex 
                  md:flex-row 
                  md:gap-16 pt-8
                "
              >
                {model3RangeWarranty.map((item) => (
                  <div key={item.title} className="md:w-[190px]">
                    <h1 className="font-bold">{item.title}</h1>
                    <p className="font-medium text-sm md:text-base">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {tabActiveThree && (
          <>
            <div
              className="
                py-10 
                mt-2 
                border-b 
                border-b-neutral-700 
                mx-4 
                md:mx-0
              "
            >
              <h1 className="font-bold text-xl">Drive</h1>
              <div
                className="
                  grid 
                  grid-cols-2
                  gap-y-10
                  md:flex 
                  md:flex-row 
                  lg:gap-14 
                  lg:justify-normal 
                  md:justify-between 
                  md:gap-5 
                  mt-8
                "
              >
                {model3WheelDrive.map((item) => (
                  <div key={item.title} className="md:w-[170px]">
                    <h1 className="font-bold">{item.title}</h1>
                    <p className="font-medium text-sm md:text-base">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="
                py-10 
                mt-2 
                border-b 
                border-b-neutral-700 
                mx-4 
                md:mx-0
              "
            >
              <h1 className="font-bold text-xl">Dimensions</h1>
              <div
                className="
                  md:grid 
                  md:grid-cols-2 
                  lg:grid-cols-[680px,1fr] 
                  mt-8
                "
              >
                <Image
                  src="/details/model-3/Model-3-Specs-Performance.jpg"
                  alt="Tesla Model 3"
                  width={500}
                  height={500}
                  className="bg-cover block md:hidden my-10"
                />

                <div
                  className="
                    grid 
                    grid-cols-2 
                    gap-7 
                    md:gap-0 
                    md:flex 
                    md:flex-wrap 
                    md:justify-between
                  "
                >
                  {model3WheelDimension.map((item) => (
                    <div
                      key={item.title}
                      className="lg:w-[200px] md:w-[150px] pb-[35px]"
                    >
                      <h1 className="font-bold">{item.title}</h1>
                      <p className="font-medium text-sm md:text-base">
                        {item.subtitle}
                      </p>
                      <p className="font-medium text-sm md:text-base">
                        {item.additionalSubtitle}
                      </p>
                    </div>
                  ))}
                </div>

                <Image
                  src="/details/model-3/Model-3-Specs-Performance.jpg"
                  alt="Tesla Model 3"
                  width={500}
                  height={500}
                  className="bg-cover hidden md:block"
                />
              </div>
            </div>

            <div
              className="
                py-10 
                border-b 
                border-b-neutral-700 
                mx-4 md:mx-0
              "
            >
              <h1 className="font-bold text-xl">Charging</h1>
              <div
                className="
                  grid 
                  grid-cols-2 
                  gap-y-7 
                  md:gap-y-0 gap-7 
                  md:flex md:flex-row 
                  md:gap-16 pt-8
                "
              >
                {model3WheelCharging.map((item) => (
                  <div key={item.title} className="md:w-[190px]">
                    <h1 className="font-bold">{item.title}</h1>
                    <p className="font-medium text-sm md:text-base">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="
                py-10 
                border-b 
                border-b-neutral-700 
                mx-4 
                md:mx-0
              "
            >
              <h1 className="font-bold text-xl">Warranty</h1>
              <div
                className="
                  grid 
                  grid-cols-2 
                  gap-7 
                  md:flex 
                  md:flex-row 
                  md:gap-16 pt-8
                "
              >
                {model3WheelWarranty.map((item) => (
                  <div key={item.title} className="md:w-[190px]">
                    <h1 className="font-bold">{item.title}</h1>
                    <p className="font-medium text-sm md:text-base">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default Specs;

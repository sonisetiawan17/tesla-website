'use client';

import { useCallback, useState } from 'react';
import ButtonSpecs from '../components/ButtonSpecs';
import ModelSpecs from '../components/ModelSpecs';
import {
  modelYSpecsPerformance,
  modelYSpecsRange,
  modelYSpecsWheel,
} from '../utils/modelyspecs';

const Specs = () => {
  const [activeButton, setActiveButton] = useState<string>('modelYPerformance');

  const handleClick = useCallback((buttonName: string) => {
    setActiveButton(buttonName);
  }, []);

  const renderButton = (
    buttonName: string,
    title: string,
    textSmall: boolean
  ) => (
    <ButtonSpecs
      title={title}
      onClick={() => handleClick(buttonName)}
      textSmall={textSmall}
      active={activeButton === buttonName}
    />
  );

  const renderSpecs = (specs: { title: string; subtitle: string }[]) =>
    specs.map((spec) => (
      <div key={spec.title}>
        <ModelSpecs title={spec.title} subtitle={spec.subtitle} />
      </div>
    ));

  return (
    <div
      className="
        lg:mx-[40px]
        lg:grid 
        lg:grid-cols-2
        text-white
      "
    >
      <div className="bg-center bg-cover w-full h-[500px] lg:h-screen specs-modely-detail" />
      <div
        className="
          flex
          flex-col
          lg:mt-[90px]
          lg:max-w-[500px]
          lg:mx-auto
        "
      >
        <h1
          className="
            text-3xl 
            font-semibold 
            mt-7 
            lg:mt-0 
            text-center
            lg:text-left
          "
        >
          Model Y <span className="font-normal">Specs</span>
        </h1>
        <div
          className="
            flex
            flex-col
            gap-5
            md:flex 
            md:flex-row 
            items-center
            justify-center
            lg:justify-none 
            md:gap-2 
            mt-7 
            mx-5 
            lg:mx-0
          "
        >
          {renderButton('modelYPerformance', 'Performance', true)}
          {renderButton('modelYRange', 'Long Range AWD', true)}
          {renderButton('modelYWheel', 'All Wheel Drive', true)}
        </div>
        <div
          className="
            grid 
            grid-cols-2
            md:max-w-[520px]
            md:mx-auto
            lg:grid
            lg:grid-cols-2
            mx-5 
            lg:mx-0 
            gap-4
            lg:gap-0
            mb-24
          "
        >
          {activeButton === 'modelYPerformance' &&
            renderSpecs(modelYSpecsPerformance)}
          {activeButton === 'modelYRange' && renderSpecs(modelYSpecsRange)}
          {activeButton === 'modelYWheel' && renderSpecs(modelYSpecsWheel)}
        </div>
      </div>
    </div>
  );
};

export default Specs;

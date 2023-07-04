'use client';

import { useCallback, useState } from 'react';
import ButtonSpecs from '../components/ButtonSpecs';
import ModelSpecs from '../components/ModelSpecs';
import { modelSPlaid, modelSSpecs } from '../utils/modelsspecs';
import { modelXPlaid, modelXSpecs } from '../utils/modelxspecs';

const Specs = () => {
  const [specs, setSpecs] = useState(false);
  const [modelXPlaidActive, setmodelXPlaidActive] = useState(true);
  const [modelXActive, setModelXActive] = useState(false);

  const buttonModelSPlain = useCallback(() => {
    setmodelXPlaidActive(true);
    setSpecs(false);
    setModelXActive(false);
  }, []);

  const buttonModelS = useCallback(() => {
    setModelXActive(true);
    setSpecs(true);
    setmodelXPlaidActive(false);
  }, []);

  return (
    <div
      className="
        lg:mx-[40px]
        lg:grid 
        lg:grid-cols-2
        text-white
      "
    >
      <div className="bg-center bg-cover w-full h-[500px] lg:h-screen specs-modelx-detail" />
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
          Model S <span className="font-normal">Specs</span>
        </h1>
        <div
          className="
            flex 
            flex-row 
            items-center
            justify-center
            lg:justify-none 
            gap-2 
            mt-7 
            mx-5 
            lg:mx-0
          "
        >
          {modelXPlaidActive ? (
            <ButtonSpecs
              title="Model S Plaid"
              onClick={buttonModelSPlain}
              active
            />
          ) : (
            <ButtonSpecs title="Model S Plaid" onClick={buttonModelSPlain} />
          )}

          {modelXActive ? (
            <ButtonSpecs title="Model S" onClick={buttonModelS} active />
          ) : (
            <ButtonSpecs title="Model S" onClick={buttonModelS} />
          )}
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
          {specs && (
            <>
              {modelXSpecs.map((specs) => (
                <div key={specs.title}>
                  <ModelSpecs title={specs.title} subtitle={specs.subtitle} />
                </div>
              ))}
            </>
          )}
          {!specs && (
            <>
              {modelXPlaid.map((specs) => (
                <div key={specs.title}>
                  <ModelSpecs title={specs.title} subtitle={specs.subtitle} />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Specs;

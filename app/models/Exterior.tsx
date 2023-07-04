'use client';

import { useEffect, useRef } from 'react';
import Wrapper from '../components/Wrapper';
import CarInformation from '../components/CarInformation';
import ContentGrid from '../components/ContentGrid';

const Exterior = () => {
  return (
    <div className="mt-24">
      <div className="bg-center bg-cover h-[500px] exterior-detail" />
      <div className="mt-5 lg:mt-10 text-white">
        <Wrapper>
          <CarInformation
            title="Exterior"
            subtitle="Designed for Efficiency"
            information="With a drag coefficient of just .208 Cd, the lowest on the
                planet, Model S is built for speed, endurance and range.
                Improved aerodynamics and a wider chassis offer more responsive
                performance so you can take corners quicker and with more
                confidence."
          />

          <div className="mt-24">
            <div className="md:grid md:grid-cols-2">
              {/* ------------------------ GRID 1 ------------------------ */}
              <ContentGrid
                title="Relentless Performance"
                subtitle="Staggered, performance wheels and tires keep the car planted
                  and help transfer maximum power down to the road."
                imgSource="Model-S-Exterior-Grid-A"
                imageContent
                secondLine
                gsapStart="top 100%"
              />

              {/* ------------------ GRID 1 Mobile View ------------------ */}
              <ContentGrid
                title="Relentless Performance"
                subtitle="Staggered, performance wheels and tires keep the car planted
                  and help transfer maximum power down to the road."
                imgSource="Model-S-Exterior-Grid-A"
                imageContent
                mobileView
                gsapStart="top 100%"
              />

              {/* ------------------------ GRID 2 ------------------------ */}
              <ContentGrid
                title="Optimized Aerodynamics"
                subtitle="Attention to detail on all exterior surfaces makes Model S the
                most aerodynamic production car on Earth."
                imgSource="Model-S-Exterior-Grid-B"
                gsapStart="top 100%"
              />

              {/* ------------------------ GRID 3 ------------------------ */}
              <ContentGrid
                title="Relentless Performance"
                subtitle="Staggered, performance wheels and tires keep the car planted
                  and help transfer maximum power down to the road."
                imgSource="Model-S-Exterior-Grid-A"
                imageContent
                secondLine
                gsapStart="top 100%"
              />

              {/* ------------------ GRID 3 Mobile View ------------------ */}
              <ContentGrid
                title="Refined Styling"
                subtitle="An iconic silhouette meets refreshed, elegant proportions."
                imgSource="Model-S-Exterior-Grid-C"
                imageContent
                mobileView
                gsapStart="top 100%"
              />
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Exterior;

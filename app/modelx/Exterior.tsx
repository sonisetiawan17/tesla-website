'use client';

import Wrapper from '../components/Wrapper';
import CarInformation from '../components/CarInformation';
import ContentGrid from '../components/ContentGrid';

const Exterior = () => {
  return (
    <>
      <div className="bg-center bg-cover h-[500px] exterior-modelx-detail" />
      <div className="mt-5 lg:mt-10 text-white">
        <Wrapper>
          <CarInformation
            title="Exterior"
            subtitle="Designed for Efficiency"
            information="Model X has a drag coefficient of just .24 Cd, the lowest of any production SUV on the planet. Refined aerodynamic elements work together with new wheels and tires to help you travel farther, with sharper handling and better ride comfort."
            textWhite
          />

          <div className="mt-24">
            <div className="md:grid md:grid-cols-2">
              {/* ------------------------ GRID 1 ------------------------ */}
              <ContentGrid
                title="Relentless Performance"
                subtitle="Performance wheels and tires keep the SUV planted, transferring even more power down to the road."
                imgSource="Model-X-Exterior-Grid-A"
                imageContent
                secondLine
                gsapStart="top 100%"
              />

              {/* ------------------ GRID 1 Mobile View ------------------ */}
              <ContentGrid
                title="Optimized Aerodynamics"
                subtitle="Attention to detail on all exterior surfaces makes Model X the most aerodynamic production SUV on Earth."
                imgSource="Model-X-Exterior-Grid-A"
                imageContent
                mobileView
                gsapStart="top 100%"
              />

              {/* ------------------------ GRID 2 ------------------------ */}
              <ContentGrid
                title="Optimized Aerodynamics"
                subtitle="Attention to detail on all exterior surfaces makes Model X the most aerodynamic production SUV on Earth."
                imgSource="Model-X-Exterior-Grid-B"
                gsapStart="top 100%"
              />

              {/* ------------------------ GRID 3 ------------------------ */}
              <ContentGrid
                title="Refined Styling"
                subtitle="Exterior design combines an iconic look with elegant details."
                imgSource="Model-X-Exterior-Grid-C"
                imageContent
                secondLine
                gsapStart="top 100%"
              />

              {/* ------------------ GRID 3 Mobile View ------------------ */}
              <ContentGrid
                title="Refined Styling"
                subtitle="Exterior design combines an iconic look with elegant details."
                imgSource="Model-X-Exterior-Grid-C"
                imageContent
                mobileView
                gsapStart="top 100%"
              />
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Exterior;

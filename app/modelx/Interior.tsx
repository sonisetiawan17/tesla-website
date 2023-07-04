'use client';

import Title from '../components/Title';
import Wrapper from '../components/Wrapper';
import ContentGrid from '../components/ContentGrid';

const Interior = () => {
  return (
    <div className="bg-black h-full w-full text-white">
      <div
        className="mt-24 text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Title
          label="Interior of the Future"
          semibold
          className="text-2xl md:text-3xl"
        />
      </div>

      <div
        className="h-14 lg:h-28 w-full"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent 0%, #000000 100%)',
        }}
      />

      <div className="bg-center bg-cover h-screen interior-detail" />

      <div className="border-b-[1px] border-neutral-800 w-full h-[2px] mt-12 lg:mt-16 mb-14 md:hidden" />

      <Wrapper className="md:mt-36">
        <div className="md:grid md:grid-cols-2">
          {/* ------------------------ GRID 1 ------------------------ */}
          <ContentGrid
            title="Stay Connected"
            subtitle="Instantly connect with multi-device Bluetooth, or fast charge
              devices with wireless and 36-watt USB-C charging."
            imgSource="MX-Interior-Grid-B"
            gsapStart="top center"
            gsapEnd="top 30%"
          />

          {/* ------------------------ GRID 2 ------------------------ */}
          <ContentGrid
            title="Sublime Sound"
            subtitle="A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are."
            imgSource="MX-Interior-Grid_C"
            imageContent
            secondLine
            gsapStart="top center"
            gsapEnd="top 30%"
          />

          {/* ------------------ GRID 2 Mobile View ------------------ */}
          <ContentGrid
            title="Immersive Sound"
            subtitle="A 22-speaker, 960-watt audio system with Active Road Noise
            Reduction offers immersive listening and studio-grade sound
            quality."
            imgSource="MX-Interior-Grid_C"
            imageContent
            mobileView
            gsapStart="top center"
            gsapEnd="top 30%"
          />
        </div>
      </Wrapper>

      <div className="border-b-[1px] border-neutral-800 w-full h-[2px] mt-6 md:hidden" />
    </div>
  );
};

export default Interior;

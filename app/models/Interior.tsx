'use client';

import Title from '../components/Title';
import Wrapper from '../components/Wrapper';
import ContentGrid from '../components/ContentGrid';
import { useRef } from 'react';

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

      <div className="relative bg-center bg-cover h-screen interior-detail">
        <div
          className="absolute h-20 lg:h-28 w-full"
          style={{
            background:
              'repeating-linear-gradient(0deg, transparent 0%, #000000 100%)',
          }}
        />
      </div>

      <div className="border-b-[1px] border-neutral-800 w-full h-[2px] mt-16 mb-14 md:hidden" />

      <Wrapper className="md:mt-36">
        <div className="md:grid md:grid-cols-2">
          {/* ------------------------ GRID 1 ------------------------ */}
          <ContentGrid
            title="Stay Connected"
            subtitle="Instantly connect with multi-device Bluetooth, or fast charge
              devices with wireless and 36-watt USB-C charging."
            imgSource="MS-Interior-Grid-A"
            gsapStart="top center"
            gsapEnd="top 30%"
          />

          {/* ------------------------ GRID 2 ------------------------ */}
          <ContentGrid
            title="Immersive Sound"
            subtitle="A 22-speaker, 960-watt audio system with Active Road Noise
            Reduction offers immersive listening and studio-grade sound
            quality."
            videoSource="MS-Interior-Grid-2-Audio"
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
            videoSource="MS-Interior-Grid-2-Audio"
            mobileView
            gsapStart="top center"
            gsapEnd="top 30%"
          />

          {/* ------------------------ GRID 3 ------------------------ */}
          <ContentGrid
            title="MS-Interior-Grid-D"
            subtitle="With front and rear trunks and fold-flat seats you can fit your
            bike without taking the wheel off—and your luggage too."
            imgSource="MS-Interior-Grid-D"
            gsapStart="top center"
            gsapEnd="top 30%"
          />
        </div>
      </Wrapper>

      <div className="border-b-[1px] border-neutral-800 w-full h-[2px] mt-14 md:hidden" />
    </div>
  );
};

export default Interior;

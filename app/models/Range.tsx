'use client';

import { useEffect, useRef } from 'react';
import Specification from '../components/Specification';
import Wrapper from '../components/Wrapper';
import CarInformation from '../components/CarInformation';

const Range = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    // Fungsi untuk memutar video
    const playVideo = () => {
      if (videoElement?.paused) {
        videoElement?.play();
      }
    };

    // Fungsi untuk menghentikan video
    const pauseVideo = () => {
      if (videoElement && !videoElement.paused) {
        videoElement.pause();
      }
    };

    // Mengatur event listener saat scroll
    const handleScroll = () => {
      const videoPosition = videoElement?.getBoundingClientRect();
      const isInView =
        (videoPosition?.top! >= 50 &&
          videoPosition?.top! <= window.innerHeight) ||
        (videoPosition?.bottom! >= 50 &&
          videoPosition?.bottom! <= window.innerHeight);

      if (isInView) {
        playVideo();
      } else {
        pauseVideo();
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Membersihkan event listener saat komponen tidak terlihat
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="lg:grid lg:grid-cols-[75%,1fr] mt-20">
      <div className="relative">
        <video
          src="/videos/Plaid-Range-Web.mp4"
          autoPlay
          loop
          muted
          className="w-full h-[450px] object-cover lg:h-full"
          ref={videoRef}
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
              title="405 mi"
              subtitle="Go anywhere with up to 405 miles of estimated range on a single charge"
              className="space-y-2 w-[250px]"
              textSemiBold
            />
            <Specification
              title="15 min"
              subtitle="Recharge up to 200 miles in 15 minutes at Supercharger locations"
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
              justify-center
              gap-10
              md:gap-20
              text-white
            "
          >
            <Specification
              title="405 mi"
              subtitle="Range"
              additionalSubtitle="(EPA est.)"
              textSemiBold
              mobileView
            />
            <Specification
              title="15 min"
              subtitle="Recharge up to"
              additionalSubtitle="200 mi"
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
          With up to 405 miles of estimated range and access to the world’s
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

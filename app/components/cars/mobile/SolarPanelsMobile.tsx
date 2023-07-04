'use client';

import Button from '../../Button';
import Title from '../../Title';

const SolarPanelsMobile = () => {
  return (
    <div
      className="snap-start relative bg-center bg-cover h-screen"
      style={{ backgroundImage: "url('/images/SolarPanelsMobile.png')" }}
    >
      <div
        className="
          pt-[150px]
          text-center
        "
      >
        <Title label="Solar Panels" medium textSecondary spacing />
      </div>
      <div
        className="
          absolute 
          left-1/2 
          transform 
          -translate-x-1/2 
          bottom-[50px] 
          text-center
          space-y-5
          sm:space-x-6
          px-5
          sm:px-0
          w-full
        "
      >
        <Button label="Learn More" />
        <Button label="Order Now" secondary />
      </div>
    </div>
  );
};

export default SolarPanelsMobile;

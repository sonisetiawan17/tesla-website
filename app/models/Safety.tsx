'use client';

import CarInformation from '../components/CarInformation';
import Wrapper from '../components/Wrapper';

const Safety = () => {
  return (
    <div
      className="
        lg:mx-[40px]
        lg:grid 
        lg:grid-cols-[1fr,70%] 
        md:mt-16
      "
    >
      <div className="hidden lg:block bg-white p-8 md:px-10 md:pt-16">
        <p className="font-medium text-lg md:text-xl">Safety</p>
        <h1 className="font-semibold text-xl md:text-3xl md:mt-1 tracking-wider">
          High Impact Protection
        </h1>
        <p className="font-medium mt-3 md:mt-10">
          Model S is built from the ground up as an electric vehicle, with a
          high-strength architecture and floor-mounted battery pack for
          incredible occupant protection and low rollover risk. Every new Model
          S includes Tesla’s latest active safety features, such as Automatic
          Emergency Braking, at no extra cost.
        </p>
      </div>
      <div className="hidden lg:block bg-center bg-cover w-full h-screen safety-models-detail"></div>

      {/* ---------------------- Mobile View ---------------------- */}
      <div className="lg:hidden bg-center bg-cover w-full h-[320px] safety-models-detail"></div>
      <div className="lg:hidden bg-white">
        <Wrapper>
          <CarInformation
            title="Safety"
            subtitle="High Impact Protection"
            information="Model S is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. Every new Model S includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost."
          />
        </Wrapper>
      </div>
    </div>
  );
};

export default Safety;

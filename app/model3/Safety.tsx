'use client';

import Wrapper from '../components/Wrapper';

const Safety = () => {
  return (
    <Wrapper>
      <div className="hidden lg:block bg-center bg-cover w-[650px] h-[600px] mx-auto safety-model3-detail" />
      <div className="lg:hidden bg-center bg-cover w-[350px] h-[300px] mx-auto safety-model3-detail" />

      <div className="space-y-6 mx-4 lg:mx-0">
        <h1 className="font-semibold text-2xl lg:text-3xl">
          Safety First Design
        </h1>
        <p className="font-medium">
          Safety is the most important part of every Tesla. We design our
          vehicles to exceed safety standards.
        </p>
        <div
          className="
            lg:grid 
            lg:grid-cols-2 
            gap-10 
            space-y-6 
            lg:space-y-0
          "
        >
          <div className="space-y-2">
            <h1 className="font-semibold text-lg">5-Star Rating</h1>
            <p className="font-medium">
              Model 3 achieved NHTSA 5-star safety ratings in every category and
              subcategory.
            </p>
          </div>
          <div className="space-y-2">
            <h1 className="font-semibold text-lg">Top Safety Pick+</h1>
            <p className="font-medium">
              Model 3 received the IIHS Top Safety Pick+ award, with top ratings
              in all crashworthiness and front crash prevention categories.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Safety;

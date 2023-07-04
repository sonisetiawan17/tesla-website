'use client';

import Image from 'next/image';
import MenuItem from './MenuItem';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

const NavLink = () => {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  const handleClick = (path: any) => {
    setProgress(30);

    setTimeout(() => {
      router.push(path);
      setProgress(100);
    }, 2000);
  };

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        loaderSpeed={500}
        waitingTime={1000}
        transitionTime={200}
      />
      <div
        className="
          hidden
          md:flex
          flex-row
          items-center
          md:px-4
          text-white
        "
      >
        <div className="hidden md:flex">
          <MenuItem onClick={() => handleClick('/models')} label="Model S" />
          <MenuItem onClick={() => handleClick('/model3')} label="Model 3" />
        </div>
        <div
          className="px-0 md:px-10 lg:px-28 cursor-pointer"
          onClick={() => handleClick('/')}
        >
          <Image
            src="/images/tesla-logo.png"
            height="200"
            width="200"
            alt="Tesla Logo"
          />
        </div>
        <div className="hidden md:flex">
          <MenuItem onClick={() => handleClick('/modelx')} label="Model X" />
          <MenuItem onClick={() => handleClick('/modely')} label="Model Y" />
        </div>
      </div>
    </>
  );
};

export default NavLink;

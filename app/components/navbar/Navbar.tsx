'use client';

import { useEffect, useState } from 'react';
import Container from '../Container';
import NavLink from './NavLink';
import NavMobile from './NavMobile';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 66) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`
        fixed 
        w-full 
        navbar 
        z-10 
        ${scrolled ? 'bg-black/30' : 'bg-transparent'}
      `}
    >
      <div className="py-6">
        <Container>
          <div
            className="
              flex
              flex-row
              items-center
              md:justify-center
              sm:justify-between
            "
          >
            <NavLink />
          </div>
        </Container>
        <NavMobile />
      </div>
    </div>
  );
};

export default Navbar;

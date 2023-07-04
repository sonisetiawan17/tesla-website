'use client';

import { MouseEvent, useEffect, useState } from 'react';
import Container from '../Container';
import NavLink from './NavLink';
import NavMobile from './NavMobile';
import NavbarScrolled from './NavbarScrolled';
import { useRouter } from 'next/navigation';

interface CarModelsNavbarProps {
  title: string;
  link: string;
  menu: string[];
}

const CarModelsNavbar: React.FC<CarModelsNavbarProps> = ({
  title,
  link,
  menu,
}) => {
  const router = useRouter();
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
        ${scrolled ? 'scrollnavbar' : 'bg-transparent'}
      `}
    >
      <div className={`${scrolled ? 'py-2 transition' : 'py-6'}`}>
        <Container>
          {scrolled ? (
            <NavbarScrolled
              title={title}
              onClick={() => router.push(link)}
              menu={menu}
            />
          ) : (
            <>
              <div className="md:hidden">
                <NavMobile />
              </div>
              <div
                className="
                hidden
                md:flex
                flex-row
                items-center
                md:justify-center
                sm:justify-between
              "
              >
                <NavLink />
              </div>
            </>
          )}
        </Container>
      </div>
    </div>
  );
};

export default CarModelsNavbar;

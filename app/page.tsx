import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import Hero from './components/hero/Hero';
import Model3 from './components/cars/Model3';
import ModelS from './components/cars/ModelS';
import ModelX from './components/cars/ModelX';
import ModelY from './components/cars/ModelY';
import Model3Mobile from './components/cars/mobile/Model3Mobile';
import ModelSMobile from './components/cars/mobile/ModelSMobile';
import ModelXMobile from './components/cars/mobile/ModelXMobile';
import ModelYMobile from './components/cars/mobile/ModelYMobile';

export default function Home() {
  return (
    <ClientOnly>
      <Navbar />
      <div className="snap-y snap-mandatory h-screen w-full overflow-x-hidden">
        <Hero />
        <div className="hidden sm:block">
          <ModelS />
          <Model3 />
          <ModelX />
          <ModelY />
        </div>

        <div className="sm:hidden">
          <ModelSMobile />
          <Model3Mobile />
          <ModelXMobile />
          <ModelYMobile />
        </div>
      </div>
    </ClientOnly>
  );
}

import CarModelsNavbar from '../components/navbar/CarModelsNavbar';
import Acceleration from './Acceleration';
import Autopilot from './Autopilot';
import Header from './Header';
import Interior from './Interior';
import Range from './Range';
import Safety from './Safety';
import Specs from './Specs';
import Wheel from './Wheel';
import ClientOnly from '../components/ClientOnly';

const page = () => {
  return (
    <ClientOnly>
      <CarModelsNavbar
        title="Model 3"
        link="/model3"
        menu={['Interior', 'Exterior', 'Range', 'Autopilot', 'Specs']}
      />
      <Header />
      <div className="bg-white">
        <Safety />
        <div className="pt-5 lg:pt-10">
          <Range />
        </div>
      </div>
      <Interior />
      <Acceleration />
      <Wheel />
      <Autopilot />
      <Specs />
    </ClientOnly>
  );
};

export default page;

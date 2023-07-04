import CarModelsNavbar from '../components/navbar/CarModelsNavbar';
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
        title="Model Y"
        link="/modely"
        menu={['Interior', 'Exterior', 'Range', 'Autopilot', 'Specs']}
      />
      <Header />
      <div className="bg-white">
        <Safety />
        <Wheel />
        <Range />
        <Autopilot />
        <div className="pb-32">
          <Interior />
        </div>
      </div>
      <Specs />
    </ClientOnly>
  );
};

export default page;

import CarModelsNavbar from '../components/navbar/CarModelsNavbar';
import Autopilot from './Autopilot';
import Exterior from './Exterior';
import Header from './Header';
import Interior from './Interior';
import Range from './Range';
import Safety from './Safety';
import Specs from './Specs';
import ClientOnly from '../components/ClientOnly';

const page = () => {
  return (
    <ClientOnly>
      <CarModelsNavbar
        title="Model S"
        link="/models"
        menu={['Interior', 'Exterior', 'Range', 'Autopilot', 'Specs']}
      />
      <Header />
      <Interior />
      <Exterior />
      <div className="bg-white">
        <Range />
        <Safety />
        <Autopilot />
      </div>
      <Specs />
    </ClientOnly>
  );
};

export default page;

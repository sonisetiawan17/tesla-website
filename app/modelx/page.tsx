import CarModelsNavbar from '../components/navbar/CarModelsNavbar';
import Autopilot from './Autopilot';
import Exterior from './Exterior';
import Header from './Header';
import Interior from './Interior';
import Range from './Range';
import Safety from './Safety';
import Specs from './Specs';
import Utility from './Utility';
import ClientOnly from '../components/ClientOnly';

const page = () => {
  return (
    <ClientOnly>
      <CarModelsNavbar
        title="Model X"
        link="/modelx"
        menu={['Interior', 'Exterior', 'Range', 'Autopilot', 'Specs']}
      />
      <Header />
      <Interior />
      <div className="bg-white">
        <Utility />
      </div>
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

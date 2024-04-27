import { Outlet } from 'react-router-dom';
import Nabvar from '../Nabvar/Nabvar';
import Footer from '../Footer/Footer';

const Root = () => {
  return (
    <div>
      <Nabvar></Nabvar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;

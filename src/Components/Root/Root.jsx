import { Outlet, useLocation } from 'react-router-dom';
import Nabvar from '../Nabvar/Nabvar';
import Footer from '../Footer/Footer';
import { useEffect } from 'react';

const Root = () => {
  const loc = useLocation();
  useEffect(() => {
    if (loc.pathname === '/') {
      document.title = `Next - HOME`;
    } else {
      document.title = `NEXT ${loc.pathname.replace('/', '-')}`;
    }
  }, [loc.pathname]);
  return (
    <div>
      <Nabvar></Nabvar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;

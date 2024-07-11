import { Helmet } from 'react-helmet';
import Countries from '../Countries';
import Hero from '../Hero';

const Home = () => {
  return (
    <div className="mt-5 mb-5">
      <div>
        <div>
          <Helmet>
            <title>Summer Trip || Home</title>
          </Helmet>
        </div>
        <Hero></Hero>
        <Countries></Countries>
      </div>
    </div>
  );
};

export default Home;

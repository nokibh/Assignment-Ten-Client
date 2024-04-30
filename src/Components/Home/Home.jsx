import Banner from '../Banner/Banner';
import Country from '../Country/Country';

const Home = () => {
  return (
    <div className="mt-5 mb-5">
      <Banner></Banner>

      <div>
        <Country></Country>
      </div>
    </div>
  );
};

export default Home;

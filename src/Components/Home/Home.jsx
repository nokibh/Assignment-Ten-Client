import { Helmet } from 'react-helmet';
import Countries from '../Countries';
import Hero from '../Hero';
import { useLoaderData } from 'react-router-dom';
import CarouselAni from '../CarouselAni';
import SwiperSlides from '../SwiperSlides';
import TouristsSpots from '../TouristsSpots';

const Home = () => {
  const allSpots = useLoaderData();
  return (
    <div className="mt-5 mb-5">
      <div>
        <div>
          <Helmet>
            <title>Summer Trip || Home</title>
          </Helmet>
        </div>
        <CarouselAni allSpots={allSpots}></CarouselAni>
        <Hero></Hero>
        <Countries></Countries>
        <SwiperSlides allSpots={allSpots}></SwiperSlides>
        <TouristsSpots allSpots={allSpots}></TouristsSpots>
      </div>
    </div>
  );
};

export default Home;

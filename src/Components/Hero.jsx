import heroImg from '../assets/heroImg.png';
import niceSvg from '../assets/nice.svg';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div
      style={{
        borderRadius: '24px',
        background: `linear-gradient(0deg, rgba(21, 11, 43, 0.80) 0%, rgba(21, 11, 43, 0.40) 100%), url(${heroImg}) lightgray 0px -18.896px / 100% 123.31% no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: 'auto',
      }}
      className="mt-16 mb-10 h-[500px] w-auto rounded-3xl py-20 md:mb-[100px] md:h-[600px] md:p-[130px] flex flex-col items-center"
    >
      <img
        className="w-20 mb-5 md:mb-8"
        src={niceSvg}
        alt="SA-Tourism"
        data-aos="zoom-in-up"
      />
      <h3
        className="text-xl md:text-4xl font-black my-5 bg-gradient-to-r from-primary via-blue-600 to-secondary bg-300% text-transparent bg-clip-text animate-gradient"
        data-aos="fade-up-right"
      >
        Summer Trip
      </h3>
      <h3
        className="text-xl font-bold md:text-4xl bg-gradient-to-r from-primary via-green-600 to-secondary bg-300% text-transparent bg-clip-text animate-gradient"
        data-aos="fade-down-right"
      >
        Arrange your next tour with the best tour experts and get <br /> awesome
        discounts for you.
      </h3>
      <h5 className="font-inter mb-10 mt-4 text-sm font-normal text-white md:text-lg px-3">
        <span style={{ color: 'white', fontWeight: 'bold' }}>
          <Typewriter
            words={[
              'We are the best tour planner as we guide and arrange comfortfull and secured tour for our Customers. We confirm both your enjoyment and security in your tour.',
            ]}
            loop={50}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h5>
    </div>
  );
};
export default Hero;

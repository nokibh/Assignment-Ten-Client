// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles

import 'swiper/css';
import './banner.css';

const Banner = () => {
  return (
    <div>
      <div className="mt-10">
        <div>
          {/* <div className="absolute -mr-9">
        <h3 className="text-bold">Our property</h3>
      </div> */}
          <Swiper
            className="h-3/4 relative rounded-3xl md:h-96vh"
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            effect="fade"
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
          >
            <div>
              <div>
                <SwiperSlide
                  className="flex justify-center text-center font-bold bg-slate-400 items-center 
          "
                >
                  <div className="slide1 slide100">
                    <h1 className=" text-3xl  lg:mb-36 md:text-bold md:mb-10">
                      {' '}
                      Bangladesh, located in South Asia, is a land of vibrant
                      culture, lush landscapes, and warm hospitality.
                      <br /> <span className="text-[#e54ea6]">Bangladesh</span>
                      <div>
                        <button className=" mb-10 justify-center items-center btn btn-active  bg-[#345217]  mt-5 text-xl text-white">
                          GET A QUOTE
                        </button>
                      </div>
                    </h1>
                  </div>
                </SwiperSlide>
              </div>
              <SwiperSlide
                className="flex justify-center text-center font-bold bg-slate-400 items-center
          "
              >
                <div className="slide1 slide200">
                  <h1 className=" text-3xl   lg:mb-36 md:text-bold md:mb-10">
                    {' '}
                    Bangladesh, located in South Asia, is a land of vibrant
                    culture, lush landscapes, and warm hospitality. <br />{' '}
                    <span className="text-[rgba(242,151,174,0.97)]">
                      Bangladesh
                    </span>
                    <div>
                      <button className=" mb-10 justify-center items-center btn btn-active  bg-[#345217]  mt-5 text-xl text-white">
                        GET A QUOTE
                      </button>
                    </div>
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center text-center font-bold bg-slate-400 items-center">
                <div className="slide1 slide300">
                  <h1 className=" text-3xl  lg:mb-36 md:text-bold md:mb-10">
                    {' '}
                    Vietnam, a land of breathtaking natural beauty and rich
                    cultural heritage, offers travelers a tapestry of
                    experiences to explore.
                    <br />{' '}
                    <span className="text-[rgba(119,68,104,0.97)]">
                      Vietnam
                    </span>
                    <div>
                      <button className=" mb-10 justify-center items-center btn btn-active  bg-[#345217]  mt-5 text-xl text-white">
                        GET A QUOTE
                      </button>
                    </div>
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center text-center font-bold bg-slate-400 items-center ">
                <div className="slide1 slide400">
                  <h1 className=" text-3xl  text-[#86469C] lg:mb-36 md:text-bold md:mb-10">
                    {' '}
                    Thailand, known as the "Land of Smiles," captivates visitors
                    with its stunning beaches, rich culture, and vibrant city
                    life.
                    <br />{' '}
                    <span className="text-[rgba(234,71,180,0.97)]">
                      Thailand
                    </span>
                    <div>
                      <button className=" mb-10 justify-center items-center btn btn-active  bg-[#345217]  mt-5 text-xl text-white">
                        GET A QUOTE
                      </button>
                    </div>
                  </h1>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;

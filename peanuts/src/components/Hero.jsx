import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  const slides = [
    {
      image:
        "https://img.freepik.com/premium-photo/farmer-holding-freshly-harvested-peanuts-with-roots-field_627378-10225.jpg",
    },
    {
      image:
        "https://thumbs.dreamstime.com/b/wooden-bowl-spoon-dry-roasted-peanuts-burlap-cloth-rustic-wood-surface-dry-roasted-peanuts-wooden-bowl-121755174.jpg",
    },
    {
      image:
        "https://mginternationalexport.com/wp-content/uploads/2022/05/Bold-Peanuts-1.jpg",
    },
  ];

  return (
    <div className="bg-[#fff7ff] flex flex-col md:flex-row py-6 md:pt-10 md:pb-20 px-4 md:px-0">
      <div className="w-full md:w-1/2 md:ml-28 flex items-center justify-center mb-10 md:mb-0">
        <div className="w-full max-w-md md:max-w-full h-auto">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            className="w-full h-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative">
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-64 md:h-96 object-cover rounded-xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left px-4 md:px-28 md:pr-24">
        <img
          src="https://dusadagro.com/wp-content/uploads/2020/02/LOGO-PNG.png"
          alt="Logo"
          className="w-32 h-32 md:w-40 md:h-40 object-contain md:ml-28 mb-4 md:mb-6"
        />
        <h1 className="text-2xl md:text-4xl text-center text-[#510e0b] font-bold mb-2">
          Premium Quality Peanuts
        </h1>
        <p className="text-base text-[#510e0b] max-w-md">
          Leader in processing of peanuts in India for the last 20 years
        </p>
        <button className="bg-[#510e0b] text-white py-2 px-4 rounded-lg md:ml-36 mt-4">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Hero;

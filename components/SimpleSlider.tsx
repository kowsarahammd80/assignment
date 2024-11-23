"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; 
import { Pagination } from "swiper/modules"; 
import { Autoplay } from "swiper/modules";  

const SimpleSlider = () => {
  const imageList = [
    "https://i.ibb.co/Ydry5NB/slider-banner.png",
    "https://i.ibb.co/Ydry5NB/slider-banner.png",
    "https://i.ibb.co/Ydry5NB/slider-banner.png",
  ];

  return (
    <div className="bg-[#576BB3] absolute top-0 w-full">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false, 
        }}
        pagination={{
          clickable: true, 
          el: ".swiper-pagination",
        }}
        loop={true}
        modules={[Autoplay, Pagination]} 
      >
        {imageList.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt={`Slide ${index}`} className="w-full h-[171px] lg:h-[381px] object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination absolute bottom-0 w-full"></div> {/* Position pagination dots */}
    </div>
  );
};

export default SimpleSlider;

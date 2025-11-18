import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import starPeople from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const Brands = () => {
  return (
    <div className="my-20">
      <h1 className="text-3xl font-bold my-20">
        We've helped thousands of sales teams
      </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={amazon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={casio} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={moonstar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={randstad} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={star} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={starPeople} alt="" />
        </SwiperSlide>
      </Swiper>

      <div className="w-full border-t-2 border-dashed mt-20 border-secondary opacity-20"></div>
    </div>
  );
};

export default Brands;

import React, { use } from "react";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import customerTop from '../../../assets/customer-top.png'
const Reviews = ({ reviewPromise }) => {
  const reviewData = use(reviewPromise);
  return (
    <div className="reviews my-20">
      <div className="w-1/2 mx-auto mb-20">
        <div className=" flex justify-center my-5">
          <img src={customerTop} alt="" />
        </div>
        <div className="text-center">
          <h2 className="text-4xl text-secondary font-extrabold my-5">What our customers are sayings</h2>
          <p>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
        </div>
      </div>

      <Swiper
      loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 45,
          stretch: 20,
          depth: 400,
          modifier: 3,
          slideShadows: false,
        }}
        autoplay={
            {
                delay:1500,
                 disableOnInteraction:false
            }
        }
        pagination={true}
        modules={[Autoplay,EffectCoverflow, Pagination]}
        className="mySwiper"
      >

        {
            reviewData.map(review=><SwiperSlide key={review.id}> <ReviewCard review={review}></ReviewCard> </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Reviews;

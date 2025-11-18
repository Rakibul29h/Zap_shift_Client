import React, { use } from "react";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
const Reviews = ({ reviewPromise }) => {
  const reviewData = use(reviewPromise);
  console.log(reviewData);
  return (
    <div className="reviews my-50">

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

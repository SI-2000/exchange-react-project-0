import React from "react";

import "./FeaturesSlides.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as BeforeIcon } from "../../files/icons/navigate_before_FILL0_wght400_GRAD0_opsz24.svg";
import { ReactComponent as NextIcon } from "../../files/icons/navigate_next_FILL0_wght400_GRAD0_opsz24.svg";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const FeaturesSlides = () => {
  return (
    <div className="FeaturesSlides">
      <h1>خدمات متنوعی که در ایزی‌بیت ارائه می‌شوند</h1>
      <div className="slides-container">
        <div className="swiper-button-prev">
          <BeforeIcon />
        </div>
        <Swiper
          className="swiper"
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: { slidesPerView: 4 },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>1</SwiperSlide>
          <SwiperSlide>2</SwiperSlide>
          <SwiperSlide>3</SwiperSlide>
          <SwiperSlide>4</SwiperSlide>
          <SwiperSlide>5</SwiperSlide>
          <SwiperSlide>6</SwiperSlide>
          <SwiperSlide>7</SwiperSlide>
          <SwiperSlide>8</SwiperSlide>
        </Swiper>
        <div className="swiper-button-next">
          <NextIcon />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSlides;

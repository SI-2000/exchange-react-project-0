import React from "react";

import "./FeaturesSlides.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as BeforeIcon } from "../../files/icons/navigate_before_FILL0_wght400_GRAD0_opsz24.svg";
import { ReactComponent as NextIcon } from "../../files/icons/navigate_next_FILL0_wght400_GRAD0_opsz24.svg";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import img1 from "../../files/images/featured-slides/1.jpg";
import img2 from "../../files/images/featured-slides/2.jpg";
import img3 from "../../files/images/featured-slides/3.jpg";
import img4 from "../../files/images/featured-slides/4.jpg";
import img5 from "../../files/images/featured-slides/5.jpg";
import img6 from "../../files/images/featured-slides/6.jpg";

const slides = [
  { img: img1, header: "خرید و فروش ارز دیجیتال" },
  {
    img: img2,
    header: "نگهداری امن ارزهای دیجیتال",
  },
  {
    img: img3,
    header: "انتقال سریع ارز دیجیتال",
  },
  {
    img: img4,
    header: "پشتیبانی فنی برتر",
  },
  {
    img: img5,
    header: "آموزش و مشاوره در خصوص ارزهای دیجیتال",
  },
  {
    img: img6,
    header: "اطلاعات بازار لحظه‌ای",
  },
];

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
          modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
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
            1024: { slidesPerView: 3 },
          }}
          effect={'coverflow'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {slides.map((s) => (
            <SwiperSlide>
              <div className="slide-container">
                <img className={"slide-image"} src={s.img} />
                <h1 className={"slide-title"}>{s.header}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next">
          <NextIcon />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSlides;

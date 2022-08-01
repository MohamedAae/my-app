import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import classes from "./offers-slider.module.css";
import SwiperCore, { Autoplay } from "swiper";

export default function OffersSlider() {
  SwiperCore.use([Autoplay]);

  const SliderData = [
    {
      id: 1,
      title: "A",
      url: "https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2022/07/21/24216_Quote_A_1_Michelle_Obama_07-21b.jpg",
    },
    {
      id: 2,
      title: "B",
      url: "https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2022/07/26/23992_Quote_A1_Violet_Made_07-26.jpg",
    },
    {
      id: 3,
      title: "C",
      url: "https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2022/07/26/23992_Quote_A2_Book_Of_Tea_07-26.jpg",
    },
  ];
  return (
    <section>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={classes.swiper}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {SliderData.map((slide, index) => {
          return (
            <SwiperSlide key={slide.id}>
              <img
                src={slide.url}
                alt="First slide"
                className={classes["swiper-slide"]}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

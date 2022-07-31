import React from "react";
import classes from "./top-slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function TopSlider() {
  const SliderData = [
    {
      id: 1,
      title: "25% Off All Harry Potter Paperbacks",
      url: "",
    },
    {
      id: 2,
      title:
        "10% Off 2 or More Books, eBooks, or Audiobooks With Code: JULYREADS",
      url: "",
    },
    {
      id: 3,
      title: "Buy 1, Get 1 50% Off Books for All Ages",
      url: "",
    },
  ];
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={`${classes.swiper} text-center bg-gray-700 mb-3`}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        {SliderData.map((slide, index) => {
          return (
            <SwiperSlide key={slide.id} className={`py-2`}>
              <a href={slide.url} className="text-gray-50">
                {slide.title}
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

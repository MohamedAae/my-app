import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import classes from './offers-slider.module.css'

export default function OffersSlider() {
    const SliderData = [
        {
          "id": 1,
          "title": "A",
          "url": "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=",
        },
        {
          "id": 2,
          "title": "B",
          "url": "https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk=",
        },
        {
          "id": 3,
          "title": "C",
          "url": "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg",
        }
      ];
  return (
    <section >
        <Swiper navigation={true} modules={[Navigation]} className={classes.swiper}>
      {SliderData.map((slide, index) => {
        return(
          <SwiperSlide>
            <img
                src={slide.url}
                alt="First slide"
                className={classes["swiper-slide"]}
              />
          </SwiperSlide>
        )
      })}
      </Swiper>
    </section>
  )
}

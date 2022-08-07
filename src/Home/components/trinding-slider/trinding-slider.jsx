import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import classes from "./trinding-slider.module.css";
import { NavLink } from "react-router-dom";
export default function TrindingSlider(props) {
  const SliderBooks = props.book;
  const titles = props.title;

  return (
    <section id="trinding" className="my-10 w-11/12	 mx-auto">
      <h1 className="py-6 text-3xl italic font-serif">{titles}</h1>{" "}
      <Swiper
        slidesPerView={7}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-11/12"
      >
        {SliderBooks.length &&
          SliderBooks.map((slide, index) => {
            return (
              <SwiperSlide className="relative group" key={index}>
                
                <NavLink
                to={`/c/${slide.categoryId.url}/${
                  slide._id
                }`}
              >
                 <img
                    src={slide.image}
                    className={`${classes.resize} mx-auto`}
                  />
              </NavLink>


                <button className="w-full bg-gray-50 hover:bg-gray-700 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded absolute bottom-0 right-2/4 translate-x-2/4 translate-y-full group-hover:translate-y-0 hover:translate-y-0 transition ease-in-out delay-150 duration-500 "
                onClick={()=>props.addcart(slide)}>
                  Quick Add
                </button>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
}
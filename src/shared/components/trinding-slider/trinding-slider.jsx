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
                  {
                      slide.stock
                      ?
                          <button className="w-11/12 bg-white hover:bg-theme text-theme-hover font-semibold hover:text-background py-2 px-2 hover:border-transparent rounded absolute bottom-0 right-2/4 translate-x-2/4 translate-y-full group-hover:-translate-y-1 hover:translate-y-0 transition ease-in-out duration-300 "
                                  onClick={()=>props.addcart(slide)}>
                              Quick Add
                          </button>
                          :
                          <button className="w-11/12 text-white bg-red-500 font-semibold py-2 px-2 border border-red-500 rounded absolute bottom-0 right-2/4 translate-x-2/4 translate-y-full group-hover:-translate-y-1 hover:translate-y-0 transition ease-in-out duration-300 ">
                              Out Of Stock
                          </button>
                  }

              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
}
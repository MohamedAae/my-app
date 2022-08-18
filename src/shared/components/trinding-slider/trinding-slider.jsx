import React, {useEffect, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import classes from "./trinding-slider.module.css";
import { NavLink } from "react-router-dom";
import {CheckIcon} from "@heroicons/react/solid";
import {Helpers} from "../../helpers";

let inCart = false;

const TrindingSlider = (props) => {

  const SliderBooks = props.book;
  const titles = props.title;
  const [addedToCart, setAddedToCart] = useState(false);
  const [itemAddedId, setItemAddedId] = useState(null);
  const [checkIfInCart, setCheckIfInCart] = useState([]);

  const checkCart = () => {
      const inCart = Helpers.checkIfInCart(props.cartItems ? props.cartItems : [], itemAddedId);
      if (inCart) {
          setCheckIfInCart([
              ...checkIfInCart,
              itemAddedId
          ])
      }
  };

  useEffect(() => {
      checkCart();
      setAddedToCart(false);
  }, [itemAddedId, addedToCart]);

  return (
    <section id="trinding" className="my-10 w-11/12	 mx-auto">
      <h1 className="py-6 text-3xl italic font-serif">{titles}</h1>{" "}
      <Swiper
          breakpoints={{
              480: {
                  slidesPerView: 2
              },
              640: {
                  slidesPerView: 3,
              },
              768: {
                  slidesPerView: 4,
              },
              1024: {
                  slidesPerView: 7,
              },
          }}
          observer={true}
        observeParents={true}
        slidesPerView={1}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
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
                          checkIfInCart.includes(slide._id) ?
                              <button className="w-11/12 flex justify-center items-center bg-white text-green-500 font-semibold hover:text-background py-2 px-2 hover:border-transparent rounded absolute bottom-0 right-2/4 translate-x-2/4 translate-y-full group-hover:-translate-y-1 hover:translate-y-0 transition ease-in-out duration-300 ">
                                  Already Added <CheckIcon width={20} height={20}></CheckIcon>
                              </button>
                              :
                              <button className="w-11/12 bg-white hover:bg-theme text-theme-hover font-semibold hover:text-background py-2 px-2 hover:border-transparent rounded absolute bottom-0 right-2/4 translate-x-2/4 translate-y-full group-hover:-translate-y-1 hover:translate-y-0 transition ease-in-out duration-300 "
                                      onClick={()=> {
                                          props.addcart(slide);
                                          setAddedToCart(true);
                                          setItemAddedId(slide._id);
                                      }}>
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

export default TrindingSlider;

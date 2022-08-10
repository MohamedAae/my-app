import React, {useEffect} from "react";
import {connect} from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import classes from "./offers-slider.module.css";
import SwiperCore, { Autoplay } from "swiper";

let offers = [];
const OffersSlider = (props) => {

  offers = props.offers.offers;
  SwiperCore.use([Autoplay]);

  return (
    <section>
      <Swiper
        navigation  = {true}
        modules     = {[Navigation]}
        className   = {classes.swiper}
        loop        = {true}
        speed       = {700}
        autoplay    = {{
          delay               : 2500,
          disableOnInteraction: false,
        }}
      >
        {offers.length && offers.map( (offer, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={offer.image}
                alt=""
                className={`${classes["swiper-slide"]} w-full` }
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

const mapStateToProps = (state) => {
  return({
    offers: state.offers,
  });
}

export default connect(mapStateToProps)(OffersSlider);
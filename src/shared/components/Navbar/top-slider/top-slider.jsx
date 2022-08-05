import React, {useEffect} from "react";
import {connect} from "react-redux";

import {getOffers} from "../../../../redux/offers/offers.actions";

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import classes from "./top-slider.module.css";

let textOffers = [];
const TopSlider = (props) => {

    useEffect(() => {
        props.getOffers();
    }, [])
    textOffers = props.offers.offers;

    return (
        <div>
            <Swiper
                navigation  = {true}
                modules     = {[Navigation]}
                className   = {`${classes.swiper} text-center bg-background mb-3`}
                loop        = {true}
                speed       = {1000}
                autoplay    = {{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                {
                    textOffers.length && textOffers.map((offer, index) => {
                        return (
                            <SwiperSlide key={index} className={`py-2`}>
                                <a href={offer.url} className="text-gray-50">{offer.title}</a>
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </div>
    );
}

const mapStateToProps = (state) => {
    return ({
        offers: state.offers,
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        getOffers: () => dispatch(getOffers()),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(TopSlider);

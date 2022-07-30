import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import classes from './trinding-slider.module.css'

export default function TrindingSlider() {
    const SliderBooks = [
        {
          "id": 1,
          "price": 125,
          "cover": "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780439064873_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
          "bookurl":""
        },
        {
          "id": 2,
          "price": 584,
          "cover": "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780439064873_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
          "bookurl":""
        },
        {
          "id": 3,
          "price": 98,
          "cover": "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780439064873_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
          "bookurl":""
        },
        {
          "id": 4,
          "price": 781,
          "cover": "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780439064873_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
          "bookurl":""
        },
        {
          "id": 5,
          "price": 14,
          "cover": "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780439064873_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
          "bookurl":""

        }, {
          "id": 6,
          "price": 525,
          "cover": "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780439064873_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
          "bookurl":""
        }, {
          "id": 7,
          "price": 278,
          "cover": "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780439064873_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
          "bookurl":""

        }, {
          "id": 8,
          "price": 147,
          "cover": "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780439064873_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
          "bookurl":""

        }, {
          "id": 9,
          "price": 100,
          "cover": "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780439064873_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
          "bookurl":""

        }, {
          "id": 10,
          "price": 621,
          "cover": "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780439064873_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
          "bookurl":""

        }, {
          "id": 11,
          "price": 321,
          "cover": "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780439064873_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
          "bookurl":""

        }, {
          "id": 12,
          "price": 500,
          "cover": "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780439064873_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
          "bookurl":""

        },
      ];
  return (
    <section id="trinding" className="my-10">
        <Swiper
        slidesPerView={7}
        spaceBetween={5}
        slidesPerGroup={7}
        loop={true}
        loopFillGroupWithBlank={true}
        
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {SliderBooks.map((slide, index) => {
          return (
            <SwiperSlide className='text-center relative group' >
                <a href={slide.bookurl} className=''>
                <img src={slide.cover} className={`${classes.resize} `} />
                </a>
                <button className="bg-blue-200 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded absolute bottom-0 right-2/4 translate-x-2/4 translate-y-full group-hover:translate-y-0 hover:translate-y-0 transition ease-in-out delay-150 ">
                Quick Add
                </button>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

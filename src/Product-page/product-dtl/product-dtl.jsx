import React, { useEffect } from "react";
import { connect } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { getProducts } from "../../redux/products/products.action";
import { Carousel } from "react-responsive-carousel";

let bestBooks=[];

const ProductDtl = (props) => {
  useEffect(() => {
    props.getProducts();
  }, []);
  bestBooks = props.products.products;

  function forloop(bookRating) {
    let starsarr = [],
      color;
    for (let i = 0; i < 5; i++) {
      color = "text-gray-300";
      if (bookRating > i) {
        color = "text-yellow-300";
      }
      starsarr.push(
        <svg
          aria-hidden="true"
          className={`w-5 h-5 ${color}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Second star</title>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    return starsarr;
  }
  return (
    <section className="w-11/12 mx-auto">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <img src={bestBooks.length && bestBooks[10].image} alt="" />
          {/* <Carousel interval="1000" transitionTime="1000">
            {bestBooks &&
              bestBooks.map((book) => {
                return (
                  <div>
                    <img
                      src={book.thumbnail.map((img) => {
                        return img.image;
                      })}
                    />
                  </div>
                );
              })}
          </Carousel> */}
        </div>
        <div className="col-span-3">
          <div>
            <div class="p-6 ">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {bestBooks.length&& bestBooks[10].name}
                </h5>
              </a>
              <div className="flex mt-2.5 mb-5">
                {forloop(bestBooks.length&& bestBooks[10].rating)} <span></span>
              </div>
              <hr className="my-2" />
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
};
let mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDtl);

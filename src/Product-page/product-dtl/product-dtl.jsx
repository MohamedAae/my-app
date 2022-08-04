import React, {useEffect} from "react";
import {connect} from "react-redux";

import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {getProductById} from "../../redux/products/products.action";

let book = {},
    loading = true;

const ProductDtl = (props) => {

    useEffect(() => {
        props.getProductById(props.productId);
    }, []);

    book = props.product;
    loading = props.productLoading;

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
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
            );
        }
        return starsarr;
    }

    return (
        <section className="w-10/12 mx-auto">
            <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2">
                    <Carousel interval="500" transitionTime="500">
                        {
                            loading
                                ?
                                <Skeleton variant="rectangular" width={210}
                                          height={118}/>
                                :
                                book.thumbnail.length
                                    ?
                                    book.thumbnail.map((imageUrl) => {
                                        return (
                                            <div>
                                                <img src={imageUrl} alt=""/>
                                            </div>
                                        );
                                    })
                                    :
                                    <div>
                                        <img src={book.image} alt=""/>
                                    </div>
                        }
                    </Carousel>
                </div>
                <div className="col-span-4">
                    <div>
                        <div class="p-6 ">
                            <a href="#">
                                <h5 className="mb-2 text-4xl font-black tracking-tight text-gray-900 dark:text-white">
                                    {
                                        loading ?
                                            <Skeleton/>
                                            :
                                            book.name
                                    }
                                </h5>
                            </a>
                            <div className="flex mt-2.5 mb-5">
                                {
                                    loading
                                        ?
                                        <Skeleton/>
                                        :
                                        forloop(book.rating)
                                }
                                <span></span>
                            </div>
                            <hr className="my-2"/>
                            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">
                                <span
                                    className={"block text-xl"}>Paperback</span>
                                &#36;
                                {
                                    loading
                                        ?
                                        <Skeleton width={20} height={20}/>
                                        :
                                        `${book.price}`
                                }
                            </h3>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {
                                    loading
                                        ?
                                        <Skeleton count={4}/>
                                        :
                                        book.description
                                }
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Read more &rarr;
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
let mapStateToProps = (state) => {
    return {
        product: state.products.product,
        productLoading: state.products.productLoading
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        getProductById: (id) => dispatch(getProductById(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDtl);

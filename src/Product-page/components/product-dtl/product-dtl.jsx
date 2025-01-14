import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {getProductById} from "../../../redux/products/products.action";
import {AddToCart} from "../../../redux/cart/cart.action";
import {Helpers} from "../../../shared/helpers";
import {CheckIcon} from "@heroicons/react/solid";

let book = {}, loading = true;

const ProductDtl = (props) => {
    const [readMore, setReadMore] = useState(false);

    useEffect(() => {
        props.getProductById(props.productId);
    }, []);

    book = props.product;
    loading = props.productLoading;

    const renderHTML = (rawHTML) => {
        return React.createElement("div", {
            dangerouslySetInnerHTML: {__html: rawHTML},
        });
    };


    const [addedToCart, setAddedToCart] = useState(false);
    const [itemAddedId, setItemAddedId] = useState(null);
    const [checkIfInCart, setCheckIfInCart] = useState([]);

    const checkCart = () => {
        const inCart = Helpers.checkIfInCart(props.cartItems ? props.cartItems : [], itemAddedId);
        if (inCart) {
            setCheckIfInCart([...checkIfInCart, itemAddedId])
        }
    };

    useEffect(() => {
        checkCart();
        setAddedToCart(false);
    }, [itemAddedId, addedToCart]);

    return (<section className="mt-10    lg:w-11/12 lg:mx-auto">
            <div
                className="lg:w-8/12 lg:grid lg:grid-cols-6 lg:gap-40 lg:mx-auto">
                <div
                    className=" w-8/12 md:w-5/12 mx-auto  lg:col-span-2 lg:w-80">
                    <Carousel interval="500" transitionTime="500">
                        {loading ? (<Skeleton variant="rectangular" width={210}
                                              height={118}/>) : book.thumbnail.length ? (book.thumbnail.map((imageUrl) => {
                                return (<div>
                                        <img src={imageUrl} alt=""/>
                                    </div>);
                            })) : (<div>
                                <img src={book.image} alt=""/>
                            </div>)}
                    </Carousel>
                </div>
                <div className="lg:col-span-4">
                    <div>
                        <div class="p-6 ">
                            <a href="src/Product-page/components/product-dtl/product-dtl#">
                                <h5 className="mb-2  text-4xl font-black tracking-tight text-gray-900 dark:text-white">
                                    {loading ? <Skeleton/> : book.name}
                                </h5>
                            </a>
                            <div className="flex lg:mt-2.5 Lg:mb-5">
                                {loading ?
                                    <Skeleton/> : Helpers.displayRating(book.rating)}
                                <span></span>
                            </div>
                            <div>
                                <p className={`my-2 text-gray-400 font-medium text-sm`}>
                                    Items Available: {book.stock}
                                </p>
                            </div>
                            <hr className="my-2"/>
                            <h3 className="lg:mb-2 lg:text-2xl font-bold tracking-tight text-gray-800">
                                <span
                                    className={"block lg:text-xl"}>Paperback</span>
                                &#36;
                                {loading ? (<Skeleton width={20}
                                                      height={20}/>) : (`${book.price}`)}
                            </h3>
                            <p
                                className={`lg:mb-3 font-normal text-gray-700
                                 dark:text-gray-400 ${readMore ? "line-clamp-none" : "line-clamp-5"}`}
                            >
                                {loading ? (<Skeleton
                                        count={4}/>) : (renderHTML(book.description))}
                            </p>
                            <a
                                href="src/Product-page/components/product-dtl/product-dtl#"
                                onClick={() => setReadMore(!readMore)}
                                className="block py-3 mt-3 mb-5 md:w-3/12 md:mr-5 lg:mr-1 md:inline-block items-center lg:py-2 px-3 text-sm text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 bg-background dark:focus:ring-blue-800"
                            >
                                {readMore ? "Read Less ↑" : "Read More ↓"}
                            </a>
                            {book.stock ? checkIfInCart.includes(book._id) ?
                                <button className="block text-center md:mt-6 md:w-3/12 lg:w-5/12
                 md:inline-block md:px-4  lg:text-start py-2 xl:px-12  lg:px-10 text-green-900 bg-gray-400 lg:ml-2 rounded-lg">
                                    Already Added <CheckIcon width={20}
                                                             height={20}></CheckIcon>
                                </button> : <button className="block text-center md:mt-6 md:w-3/12 lg:w-5/12
                 md:inline-block md:px-4 bg-theme lg:text-start py-2  text-background hover:bg-theme-hover lg:ml-2 rounded-lg justify-center items-center"
                                                    onClick={() => {
                                                        props.AddToCart(book);
                                                        setAddedToCart(true);
                                                        setItemAddedId(book._id);
                                                    }}>
                                    ADD TO CART
                                </button> : <button className="block text-center md:mt-6 md:w-3/12 lg:w-5/12
                 md:inline-block md:px-4 bg-red-700 lg:text-start py-2 xl:px-12  lg:px-10 text-background hover:bg-theme-hover lg:ml-2 rounded-lg">
                                Out Of Stock
                            </button>}

                        </div>
                    </div>
                </div>
            </div>
        </section>);
};
let mapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems,
        product: state.products.product,
        productLoading: state.products.productLoading,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        getProductById: (id) => dispatch(getProductById(id)),
        AddToCart: (book) => dispatch(AddToCart(book)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDtl);

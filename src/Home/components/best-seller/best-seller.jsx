import React, {useEffect} from "react";
import {connect} from "react-redux";
import "./best-seller.css";
import {getBestBooks, getProducts} from "../../../redux/products/products.action";
import {NavLink} from "react-router-dom";

let bestBooks = [];

const BestSeller = (props) => {
    useEffect(() => {
        props.getBestBooks();
    }, []);

    bestBooks = props.bestSellerBooks;

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
                    {bestBooks.length && bestBooks[0].rating}
                    <title>Second star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
            );
        }
        return starsarr;
    }

    return (
        <section className="w-11/12 mx-auto">
            <h1 className="py-6 text-3xl italic font-serif">Our Booksellers Recommend</h1>
            <aside
                className="w-11/12 grid grid-cols-4 text-center gap-2  mx-auto w-11/12 ">
                <div className="grid gap-2">
                    <div
                        className="max-w-sm bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                        <div className=" group relative overflow-hidden">
                            <a href="#">
                                <img
                                    className=" h-94 w-full px-5  rounded-t-lg"
                                    src={
                                        bestBooks.length
                                            ?
                                            bestBooks[0].thumbnail.length
                                                ?
                                                bestBooks[0].thumbnail[0]
                                                :
                                                bestBooks[0].image
                                            :
                                            ""
                                    }
                                    alt="product image"
                                />
                            </a>
                            <button
                                className="w-11/12 bg-gray-50 hover:bg-gray-700 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded absolute right-2/4 translate-x-2/4 translate-y-full group-hover:translate-y-0 hover:translate-y-0 transition ease-in-out delay-150 duration-1000 ">
                                Quick Add
                            </button>
                        </div>
                        <div className="px-5 pb-5">
                            <NavLink
                                to={`/product/${bestBooks.length && bestBooks[0]._id}`}>
                                <h5 className="text-2xl  font-semibold py-2 tracking-tight text-gray-900 dark:text-white">
                                    {bestBooks.length && bestBooks[0].name}
                                </h5>
                            </NavLink>
                            <a href="">{/* <p>{bestBooks[0].aothr}</p> */}</a>
                            <div className="flex justify-center mt-2.5 mb-5">
                                {forloop(bestBooks.length && bestBooks[0].rating)}
                            </div>
                            <div>
                                <p>{bestBooks.length && bestBooks[0].description.slice(0,300)}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid col-span-3 gap-2 mx-auto text-center">
                    <div className=" grid grid-cols-4 gap-4  mx-auto">
                        {bestBooks.map((book, i) => {
                            if (i != 0) {
                                return (
                                        <div
                                            className=" px-4 max-w-sm bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700 rounded mb-4">
                                            <div
                                                className=" group relative overflow-hidden">
                                                <a href="#">
                                                    <img
                                                        
                                                        className="object-cover h-60  w-full  rounded-t-lg"
                                                        src={bestBooks.length && book.image}
                                                        alt="product image"
                                                    />
                                                </a>
                                                <button
                                                    className="w-10/12 bg-gray-50 hover:bg-gray-700 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded absolute right-2/4 translate-x-2/4 translate-y-full group-hover:translate-y-0 hover:translate-y-0 transition ease-in-out delay-150 duration-1000 ">
                                                    Quick Add
                                                </button>
                                            </div>
                                            <div className="px-5 pb-5">
                                                <a href="#">
                                                    <h5 className="flex justify-center items-start text-xl font-semibold tracking-tight text-gray-900 dark:text-white h-14 my-4">
                                                        {bestBooks.length && book.name.slice(0,25)}
                                                    </h5>
                                                </a>
                                                <a href="#"
                                                   className="underline text-gray-500">
                                                    {/* <p>{book.author}</p> */}
                                                </a>
                                                <div
                                                    className="flex justify-center mt-2.5 mb-5">
                                                    {forloop(bestBooks.length && book.rating)}
                                                </div>
                                            </div>
                                        </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </aside>
        </section>
    );
};

let mapStateToProps = (state) => {
    return {
        products: state.products.products,
        bestSellerBooks:state.products.bestSellerBooks
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch(getProducts()),
        getBestBooks:()=>dispatch(getBestBooks())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BestSeller);

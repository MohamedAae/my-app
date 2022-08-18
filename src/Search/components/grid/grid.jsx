import React, {useEffect, useState} from "react";
import {NavLink, useLocation, useParams} from "react-router-dom";
import {connect} from "react-redux";
import {Helpers} from "../../../shared/helpers";

import {AddToCart} from "../../../redux/cart/cart.action";
import {searchProducts} from "../../../redux/search/search.action";

import {
    CheckIcon,
    ChevronLeftIcon,
    ChevronRightIcon
} from "@heroicons/react/solid";

const pageSize = 12;
let allBooks = [],
    redirected = true,
    fromNavBar;

const SearchGrid = (props) => {
    const location = useLocation(),
        params = useParams(),
        keyword = params.keyword,
        [page, setpage] = useState(1),
        numberofpages = Math.ceil(
            props.totalResults / pageSize ? props.totalResults / pageSize : 0
        );

    fromNavBar = false;
    if (redirected) {
        fromNavBar = location?.state?.fromNavbar
            ? location.state.fromNavbar
            : false;
        if (fromNavBar) {
            setpage(1);
        }

        redirected = false;
    }

    useEffect(() => {
        if (!fromNavBar || page !== 1) {
            return props.getSearchResult(keyword, page, pageSize);
        }
    }, [page]);

    allBooks = props.searchResult;
    let currentPage = page;

    const displayPages = (numberofpages) => {
        let pages = [];
        for (let i = 1; i <= numberofpages; i++) {
            const active = i === currentPage ? "text-background bg-theme" : "";
            pages.push(
                <a
                    onClick={() => {
                        setpage(i);
                    }}
                    aria-current="page"
                    className={`cursor-pointer z-10 ${active} relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
                >
                    {i}
                </a>
            );
        }
        return pages;
    };

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
        <>
            <div
                className="bg-white mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                    <div
                        className="relative z-10 flex items-baseline justify-between pt-14 pb-6 border-b border-gray-200">
                        <h1 className="text-4xl font-extrabold tracking-tight text-background">
                            Search Results: {keyword}
                        </h1>
                    </div>

                    <main className="max-w-7xl mx-auto mt-5 sm:px-6 lg:px-8">
                        <div className="lg:col-span-3">
                            <div className="bg-transparent">
                                <div className="">
                                    <div>
                                        <div
                                            className="grid col-span-3 gap-2 mx-auto text-center mb-10">
                                            <div
                                                className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-16 gap-y-10 mx-auto">
                                                {allBooks.map((book, i) => {
                                                    return (
                                                        <div
                                                            className="max-w-sm bg-transparent rounded-lg rounded mb-4">
                                                            <div
                                                                className=" group relative overflow-hidden">
                                                                <NavLink
                                                                    to={`/c/${book.categoryId.url}/${book._id}`}
                                                                >
                                                                    <img
                                                                        className="object-cover h-60  w-full  rounded-t-lg"
                                                                        src={allBooks.length && book.image}
                                                                        alt="product image"
                                                                    />
                                                                </NavLink>
                                                                {
                                                                    book.stock
                                                                        ?
                                                                        checkIfInCart.includes(book._id) ?
                                                                            <button
                                                                                className="w-11/12 flex justify-center items-center bg-white text-green-500 font-semibold hover:text-background py-2 px-2 hover:border-transparent rounded absolute bottom-0 right-2/4 translate-x-2/4 translate-y-full group-hover:-translate-y-1 hover:translate-y-0 transition ease-in-out duration-300 ">
                                                                                Already
                                                                                Added <CheckIcon
                                                                                width={20}
                                                                                height={20}></CheckIcon>
                                                                            </button>
                                                                            :
                                                                            <button
                                                                                className="w-11/12 bg-white hover:bg-theme text-theme-hover font-semibold hover:text-background py-2 px-2 hover:border-transparent rounded absolute bottom-0 right-2/4 translate-x-2/4 translate-y-full group-hover:-translate-y-1 hover:translate-y-0 transition ease-in-out duration-300 "
                                                                                onClick={() => {
                                                                                    props.AddToCart(book);
                                                                                    setAddedToCart(true);
                                                                                    setItemAddedId(book._id);
                                                                                }}>
                                                                                Quick
                                                                                Add
                                                                            </button>
                                                                        :
                                                                        <button
                                                                            className="w-11/12 text-white bg-red-500 font-semibold py-2 px-2 border border-red-500 rounded absolute bottom-0 right-2/4 translate-x-2/4 translate-y-full group-hover:-translate-y-1 hover:translate-y-0 transition ease-in-out duration-300 ">
                                                                            Out
                                                                            Of
                                                                            Stock
                                                                        </button>
                                                                }
                                                            </div>
                                                            <div
                                                                className="flex justify-between mt-2.5 ">
                                                                <div
                                                                    className={`flex justify-center`}>
                                                                    {Helpers.displayRating(
                                                                        allBooks.length && book.rating
                                                                    )}
                                                                </div>
                                                                <p className={`font-semibold text-gray-400`}>
                                                                    ${book.price.toFixed(2)}
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <NavLink
                                                                    to={`/c/${book.categoryId.url}/${book._id}`}
                                                                >
                                                                    <h5 className="flex justify-center items-start text-xl font-semibold tracking-tight text-gray-900 h-16 my-1 ">
                                                                        {allBooks.length && book.name.slice(0, 25)}
                                                                    </h5>
                                                                </NavLink>
                                                                <a
                                                                    href="src/Search/components/grid/grid#"
                                                                    className="underline text-gray-500"
                                                                >
                                                                    <p>{book.author}</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <nav
                                            className="relative z-0 inline-flex rounded-md -space-x-px justify-center items-center w-full"
                                            aria-label="Pagination"
                                        >
                                            <a
                                                onClick={() => {
                                                    if (page > 1) {
                                                        setpage(page - 1);
                                                    }
                                                }}
                                                className="cursor-pointer relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                            >
                                                <span
                                                    className="sr-only">Previous</span>
                                                <ChevronLeftIcon
                                                    className="h-5 w-5"
                                                    aria-hidden="true"
                                                />
                                            </a>
                                            {displayPages(numberofpages)}
                                            <a
                                                onClick={() => {
                                                    if (page !== numberofpages) {
                                                        setpage(page + 1);
                                                    }
                                                }}
                                                className="cursor-pointer relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                            >
                                                <span
                                                    className="sr-only">Next</span>
                                                <ChevronRightIcon
                                                    className="h-5 w-5"
                                                    aria-hidden="true"
                                                />
                                            </a>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

let mapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems,
        count: state.products.count,
        searchResult: state.search.searchResult,
        totalResults: state.search.totalResults,
        searchResultLoading: state.search.searchResultLoading,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        AddToCart: (book) => dispatch(AddToCart(book)),
        getSearchResult: (keyword, page, pageSize) => {
            dispatch(searchProducts(keyword, page, pageSize));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchGrid);

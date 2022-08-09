import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../../redux/products/products.action";
import { XIcon } from '@heroicons/react/outline';
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";
import { Helpers } from "../../../shared/helpers";
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import {getCategoryBooks} from "../../../redux/categories/categories.action";
import {AddToCart} from "../../../redux/cart/cart.action";

const pageSize = 12;
let allBooks = [];


const filters =   {
    id: 'category',
    name: 'Category',
    options: []
}

const SearchGrid = (props) => {

    filters.options = props.categories;
    const [categoryId, setCategoryId]                   = useState([]),
        [discountRate, setDiscountRate]               = useState(0),
        [filter, setFilter]                           = useState(""),
        [filterDirection, setFilterDirection]           = useState(0),
        [page, setpage]                                 = useState(1),
        numberofpages                                   = Math.ceil(props.count / pageSize ? props.count / pageSize : 0);

    useEffect(() => {
        props.getAllBooks(pageSize, page, filter, filterDirection, categoryId, discountRate);
    }, [page, filter, filterDirection, categoryId, discountRate]);

    allBooks = props.products;
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
    return (
        <>
            <div className="bg-white mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                    <div className="relative z-10 flex items-baseline justify-between pt-14 pb-6 border-b border-gray-200">
                        <h1 className="text-4xl font-extrabold tracking-tight text-background">Search Results: keywords</h1>
                    </div>

                    <main className="max-w-7xl mx-auto mt-5 sm:px-6 lg:px-8">
                        <div className="lg:col-span-3">
                            <div className="bg-white">
                                <div className="">
                                    <div>
                                        <div className="grid col-span-3 gap-2 mx-auto text-center mb-10">
                                            <div className=" grid grid-cols-4 gap-x-16 gap-y-10  mx-auto">
                                                {allBooks.map((book, i) => {
                                                    return (
                                                        <div className="max-w-sm bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700 rounded mb-4">
                                                            <div className=" group relative overflow-hidden">
                                                                <NavLink to={`/c/${book.categoryId.url}/${book._id}`}>
                                                                    <img
                                                                        className="object-cover h-60  w-full  rounded-t-lg"
                                                                        src={allBooks.length && book.image}
                                                                        alt="product image"
                                                                    />
                                                                </NavLink>

                                                                <button
                                                                    onClick={() => props.AddToCart(book)}
                                                                    className="w-10/12 bg-white hover:bg-theme text-theme-hover font-semibold hover:text-background py-2 px-2 hover:border-transparent rounded absolute right-2/4 translate-x-2/4 translate-y-full group-hover:-translate-y-1 hover:translate-y-0 transition ease-in-out duration-300"
                                                                >
                                                                    Quick Add
                                                                </button>
                                                            </div>
                                                            <div className="flex justify-between mt-2.5 ">
                                                                <div className={`flex justify-center`}>
                                                                    {Helpers.displayRating(allBooks.length && book.rating)}
                                                                </div>
                                                                <p className={`font-semibold text-gray-400`}>${book.price.toFixed(2)}</p>
                                                            </div>
                                                            <div>
                                                                <NavLink to={`/c/${book.categoryId.url}/${book._id}`}>
                                                                    <h5 className="flex justify-center items-start text-xl font-semibold tracking-tight text-gray-900 dark:text-white h-16 my-1 ">
                                                                        {allBooks.length && book.name.slice(0, 25)}
                                                                    </h5>
                                                                </NavLink>
                                                                <a href="src/Search/components/grid/grid#" className="underline text-gray-500">
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
                                                    if ( page > 1 ) {
                                                        setpage(page - 1);
                                                    }
                                                }}
                                                className="cursor-pointer relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                            >
                                                <span className="sr-only">Previous</span>
                                                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
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
                                                <span className="sr-only">Next</span>
                                                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                            </a>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            {/*/!* Replace with your content *!/*/}
                            {/*<div className="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full" />*/}
                            {/*/!* /End replace *!/*/}
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

let mapStateToProps = (state) => {
    return {
        products: state.products.products,
        count: state.products.count,
        categories: state.categories.categories
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        getAllBooks:
            (pageSize, page, filter, filterDirection, categoryId, discountRate) => {
                dispatch(getProducts(pageSize, page, filter, filterDirection, categoryId, discountRate))
            },
        AddToCart: (book) => dispatch(AddToCart(book)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchGrid);
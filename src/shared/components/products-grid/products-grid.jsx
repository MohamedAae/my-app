import React, {Fragment, useEffect, useState} from "react";
import {connect} from "react-redux";
import {getProducts} from "../../../redux/products/products.action";
import {XIcon} from "@heroicons/react/outline";
import {
    MinusSmIcon, PlusSmIcon,
} from "@heroicons/react/solid";
import {Dialog, Disclosure, Menu, Transition} from "@headlessui/react";
import {AddToCart} from "../../../redux/cart/cart.action";
import Grid from "./components/grid";
import Sort from "./components/sort";
import Filters from "./components/filters";

const pageSize = 12;
const sortOptions = [{
    name: "All", filter: "", direction: 0, href: "#", current: true
}, {
    name: "Best Rating",
    filter: "rating",
    direction: -1,
    href: "#",
    current: false,
}, {
    name: "Price: Low to High",
    filter: "price",
    direction: 1,
    href: "#",
    current: false,
}, {
    name: "Price: High to Low",
    filter: "price",
    direction: -1,
    href: "#",
    current: false,
},];
const discountRates = [{
    name: "All",
    discount: "0",
    href: "#"
}, {
    name: "30% Discount Rate",
    discount: "30",
    href: "#"
}, {
    name: "60% Discount Rate",
    discount: "60",
    href: "#"
}, {name: "80% Discount Rate", discount: "80", href: "#"},];
const filters = {
    id: "category", name: "Category", options: [],
};

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const ProductsGrid = (props) => {
    filters.options = props.categories;
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [categoryId, setCategoryId] = useState([]);
    const [discountRate, setDiscountRate] = useState(0);
    const [filter, setFilter] = useState("");
    const [filterDirection, setFilterDirection] = useState(0);
    const [page, setPage] = useState(1);
    const [deleted, setDeleted] = useState(false);

    useEffect(() => {
        props.getAllBooks(pageSize, page, filter, filterDirection, categoryId, discountRate);
        setDeleted(false);
    }, [page, filter, filterDirection, categoryId, discountRate, deleted]);

    let currentPage = page;

    const checkIfChecked = (event, id) => {
        const checked = event.target.checked;
        setPage(1);
        if (checked) {
            return setCategoryId([...categoryId, id]);
        }

        return setCategoryId(categoryId.filter((currentId) => {
            return currentId !== id;
        }));
    };

    return (<>
        <div className="bg-transparent">
            <div>
                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="relative z-40 lg:hidden"
                        onClose={setMobileFiltersOpen}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div
                                className="fixed inset-0 bg-black bg-opacity-25"/>
                        </Transition.Child>

                        <div className="fixed inset-0 flex z-40">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel
                                    className="ml-auto relative max-w-xs w-full h-full bg-transparent shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                                    <div
                                        className="px-4 flex items-center justify-between">
                                        <h2 className="text-lg font-medium text-gray-900">
                                            Filters
                                        </h2>
                                        <button
                                            type="button"
                                            className="-mr-2 w-10 h-10 bg-transparent p-2 rounded-md flex items-center justify-center text-gray-400"
                                            onClick={() => setMobileFiltersOpen(false)}
                                        >
                                            <span
                                                className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6"
                                                   aria-hidden="true"/>
                                        </button>
                                    </div>

                                    <form
                                        className="mt-4 border-t border-gray-200">
                                        <h3 className="sr-only">Categories</h3>
                                        <ul
                                            role="list"
                                            className="font-medium text-gray-900 px-2 py-3"
                                        >
                                            {discountRates.map((rate) => (<li
                                                key={rate.name}
                                                onClick={() => {
                                                    setDiscountRate(rate.discount);
                                                    setPage(1);
                                                }}
                                            >
                                                <a href={rate.href}
                                                   className="block px-2 py-3">
                                                    {rate.name}
                                                </a>
                                            </li>))}
                                        </ul>
                                        {<Disclosure
                                            as="div"
                                            key={filter.id}
                                            className="border-t border-gray-200 px-4 py-6"
                                        >
                                            {({open}) => (<>
                                                <h3 className="-mx-2 -my-3 flow-root">
                                                    <Disclosure.Button
                                                        className="px-2 py-3 bg-transparent w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">
                                    {filter.name}
                                  </span>
                                                        <span
                                                            className="ml-6 flex items-center">
                                    {open ? (<MinusSmIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />) : (<PlusSmIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />)}
                                  </span>
                                                    </Disclosure.Button>
                                                </h3>
                                                <Disclosure.Panel
                                                    className="pt-6">
                                                    <div
                                                        className="space-y-6">
                                                        {Object.keys(filters.options).length ? filters.options.map((option, optionIdx) => (
                                                            <div
                                                                key={option.value}
                                                                className="flex items-center"
                                                            >
                                                                <input
                                                                    onClick={(event) => checkIfChecked(event, option._id)}
                                                                    id={`filter-mobile-${filter.id}-${optionIdx}`}
                                                                    name={`${filter.id}[]`}
                                                                    defaultValue={option._id}
                                                                    type="checkbox"
                                                                    defaultChecked={option.checked}
                                                                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                                />
                                                                <label
                                                                    htmlFor={`filter-mobile-${filter.id}-${optionIdx}`}
                                                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                >
                                                                    {option.name}
                                                                </label>
                                                            </div>)) : ""}
                                                    </div>
                                                </Disclosure.Panel>
                                            </>)}
                                        </Disclosure>}
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <main className="max-w-7xl mx-auto">
                    <div
                        className="relative z-10 md:flex md:items-baseline  md:justify-between pt-14 pb-6 border-b border-gray-200">
                        <h1 className="text-4xl text-center font-extrabold tracking-tight text-background">
                            {props.pageTitle}
                        </h1>
                        <Sort
                            sortOptions={sortOptions}
                            setFilter={setFilter}
                            setFilterDirection={setFilterDirection}
                            classNames={classNames}
                            setMobileFiltersOpen={setMobileFiltersOpen}
                        />
                    </div>

                    <section aria-labelledby="products-heading"
                             className="pt-6 pb-24">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>
                        <div
                            className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                            <Filters
                                discountRates={discountRates}
                                discountRate={discountRate}
                                setDiscountRate={setDiscountRate}
                                setPage={setPage}
                                filters={filters}
                                checkIfChecked={checkIfChecked}
                            />
                            <Grid
                                products={props.products}
                                count={props.count}
                                currentPage={currentPage}
                                page={page}
                                setPage={setPage}
                                setDeleted={setDeleted}
                            />
                        </div>
                    </section>
                </main>
            </div>
        </div>
    </>);
};

let mapStateToProps = (state) => {
    return {
        products: state.products.products,
        count: state.products.count,
        categories: state.categories.categories,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        getAllBooks: (pageSize, page, filter, filterDirection, categoryId, discountRate) => {
            dispatch(getProducts(pageSize, page, filter, filterDirection, categoryId, discountRate));
        }, AddToCart: (book) => dispatch(AddToCart(book)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsGrid);

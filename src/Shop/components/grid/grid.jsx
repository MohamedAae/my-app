import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../../redux/products/products.action";
import { XIcon } from "@heroicons/react/outline";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  FilterIcon,
  MinusSmIcon,
  PlusSmIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";
import { Helpers } from "../../../shared/helpers";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { getCategoryBooks } from "../../../redux/categories/categories.action";
import { AddToCart } from "../../../redux/cart/cart.action";

const pageSize = 12;
let allBooks = [];

const sortOptions = [
  { name: "All", filter: "", direction: 0, href: "#", current: true },
  {
    name: "Best Rating",
    filter: "rating",
    direction: -1,
    href: "#",
    current: false,
  },
  {
    name: "Price: Low to High",
    filter: "price",
    direction: 1,
    href: "#",
    current: false,
  },
  {
    name: "Price: High to Low",
    filter: "price",
    direction: -1,
    href: "#",
    current: false,
  },
];

const discountRates = [
  { name: "All", discount: "0", href: "#" },
  { name: "30% Discount Rate", discount: "30", href: "#" },
  { name: "60% Discount Rate", discount: "60", href: "#" },
  { name: "80% Discount Rate", discount: "80", href: "#" },
];

const filters = {
  id: "category",
  name: "Category",
  options: [],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Grid = (props) => {
  filters.options = props.categories;
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false),
    [categoryId, setCategoryId] = useState([]),
    [discountRate, setDiscountRate] = useState(0),
    [filter, setFilter] = useState(""),
    [filterDirection, setFilterDirection] = useState(0),
    [page, setpage] = useState(1),
    numberofpages = Math.ceil(
      props.count / pageSize ? props.count / pageSize : 0
    );

  useEffect(() => {
    props.getAllBooks(
      pageSize,
      page,
      filter,
      filterDirection,
      categoryId,
      discountRate
    );
  }, [page, filter, filterDirection, categoryId, discountRate]);

  allBooks = props.products;
  let currentPage = page;

  const checkIfChecked = (event, id) => {
    const checked = event.target.checked;
    setpage(1);
    if (checked) {
      return setCategoryId([...categoryId, id]);
    }

    return setCategoryId(
      categoryId.filter((currentId) => {
        return currentId !== id;
      })
    );
  };

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
                <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                  <Dialog.Panel className="ml-auto relative max-w-xs w-full h-full bg-transparent shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                    <div className="px-4 flex items-center justify-between">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 w-10 h-10 bg-transparent p-2 rounded-md flex items-center justify-center text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4 border-t border-gray-200">
                      <h3 className="sr-only">Categories</h3>
                      <ul
                        role="list"
                        className="font-medium text-gray-900 px-2 py-3"
                      >
                        {discountRates.map((rate) => (
                          <li
                            key={rate.name}
                            onClick={() => {
                              setDiscountRate(rate.discount);
                              setpage(1);
                            }}
                          >
                            <a href={rate.href} className="block px-2 py-3">
                              {rate.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                      {
                        <Disclosure
                          as="div"
                          key={filter.id}
                          className="border-t border-gray-200 px-4 py-6"
                        >
                          {({ open }) => (
                            <>
                              <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="px-2 py-3 bg-transparent w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">
                                    {filter.name}
                                  </span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusSmIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <PlusSmIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-6">
                                  {Object.keys(filters.options).length
                                    ? filters.options.map(
                                        (option, optionIdx) => (
                                          <div
                                            key={option.value}
                                            className="flex items-center"
                                          >
                                            <input
                                              onClick={(event) =>
                                                checkIfChecked(
                                                  event,
                                                  option._id
                                                )
                                              }
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
                                          </div>
                                        )
                                      )
                                    : ""}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      }
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 md:flex md:items-baseline  md:justify-between pt-14 pb-6 border-b border-gray-200">
              <h1 className="text-4xl text-center font-extrabold tracking-tight text-background">
                Shop Book
              </h1>

              <div className="flex items-center justify-end mt-5">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Sort
                      <ChevronDownIcon
                        className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-transparent ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1 bg-gray-50">
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <a
                                onClick={() => {
                                  setFilter(option.filter);
                                  setFilterDirection(option.direction);
                                }}
                                href={option.href}
                                className={classNames(
                                  option.current
                                    ? "font-medium text-gray-900"
                                    : "text-gray-500",
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <button
                  type="button"
                  className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <FilterIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pt-6 pb-24">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                {/* Filters */}
                <form className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>
                  <ul
                    role="list"
                    className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200"
                  >
                    {discountRates.map((rate) => (
                      <li
                        key={rate.name}
                        onClick={() => {
                          setDiscountRate(rate.discount);
                          setpage(1);
                        }}
                        className={
                          rate.discount == discountRate
                            ? "text-theme-hover"
                            : "text-gray-400"
                        }
                      >
                        <a href={rate.href}>{rate.name}</a>
                      </li>
                    ))}
                  </ul>

                  {
                    <Disclosure
                      as="div"
                      key={filters.id}
                      className="border-b border-gray-200 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="py-3 w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {filters.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusSmIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusSmIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              {filters.options.map((option, optionIdx) => (
                                <div
                                  key={option.name}
                                  className="flex items-center"
                                >
                                  <input
                                    onClick={(event) =>
                                      checkIfChecked(event, option._id)
                                    }
                                    id={`filter-${filters.id}-${optionIdx}`}
                                    name={`${filters.id}[]`}
                                    defaultValue={option._id}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-${filters.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600"
                                  >
                                    {option.name}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  }
                </form>

                {/* Product grid */}
                <div className="lg:col-span-3">
                  <div className="bg-transparent">
                    <div className="">
                      <div>
                        <div className="grid col-span-3 gap-2 mx-auto text-center mb-10">
                          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-16 gap-y-10  mx-auto">
                            {allBooks.map((book, i) => {
                              return (
                                <div className="max-w-sm bg-transparent rounded-lg  dark:bg-gray-800 dark:border-gray-700 rounded mb-4">
                                  <div className=" group relative overflow-hidden">
                                    <NavLink
                                      to={`/c/${book.categoryId.url}/${book._id}`}
                                    >
                                      <img
                                        className="object-cover h-60  w-full  rounded-t-lg"
                                        src={allBooks.length && book.image}
                                        alt="product image"
                                      />
                                    </NavLink>

                                    <button
                                      onClick={() => props.AddToCart(book)}
                                      className="w-10/12 bg-transparent hover:bg-theme text-theme-hover font-semibold hover:text-background py-2 px-2 hover:border-transparent rounded absolute right-2/4 translate-x-2/4 translate-y-full group-hover:-translate-y-1 hover:translate-y-0 transition ease-in-out duration-300"
                                    >
                                      Quick Add
                                    </button>
                                  </div>
                                  <div className="flex justify-between mt-2.5 ">
                                    <div className={`flex justify-center`}>
                                      {Helpers.displayRating(
                                        allBooks.length && book.rating
                                      )}
                                    </div>
                                    <p
                                      className={`font-semibold text-gray-400`}
                                    >
                                      ${book.price.toFixed(2)}
                                    </p>
                                  </div>
                                  <div>
                                    <NavLink
                                      to={`/c/${book.categoryId.url}/${book._id}`}
                                    >
                                      <h5 className="flex justify-center items-start text-xl font-semibold tracking-tight text-gray-900 dark:text-white h-16 my-1 ">
                                        {allBooks.length &&
                                          book.name.slice(0, 25)}
                                      </h5>
                                    </NavLink>
                                    <a
                                      href="#"
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
                            className="cursor-pointer relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-transparent text-sm font-medium text-gray-500 hover:bg-gray-50"
                          >
                            <span className="sr-only">Previous</span>
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
                            className="cursor-pointer relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-transparent text-sm font-medium text-gray-500 hover:bg-gray-50"
                          >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                  {/*/!* Replace with your content *!/*/}
                  {/*<div className="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full" />*/}
                  {/*/!* /End replace *!/*/}
                </div>
              </div>
            </section>
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
    categories: state.categories.categories,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getAllBooks: (
      pageSize,
      page,
      filter,
      filterDirection,
      categoryId,
      discountRate
    ) => {
      dispatch(
        getProducts(
          pageSize,
          page,
          filter,
          filterDirection,
          categoryId,
          discountRate
        )
      );
    },
    AddToCart: (book) => dispatch(AddToCart(book)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Grid);

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../../redux/products/products.action";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";
import { Helpers } from "../../../shared/helpers";

let allBooks = [];
const Grid = (props) => {
  const [page, setpage] = useState(1),
    numberofpages = 5;
  console.log(page);
  useEffect(() => {
    props.getAllBooks(10, page);
  }, [page]);
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
      <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
        <div className="">
          <div>
            <div className="grid col-span-3 gap-2 mx-auto text-center mt-5 mb-10">
              <div className=" grid grid-cols-4 gap-4  mx-auto">
                {allBooks.map((book, i) => {
                  return (
                    <div className=" px-4 max-w-sm bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700 rounded mb-4">
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
                      <div className="flex justify-center mt-2.5 ">
                        {Helpers.displayRating(allBooks.length && book.rating)}
                      </div>
                      <div className="px-5">
                        <NavLink to={`/c/${book.categoryId.url}/${book._id}`}>
                          <h5 className="flex justify-center items-start text-xl font-semibold tracking-tight text-gray-900 dark:text-white h-5 my-1 ">
                            {allBooks.length && book.name.slice(0, 25)}
                          </h5>
                        </NavLink>
                        <a href="#" className="underline text-gray-500">
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
                  setpage(page - 1);
                }}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </a>
              {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
              {displayPages(numberofpages)}
              <a
                onClick={() => {
                  setpage(page + 1);
                }}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getAllBooks: (pageSize, page) => dispatch(getProducts(pageSize, page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Grid);

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../../redux/products/products.action";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
let allBooks = [];

const Grid = (props) => {
  const [page, setpage] = useState(1),
    numberofpages = 5;
  console.log(page);
  useEffect(() => {
    props.getAllBooks(5, page);
  }, [page]);
  console.log((allBooks = props.products));

  const displayPages = (numberofpages) => {
    let pages = [];
    for (let i = 1; i <= numberofpages; i++) {
      pages.push(
        <a
          onClick={() => {
            setpage(i);
          }}
          aria-current="page"
          className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
        >
          {i}
        </a>
      );
    }
    return pages;
  };
  return (
    <>
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Previous
          </span>
          <span className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Next
          </span>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">10</span> of{" "}
              <span className="font-medium">97</span> results
            </p>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
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

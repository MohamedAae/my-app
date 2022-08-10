import {useRef, useState} from "react";
import {connect} from "react-redux";
import {Link, NavLink} from "react-router-dom";
import {searchProducts} from "../../../../redux/search/search.action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const page      = 1,
    pageSize    = 12;
let searchResult  = [];

const Search = (props) => {

  const [resultDropdown, setResultDropdown] = useState(false),
    [searchKeyword, setSearchKeyword] = useState("");
  const searchInput = useRef();
  searchResult = props.searchResult.slice(0, 5);

  const searchChangeHandler = (event) => {
    const keyword = event.target.value;
    if (keyword.length === 0) {
      setResultDropdown(false);
    } else {
      setResultDropdown(true);
    }
    props.getSearchResult(keyword, page, pageSize);
    setSearchKeyword(keyword);
  };

  const loading = props.searchResultLoading;

  return (
    <form className="w-full">
      <div className="flex">
        <label
          htmlFor="search-dropdown"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Your Email
        </label>
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          className="hidden flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
          type="button"
        >
          All{" "}
          <svg
            aria-hidden="true"
            className="hidden ml-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          id="dropdown"
          className="hidden z-10 w-44 bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 block outline-none focus:outline-none focus:border-0 border-0"
          data-popper-reference-hidden=""
          data-popper-escaped=""
          data-popper-placement="bottom"
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdown-button"
          >
            <li>
              <button
                type="button"
                className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Mockups
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Templates
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Design
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Logos
              </button>
            </li>
          </ul>
        </div>
        <div className="relative w-full">
          <input
            autoComplete="off"
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-100 border-gray-50 border-1 border border-gray-100 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search books by title"
            required=""
            onChange={searchChangeHandler}
            ref={searchInput}
          />
          {resultDropdown && (
            <div className="absolute bg-white shadow-md z-50 w-full p-2">
              <ul>
                {loading ? (
                  <Skeleton variant="rectangular" width={"100%"} height={25} />
                ) : (
                  searchResult.map((item) => {
                    return (
                      <li>
                        <NavLink
                          to={`/c/${item.categoryId.url || undefined}/${
                            item._id
                          }`}
                          className="flex justify-between items-center py-1"
                          onClick={() => {
                            searchInput.current.value = "";
                            setResultDropdown(false);
                          }}
                        >
                          <div className="flex justify-between items-center">
                            <img
                              height={25}
                              width={25}
                              alt="123"
                              src={item.image}
                            />
                            <h5 className="text-base font-bold text-background ml-2">
                              {item.name}
                            </h5>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-500">
                              ${item.price}
                            </span>
                          </div>
                        </NavLink>
                        {searchResult.length !== 1 && <hr />}
                      </li>
                    );
                  })
                )}
                {
                  props.searchResult.length > 5
                    ?
                      <li>
                        <Link
                            onClick={() => setResultDropdown(false)}
                            to={`/search/${searchKeyword}`} state={{ fromNavbar: true }}
                            className="flex justify-between items-center py-1"
                        >
                          <div className="flex justify-between items-center">
                            <h5 className="text-base font-black text-black ml-2">
                              View All Results
                            </h5>
                          </div>
                          <div>
                            <span
                                className="font-semibold text-black text-xl font-black">&rarr;</span>
                          </div>
                        </Link>
                      </li>
                    :
                      ""
                }
              </ul>
            </div>
          )}
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-background border focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

let mapStateToProps = (state) => {
  return {
    searchResult: state.search.searchResult,
    searchResultLoading: state.search.searchResultLoading,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getSearchResult: (keyword, page, pageSize) => {
      dispatch(searchProducts(keyword, page, pageSize));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
  getCategories,
  getCategoryBooks,
} from "../../../redux/categories/categories.action";
import { map } from "lodash";
import { AddToCart } from "../../../redux/cart/cart.action";
import { useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";

let books = [];
let categoryname = "";
const CategoryBook = (props) => {
  const params = useParams(),
    [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    props.getCategoryBooks(params.id);
    const getcategoryname = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5003/categories/${params.id}`
        );
        categoryname = res.data.category.name;
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getcategoryname();
  }, []);

  books = props.books;

  const renderHTML = (rawHTML) => {
    return React.createElement("div", {
      dangerouslySetInnerHTML: { __html: rawHTML },
    });
  };

  return (
    <>
      <h1 className="text-2xl lg:text-3xl px-3 py-4 md:px-5 md:py-6  italic font-serif text-center">
        {categoryname}
      </h1>

      {books.length &&
        books.map((item) => {
          return (
            <section className="md:w-11/12 mx-auto relative md:mt-4 lg:mt-8">
              <div className={`flex justify-center items-center`}>
                <hr className="hidden md:block w-2/5 top-11" />
                <NavLink to={`/c/${item.categoryId.url}/${item._id}`}>
                  <h1 className="px-2 text-xl md:px-5 md:text-3xl italic font-serif text-center text-background">
                    {loading ? (
                      <Skeleton variant="text" width={200} />
                    ) : (
                      item.name
                    )}
                  </h1>
                </NavLink>
                <hr className="hidden md:block w-2/5 top-11 right-0.5" />
              </div>
              <button
                className="py-1 italic font-serif text-center md:w-full w-8/12 mx-auto block mb-10 mt-2 text-theme-hover font-black md:border-none border-solid border-2 border-theme-hover rounded-lg"
                onClick={() => props.AddToCart(item)}
              >
                Add To Cart
              </button>
              <div className="md:flex lg:w-8/12 w-11/12 mx-auto justify-between">
                <div className="lg:w-1/4 md:w-2/4 w-full mx-auto">
                  {loading ? (
                    <Skeleton variant="rectangular" height={250} width={180} />
                  ) : (
                    <img src={item.image} className="w-8/12 mx-auto" />
                  )}
                </div>
                <div className="md:w-3/4 px-3">
                  <h3 className="italic font-serif text-lg md:text-md font-bold mt-3 md:mt-auto">
                    {item.name}
                  </h3>
                  <p className="font-semibold text-gray-500 mb-5">
                    <span className="text-black font-serif">By: </span>
                    <span className="text-decoration-line: underline">
                      {item.author}
                    </span>
                  </p>
                  <div>
                    <p className="lowercase">
                      {renderHTML(item.description.slice(0, 500))}
                    </p>
                  </div>
                </div>
              </div>
              <hr className="w-full md:hidden my-4" />
            </section>
          );
        })}
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    books: state.categories.categoryBooks,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getCategoryBooks: (id) => dispatch(getCategoryBooks(id)),
    AddToCart: (book) => dispatch(AddToCart(book)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBook);

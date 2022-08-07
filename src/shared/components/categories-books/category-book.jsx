import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
  getCategories,
  getCategoryBooks,
} from "../../../redux/categories/categories.action";
import { map } from "lodash";
import { AddToCart } from "../../../redux/cart/cart.action";
import { useLocation } from "react-router-dom";
import axios from "axios";

let books = [];
let categoryname = "";
const CategoryBook = (props) => {
  const params = useParams();
  console.log(props.books);
  useEffect(() => {
    props.getCategoryBooks(params.id);
    const getcategoryname = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5003/categories/${params.id}`
        );
        categoryname = res.data.category.name;
        console.log(categoryname);
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
      <h1 className="  px-5 py-6 text-3xl italic font-serif text-center">
        {categoryname}
      </h1>

      {books.length &&
        books.map((item) => {
          return (
            <section className="w-11/12 mx-auto relative">
              <hr className="absolute w-2/5 top-11 " />
              <h1 className="  px-5 pt-6 text-3xl italic font-serif text-center text-background">
                {item.name}
              </h1>
              <hr className="absolute w-2/5 top-11 right-0.5 " />
              <a
                href="#"
                className="py-1 italic font-serif text-center w-full block mb-10 text-theme-hover font-black"
                onClick={() => props.AddToCart(item)}
              >
                Buy Now
              </a>
              <div className="flex w-8/12 mx-auto justify-between">
                <div className="w-1/4 ">
                  <img src={item.image} className="w-11/12" />
                </div>
                <div className="w-3/4  px-3">
                  <h3 className="italic font-serif text-md font-bold">
                    {item.name}
                  </h3>
                  <p className="font-semibold text-gray-500 mb-5">
                    {item.author}
                  </p>
                  <div>
                    <p className="lowercase">
                      {renderHTML(item.description.slice(0, 500))}
                    </p>
                  </div>
                </div>
              </div>
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

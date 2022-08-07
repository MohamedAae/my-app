import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
  getCategories,
  getCategoryBooks,
} from "../../../redux/categories/categories.action";
import { map } from "lodash";

let books = [];
const CategoryBook = (props) => {
  const params = useParams();

  useEffect(() => {
    props.getCategoryBooks(params.id);
  }, []);
  books = props.books;
  console.log(props + "boooo");
  return (
    <>
      <h1 className="  px-5 py-6 text-3xl italic font-serif text-center">
        Category Name
      </h1>

      {books.length &&
        books.map((items) => {
          return (
            <section className="w-11/12 mx-auto relative">
              <hr className="absolute w-2/5 top-11 " />
              <h1 className="  px-5 py-6 text-3xl italic font-serif text-center">
                {books.length && books[0].name}
              </h1>
              <hr className="absolute w-2/5 top-11 right-0.5 " />
              <div className="flex w-8/12 mx-auto justify-between">
                <div className="w-1/4 ">
                  <img
                    src="http://prodimage.images-bn.com/pimages/9781953387097_p0_v2_s600x595.jpg"
                    className="w-11/12"
                  />
                </div>
                <div className="w-3/4  px-3">
                  <h3 className="italic font-serif">
                    {books.length && books[0].name}
                  </h3>
                  <p>author name</p>
                  <div>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Omnis, quo! Explicabo nisi assumenda animi voluptatem eius
                      fuga molestiae voluptatum tenetur repudiandae, excepturi
                      deserunt et dolorem quod vitae repellendus quos quam.
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBook);

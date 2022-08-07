import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getCategories,
  getCategoryBooks,
} from "../../../redux/categories/categories.action";

let categoryArray = [];
const ShopByCategory = (props) => {
  useEffect(() => {
    props.getCategories();
    props.getCategoryBooks("62ee7d0a4d3ca74e4a03fcb6");
  }, []);
  categoryArray = props.categories;
  return (
    <section className="mb-10 w-11/12 mx-auto">
      <div className="container mx-auto px-2">
        <section className="px-2">
          <h1 className="py-6 text-3xl italic font-serif">Shop by category</h1>
          <div className="grid md:grid-cols-4 w-3/4 mx-auto">
            {categoryArray.map((item, index) => {
              return (
                <div
                  key={item._id}
                  className="px-1 pb-2 mb-8 border mx-auto w-44 flex items-center justify-center"
                >
                  <NavLink to={`/category/${item._id}`}>
                    <h3 className="text-center mb-2 p-1">{item.name}</h3>
                    <img className="mx-auto rounded " src={item.image} alt="" />
                  </NavLink>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
};
let mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(getCategories()),
    getCategoryBooks: (id) => dispatch(getCategoryBooks(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopByCategory);

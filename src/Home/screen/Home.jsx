import React, { useEffect } from "react";
import OffersSlider from "../components/offers-slider/offers-slider";
import TrindingSlider from "../components/trinding-slider/trinding-slider";
import ImageSection from "../components/image-section";
import BestSeller from "../components/best-seller/best-seller";
import ShopByCategory from "../components/shop-by-category/shop-by-category";
import { getdiscountbook} from "../../redux/products/products.action";
import { connect } from "react-redux";
import {  AddToCart} from "../../redux/cart/cart.action";
let discountBy80 = [],
  discountBy60 = [],
  discountBy30 = [];

const Home = (props) => {
  let rates = [60, 30, 80];

  useEffect(() => {
    rates.map((rate) => {
      props.getdiscountbook(rate);
    });
  }, []);

  const getRateBooks = (rate) => {
    if (Object.keys(props.discountbook).length && props.discountbook[rate]) {
      return props.discountbook[rate];
    }
    return [];
  };

  discountBy80 = getRateBooks("80");
  discountBy60 = getRateBooks("60");
  discountBy30 = getRateBooks("30");

  const generateTitle = (rate) => {
    return `Get ${rate}% Off on this Books`;
  };

  return (
    <>
      <OffersSlider />
      <TrindingSlider book={discountBy80} title={generateTitle(80)} addcart={props.AddToCart} />
      <BestSeller />
      <ImageSection />
      <TrindingSlider book={discountBy60} title={generateTitle(60)} addcart={props.AddToCart} />
      <ImageSection />
      <ImageSection />
      <TrindingSlider book={discountBy30} title={generateTitle(30)} addcart={props.AddToCart} />
    </>
  );
};
let mapStateToProps = (state) => {
  return {
    discountbook: state.products.discountbook,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getdiscountbook: (rate) => dispatch(getdiscountbook(rate)),
    AddToCart: (book) => dispatch(AddToCart(book)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

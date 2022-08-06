import React, { useEffect } from "react";
import OffersSlider from "../components/offers-slider/offers-slider";
import TrindingSlider from "../components/trinding-slider/trinding-slider";
import ImageSection from "../components/image-section";
import BestSeller from "../components/best-seller/best-seller";
import ShopByCategory from "../components/shop-by-category/shop-by-category";
import { getdiscountbook } from "../../redux/products/products.action";
import { connect } from "react-redux";

let discountbook = [];
const Home = (props) => {
  let rate = 60;

  useEffect(() => {
    props.getdiscountbook(rate);
  }, []);
  discountbook = props.discountbook;
  console.log(discountbook);

  return (
    <>
      <OffersSlider />

      <TrindingSlider book={discountbook} />

      <BestSeller />
      <ShopByCategory />
      <ImageSection />
    </>
  );
};
// var rate=60;
let mapStateToProps = (state) => {
  return {
    discountbook: state.products.discountbook,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getdiscountbook: (rate) => dispatch(getdiscountbook(rate)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

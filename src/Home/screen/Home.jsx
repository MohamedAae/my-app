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

  const title = [
    {
      id: 1,
      title1: "Get 60% Off on this Books",
    },
    {
      id: 2,
      title2: "30% Off",
    },
  ];
  return (
    <>
      <OffersSlider />

      <TrindingSlider book={discountbook} title={title[0]} />

      <BestSeller />
      <ImageSection />
      <ShopByCategory />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React from "react";
import OffersSlider from "../components/offers-slider/offers-slider";
import TrindingSlider from "../components/trinding-slider/trinding-slider";
import ImageSection from "../components/image-section";
import BestSeller from "../components/best-seller/best-seller"
export default function Home() {
  return (
    <>
      <OffersSlider />
      <TrindingSlider />
      {/* <ImageSection/> */}
      <BestSeller/>
    </>
  );
}

import React from "react";
import Navbar from "../../shared/components/Navbar/Navbar";
import OffersSlider from "../components/offers-slider/offers-slider";
import TrindingSlider from "../components/trinding-slider/trinding-slider";
export default function Home() {
  return (
    <>
      <Navbar />
      <OffersSlider/>
      <TrindingSlider/>
    </>
  );
}

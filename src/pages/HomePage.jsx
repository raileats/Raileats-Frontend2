import React from "react";
import HeroBanner from "../components/HeroBanner";
import SearchBoxes from "../components/SearchBoxes";
import CategoryCards from "../components/CategoryCards";
import PopularItems from "../components/PopularItems";

export default function HomePage(){
  return (
    <>
      <HeroBanner />
      <SearchBoxes />
      <CategoryCards />
      <PopularItems />
    </>
  );
}


import React from "react";
import HeroBanner from "../components/HeroBanner";
import CategoryCards from "../components/CategoryCards";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <div className="section">
        <div className="container">
          <CategoryCards />
        </div>
      </div>
      <Footer />
    </>
  );
}

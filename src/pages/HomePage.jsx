// src/pages/HomePage.jsx
import React from "react";
import HeroBanner from "../components/HeroBanner";
import SearchTabs from "../components/SearchTabs";
import CategoryCards from "../components/CategoryCards";
import PopularItems from "../components/PopularItems";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroBanner />

      {/* Search / Filter Tabs */}
      <SearchTabs />

      {/* Category Cards */}
      <section style={{ padding: "2rem 0" }}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Categories</h2>
        <CategoryCards />
      </section>

      {/* Popular Items */}
      <section style={{ padding: "2rem 0", backgroundColor: "#f9f9f9" }}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Popular Items</h2>
        <PopularItems />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;

// src/pages/HomePage.jsx
import React from "react";
import HeroBanner from "../components/HeroBanner";
import SearchTabs from "../components/SearchTabs";
import CategoryCards from "../components/CategoryCards";
import PopularItems from "../components/PopularItems";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="bg-white min-h-screen text-black">
      {/* Hero Section */}
      <HeroBanner />

      {/* Search Tabs Section */}
      <section className="py-8">
        <SearchTabs />
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold text-center mb-6">Categories</h2>
        <CategoryCards />
      </section>

      {/* Popular Items Section */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-6">Popular Items</h2>
        <PopularItems />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;

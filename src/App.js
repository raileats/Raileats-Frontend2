import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroBanner from "./components/HeroBanner";
import Footer from "./components/Footer";
import PopularItems from "./PopularItems";
import SearchTabs from "./components/SearchTabs";
import OrderHistory from "./components/OrderHistory";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroBanner />
              <SearchTabs />
              <PopularItem />
              <Footer />
            </>
          }
        />
        <Route path="/order-history" element={<OrderHistory />} />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import HeroBanner from "./components/HeroBanner";
import SearchTabs from "./components/SearchTabs";
import PopularItems from "./components/PopularItems";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import OrderHistory from "./components/OrderHistory";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <HeroBanner />

      {/* Search Tabs */}
      <SearchTabs />

      {/* Popular Items */}
      <PopularItems />

      {/* Order History */}
      <OrderHistory />

      {/* Footer */}
      <Footer />

      {/* Login Modal */}
      <LoginModal show={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
}

export default App;

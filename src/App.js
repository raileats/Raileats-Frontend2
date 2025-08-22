import React, { useState } from "react";
import HeroBanner from "./components/HeroBanner";
import SearchTabs from "./components/SearchTabs";
import PopularItems from "./components/PopularItem"; // ✅ Corrected
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import OrderHistory from "./components/OrderHistory";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showOrderHistory, setShowOrderHistory] = useState(false);

  const handleLoginClose = () => {
    setShowLogin(false);
    if (localStorage.getItem("customerName")) {
      setIsLoggedIn(true);
      setShowOrderHistory(true); // ✅ Redirect to OrderHistory after login
    }
  };

  return (
    <div className="bg-white min-h-screen text-black">
      {/* Banner */}
      <HeroBanner />

      {/* Search Tabs */}
      <SearchTabs />

      {/* Show OrderHistory if logged in */}
      {showOrderHistory ? (
        <OrderHistory />
      ) : (
        <>
          {/* Popular Items */}
          <PopularItems />

          {/* Footer with Login button */}
          <Footer onLoginClick={() => setShowLogin(true)} />
        </>
      )}

      {/* Login Modal */}
      <LoginModal show={showLogin} onClose={handleLoginClose} />
    </div>
  );
}

export default App;

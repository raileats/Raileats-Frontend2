import React, { useState } from "react";
import HeroBanner from "./components/HeroBanner";
import SearchTabs from "./components/SearchTabs";
import PopularItems from "./components/PopularItems"; // ✅ Now correct file name
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
      setShowOrderHistory(true);
    }
  };

  return (
    <div className="bg-white min-h-screen text-black">
      <HeroBanner />
      <SearchTabs />

      {showOrderHistory ? (
        <OrderHistory />
      ) : (
        <>
          <PopularItems />
          <Footer onLoginClick={() => setShowLogin(true)} />
        </>
      )}

      <LoginModal show={showLogin} onClose={handleLoginClose} />
    </div>
  );
}

export default App;

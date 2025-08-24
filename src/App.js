import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import HeroBanner from "./components/HeroBanner";
import SearchTabs from "./components/SearchTabs";
import PopularItems from "./components/PopularItems";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import OrderHistory from "./components/OrderHistory";
import Profile from "./pages/Profile";

// ✅ Home page component
function Home({ onLoginClick }) {
  return (
    <div className="bg-white min-h-screen text-black">
      <HeroBanner />
      <SearchTabs />
      <PopularItems />
      <Footer onLoginClick={onLoginClick} />
    </div>
  );
}

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClose = () => {
    setShowLogin(false);
    if (localStorage.getItem("customerName")) {
      setIsLoggedIn(true);
    }
  };

  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home onLoginClick={() => setShowLogin(true)} />} />

        {/* Profile page (only if logged in) */}
        <Route
          path="/profile"
          element={isLoggedIn ? <Profile /> : <Navigate to="/" />}
        />

        {/* Order history (if you want separate route) */}
        <Route path="/orders" element={<OrderHistory />} />
      </Routes>

      {/* Login modal */}
      <LoginModal show={showLogin} onClose={handleLoginClose} />
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";   // ✅ Yehi use karna hai
import OrderHistory from "./components/OrderHistory";
import LoginModal from "./components/LoginModal";

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
      <div className="bg-white min-h-screen text-black">
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<HomePage />} />

          {/* Order History Page */}
          <Route path="/orders" element={<OrderHistory />} />
        </Routes>

        {/* Global Login Modal */}
        <LoginModal show={showLogin} onClose={handleLoginClose} />
      </div>
    </Router>
  );
}

export default App;

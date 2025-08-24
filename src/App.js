import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Profile from "./pages/Profile";

import OrderHistory from "./components/OrderHistory";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null); // { name, phone, wallet }

  useEffect(() => {
    // load from localStorage if already logged in
    const name = localStorage.getItem("customerName");
    const phone = localStorage.getItem("customerPhone");
    const wallet = localStorage.getItem("walletBalance");
    if (name && phone) {
      setUser({
        name,
        phone,
        wallet: Number(wallet || 0),
      });
    }
  }, []);

  const handleLoginSuccess = ({ name, phone }) => {
    const defaultWallet = 250; // starter wallet
    localStorage.setItem("customerName", name);
    localStorage.setItem("customerPhone", phone);
    localStorage.setItem("walletBalance", String(defaultWallet));
    setUser({ name, phone, wallet: defaultWallet });
    setShowLogin(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("customerName");
    localStorage.removeItem("customerPhone");
    localStorage.removeItem("walletBalance");
    setUser(null);
  };

  return (
    <Router>
      <div className="app-root">
        <Navbar
          user={user}
          onLoginClick={() => setShowLogin(true)}
          onLogout={handleLogout}
        />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />

          {/* Protected routes */}
          <Route
            path="/profile"
            element={user ? <Profile user={user} /> : <Navigate to="/" replace />}
          />
          <Route
            path="/orders"
            element={user ? <OrderHistory /> : <Navigate to="/" replace />}
          />
        </Routes>

        <Footer />

        <LoginModal
          show={showLogin}
          onClose={() => setShowLogin(false)}
          onSuccess={handleLoginSuccess}
        />
      </div>
    </Router>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import OrderHistory from "./components/OrderHistory";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Profile from "./pages/Profile";

export default function App(){
  const [showLogin,setShowLogin]=useState(false);
  const [user,setUser]=useState(null);

  useEffect(()=>{
    const name=localStorage.getItem("customerName");
    const phone=localStorage.getItem("customerPhone");
    const wallet=Number(localStorage.getItem("walletBalance")||0);
    if(name && phone){ setUser({name,phone,wallet}); }
  },[]);

  const onLoginSuccess = ({name,phone})=>{
    const defaultWallet = 250;
    localStorage.setItem("customerName", name);
    localStorage.setItem("customerPhone", phone);
    localStorage.setItem("walletBalance", String(defaultWallet));
    setUser({name,phone,wallet:defaultWallet});
    setShowLogin(false);
  };

  const onLogout = ()=>{
    localStorage.removeItem("customerName");
    localStorage.removeItem("customerPhone");
    localStorage.removeItem("walletBalance");
    setUser(null);
  };

  return (
    <Router>
      <div className="app">
        <Navbar user={user} onLogin={()=>setShowLogin(true)} onLogout={onLogout} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/profile" element={user ? <Profile /> : <Navigate to="/" replace />} />
          <Route path="/orders" element={user ? <OrderHistory /> : <Navigate to="/" replace />} />
        </Routes>

        <Footer />

        <LoginModal show={showLogin} onClose={()=>setShowLogin(false)} onSuccess={onLoginSuccess} />
      </div>
    </Router>
  );
}

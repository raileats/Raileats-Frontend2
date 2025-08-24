import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Profile({ user }) {
  const [wallet, setWallet] = useState(0);

  useEffect(() => {
    const w = Number(localStorage.getItem("walletBalance") || 0);
    setWallet(w);
  }, []);

  const addMoney = (amt) => {
    const newW = wallet + amt;
    setWallet(newW);
    localStorage.setItem("walletBalance", String(newW));
    alert(`Wallet updated: ₹${newW}`);
  };

  return (
    <div className="profile-wrap">
      <h2>My Profile</h2>
      <div className="info-row">
        <div className="info-box">
          <h3>Customer Details</h3>
          <div><b>Name:</b> {user?.name}</div>
          <div><b>Phone:</b> {user?.phone}</div>
        </div>
        <div className="info-box">
          <h3>Wallet</h3>
          <div style={{ fontSize: 22, fontWeight: 800 }}>₹{wallet}</div>
          <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
            <button className="btn" onClick={() => addMoney(100)}>Add ₹100</button>
            <button className="btn btn-outline" onClick={() => addMoney(250)}>Add ₹250</button>
          </div>
        </div>
      </div>

      <div className="info-box" style={{ marginTop: 14 }}>
        <h3>Quick Links</h3>
        <Link to="/orders" className="btn" style={{ textDecoration: "none" }}>
          View Order History
        </Link>
      </div>
    </div>
  );
}

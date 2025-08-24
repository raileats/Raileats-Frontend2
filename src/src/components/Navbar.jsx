import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ user, onLoginClick, onLogout }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand">
          <span role="img" aria-label="train">🚆🍴</span> Raileats
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="nav-spacer" />

        {!user ? (
          <button className="btn" onClick={onLoginClick}>Customer Login</button>
        ) : (
          <div style={{ position: "relative" }}>
            <button className="btn btn-outline" onClick={() => setOpen(v => !v)}>
              {user.name} • ₹{user.wallet}
            </button>
            {open && (
              <div
                style={{
                  position: "absolute",
                  right: 0, top: "110%",
                  background: "#fff",
                  border: "1px solid #ececec",
                  borderRadius: 12,
                  padding: 10,
                  minWidth: 180,
                }}
              >
                <div style={{ padding: "8px 10px", fontWeight: 700 }}>Wallet: ₹{user.wallet}</div>
                <Link to="/profile" style={{ display: "block", padding: "8px 10px", textDecoration: "none", color: "#111" }}>My Profile</Link>
                <Link to="/orders" style={{ display: "block", padding: "8px 10px", textDecoration: "none", color: "#111" }}>Order History</Link>
                <button className="btn" style={{ width: "100%", marginTop: 8 }} onClick={onLogout}>Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

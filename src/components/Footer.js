import React from "react";
import { Link } from "react-router-dom";
export default function Footer(){
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>© 2025 raileats.in · Fresh food at your seat 🚆🍴</div>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

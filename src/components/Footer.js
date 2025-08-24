import React from "react";

function Footer({ onLoginClick }) {
  return (
    <footer className="bg-yellow-300 text-center p-4 mt-6">
      <button
        className="bg-black text-white px-4 py-2 rounded"
        onClick={onLoginClick}
      >
        Customer Login
      </button>
      <div className="mt-2">
        <a href="#">About Us</a> | <a href="#">FAQ</a> | <a href="#">Contact Us</a>
      </div>
      <p className="mt-2">© 2025 raileats.in · Fresh food at your seat 🚆🍴</p>
    </footer>
  );
}
export default Footer;

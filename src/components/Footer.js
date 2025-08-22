import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-6">
      <div className="text-center text-sm">
        © {new Date().getFullYear()} raileats.in · Fresh food at your seat 🚆🍴
      </div>
    </footer>
  );
}

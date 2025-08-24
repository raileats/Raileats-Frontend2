import React from "react";

function Profile() {
  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-yellow-600">My Profile</h1>
      <div className="mt-4 p-4 rounded-2xl shadow bg-yellow-50">
        <p className="text-lg font-semibold">👤 Customer Name: Demo User</p>
        <p className="mt-2">📧 Email: demo@example.com</p>
        <p className="mt-2">💰 Wallet Balance: ₹500</p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-yellow-700">Order History</h2>
        <ul className="mt-2 list-disc pl-6">
          <li>Veg Thali - ₹120</li>
          <li>Paneer Butter Masala - ₹150</li>
          <li>Chicken Biryani - ₹180</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;

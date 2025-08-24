import React from "react";

function Profile() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Profile</h2>
      <p>👤 Customer Name: Test User</p>
      <p>💰 Wallet Balance: ₹500</p>
      <h3 className="mt-4 font-bold">Order History</h3>
      <ul>
        <li>Veg Thali - ₹120</li>
        <li>Paneer Butter Masala - ₹150</li>
      </ul>
    </div>
  );
}
export default Profile;

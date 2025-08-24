import React from "react";

function LoginModal({ show, onClose }) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-80">
        <h2 className="text-xl font-bold mb-4">OTP Login</h2>
        <input
          type="text"
          placeholder="Enter Mobile No."
          className="border p-2 w-full mb-2"
        />
        <input
          type="text"
          placeholder="Enter OTP"
          className="border p-2 w-full mb-4"
        />
        <button
          className="bg-yellow-400 px-4 py-2 rounded w-full"
          onClick={onClose}
        >
          Login
        </button>
      </div>
    </div>
  );
}
export default LoginModal;

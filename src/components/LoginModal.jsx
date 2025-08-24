import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ added

const LoginModal = ({ show, onClose }) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate(); // ✅ initialize

  const handleNext = () => {
    if (!name || !mobile) {
      alert("Please enter name and mobile number");
      return;
    }
    // In real case: send OTP via backend
    setStep(2);
  };

  const handleLogin = () => {
    if (!otp) {
      alert("Please enter OTP");
      return;
    }
    // In real case: verify OTP via backend
    localStorage.setItem('customerName', name);
    localStorage.setItem('customerMobile', mobile);
    onClose();
    navigate('/order-history'); // ✅ redirect
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-2xl w-11/12 max-w-sm shadow-lg">
        {step === 1 && (
          <>
            <h3 className="text-xl font-bold mb-4">Sign Up / Login</h3>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="tel"
              placeholder="Mobile"
              maxLength={10}
              value={mobile}
              onChange={e => setMobile(e.target.value)}
              className="w-full mb-3 p-2 border rounded"
            />
            <button
              onClick={handleNext}
              className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition-colors"
            >
              Send OTP
            </button>
          </>
        )}
        {step === 2 && (
          <>
            <h3 className="text-xl font-bold mb-4">Enter OTP</h3>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={e => setOtp(e.target.value)}
              className="w-full mb-3 p-2 border rounded"
            />
            <button
              onClick={handleLogin}
              className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors"
            >
              Login
            </button>
          </>
        )}
        <button
          onClick={onClose}
          className="w-full mt-3 bg-gray-300 text-black p-2 rounded hover:bg-gray-400 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginModal;

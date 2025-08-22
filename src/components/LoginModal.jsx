import React, { useState } from 'react';

const LoginModal = ({ show, onClose }) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');

  const handleNext = () => setStep(2);
  const handleLogin = () => {
    alert(`Logged in: ${name}, ${mobile}`);
    localStorage.setItem('customerName', name);
    localStorage.setItem('customerMobile', mobile);
    onClose();
  };

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', width: '90%' }}>
        {step === 1 && (
          <>
            <h3>Sign Up / Login</h3>
            <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input placeholder="Mobile" value={mobile} onChange={e => setMobile(e.target.value)} />
            <button onClick={handleNext}>Send OTP</button>
          </>
        )}
        {step === 2 && (
          <>
            <input placeholder="Enter OTP" value={otp} onChange={e => setOtp(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
          </>
        )}
        <button onClick={onClose} style={{ marginTop: '10px' }}>Close</button>
      </div>
    </div>
  );
};

export default LoginModal;

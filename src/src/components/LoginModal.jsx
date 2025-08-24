import React, { useState } from "react";

export default function LoginModal({ show, onClose, onSuccess }) {
  const [step, setStep] = useState("phone");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [otp, setOtp] = useState("");

  if (!show) return null;

  const sendOtp = () => {
    if (!phone || phone.length < 10) return alert("Please enter a valid phone");
    if (!name) return alert("Please enter your name");
    alert("OTP sent! (Demo OTP: 1234)");
    setStep("otp");
  };

  const verifyOtp = () => {
    if (otp === "1234") {
      onSuccess({ name, phone });
    } else {
      alert("Incorrect OTP. Try 1234 (demo).");
    }
  };

  const reset = () => {
    setStep("phone");
    setPhone(""); setName(""); setOtp("");
  };

  return (
    <div className="backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Customer Login</h3>

        {step === "phone" && (
          <>
            <div style={{ display: "grid", gap: 10, marginTop: 8 }}>
              <input className="input" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input className="input" placeholder="Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
              <button className="btn" onClick={sendOtp}>Send OTP</button>
              <button className="btn btn-outline" onClick={onClose}>Cancel</button>
            </div>
          </>
        )}

        {step === "otp" && (
          <>
            <div style={{ display: "grid", gap: 10, marginTop: 8 }}>
              <input className="input" placeholder="Enter OTP (demo: 1234)" value={otp} onChange={(e) => setOtp(e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
              <button className="btn" onClick={verifyOtp}>Verify & Login</button>
              <button className="btn btn-outline" onClick={reset}>Back</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

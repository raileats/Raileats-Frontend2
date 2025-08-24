import React, { useState } from "react";

export default function LoginModal({ show, onClose, onSuccess }){
  const [step,setStep]=useState("phone");
  const [phone,setPhone]=useState(""); const [name,setName]=useState(""); const [otp,setOtp]=useState("");

  if(!show) return null;

  const sendOtp=()=>{
    if(!name) return alert("Please enter your name");
    if(!phone || phone.length<10) return alert("Enter valid phone");
    alert("OTP sent! (Demo OTP: 1234)");
    setStep("otp");
  };

  const verify=()=>{
    if(otp==="1234"){
      onSuccess({name,phone});
    }else{
      alert("Wrong OTP. Use 1234 (demo).");
    }
  };

  const reset=()=>{ setStep("phone"); setOtp(""); }

  return (
    <div className="backdrop" onClick={onClose}>
      <div className="modal" onClick={(e)=>e.stopPropagation()}>
        <h3>Customer Login</h3>
        {step==="phone" && (
          <>
            <input className="input" placeholder="Your Name" value={name} onChange={e=>setName(e.target.value)} />
            <div style={{height:8}}/>
            <input className="input" placeholder="Mobile Number" value={phone} onChange={e=>setPhone(e.target.value)} />
            <div style={{height:12}}/>
            <div className="row">
              <button className="btn" onClick={sendOtp}>Send OTP</button>
              <button className="btn btn-outline" onClick={onClose}>Cancel</button>
            </div>
          </>
        )}
        {step==="otp" && (
          <>
            <input className="input" placeholder="Enter OTP (demo: 1234)" value={otp} onChange={e=>setOtp(e.target.value)} />
            <div style={{height:12}}/>
            <div className="row">
              <button className="btn" onClick={verify}>Verify & Login</button>
              <button className="btn btn-outline" onClick={reset}>Back</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

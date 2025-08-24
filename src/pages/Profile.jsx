import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Profile(){
  const [name,setName]=useState(""); const [phone,setPhone]=useState(""); const [wallet,setWallet]=useState(0);
  useEffect(()=>{
    const n=localStorage.getItem("customerName")||"";
    const p=localStorage.getItem("customerPhone")||"";
    const w=Number(localStorage.getItem("walletBalance")||0);
    setName(n); setPhone(p); setWallet(w);
  },[]);

  const add = (amt)=>{
    const nw = wallet + amt;
    setWallet(nw);
    localStorage.setItem("walletBalance", String(nw));
    alert(`Wallet updated: ₹${nw}`);
  };

  return (
    <div className="profile">
      <h2>My Profile</h2>
      <div className="info-row">
        <div className="info">
          <h3>Customer Details</h3>
          <div><b>Name:</b> {name}</div>
          <div><b>Phone:</b> {phone}</div>
        </div>
        <div className="info">
          <h3>Wallet</h3>
          <div style={{fontSize:22,fontWeight:900}}>₹{wallet}</div>
          <div className="row" style={{marginTop:8}}>
            <button className="btn" onClick={()=>add(100)}>Add ₹100</button>
            <button className="btn btn-outline" onClick={()=>add(250)}>Add ₹250</button>
          </div>
        </div>
      </div>

      <div className="info" style={{marginTop:14}}>
        <h3>Quick Links</h3>
        <Link to="/orders" className="btn" style={{textDecoration:"none"}}>View Order History</Link>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ user, onLogin, onLogout }){
  const [open,setOpen]=useState(false);
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand"><span role="img" aria-label="train">🚆🍴</span> Raileats</Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="nav-spacer" />
        {!user ? (
          <button className="btn" onClick={onLogin}>Customer Login</button>
        ) : (
          <div style={{position:"relative"}}>
            <button className="btn btn-outline" onClick={()=>setOpen(v=>!v)}>
              {user.name} • ₹{user.wallet}
            </button>
            {open && (
              <div style={{position:"absolute",right:0,top:"110%",background:"#fff",border:"1px solid #eee4a8",borderRadius:12,minWidth:200}}>
                <div style={{padding:"10px",fontWeight:800}}>Wallet: ₹{user.wallet}</div>
                <Link to="/profile" style={{display:"block",padding:"8px 10px",textDecoration:"none",color:"#111"}}>My Profile</Link>
                <Link to="/orders" style={{display:"block",padding:"8px 10px",textDecoration:"none",color:"#111"}}>Order History</Link>
                <button className="btn" style={{width:"calc(100% - 20px)",margin:"10px"}} onClick={onLogout}>Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

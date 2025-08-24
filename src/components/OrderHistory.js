import React, { useEffect, useState } from "react";

export default function OrderHistory(){
  const [orders,setOrders]=useState([]);
  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem("orders")||"[]");
    setOrders(saved);
  },[]);
  return (
    <div className="section">
      <h2>Order History</h2>
      {orders.length===0 ? <p>No orders yet.</p> : (
        <div className="grid">
          {orders.map((o,idx)=>(
            <div key={idx} className="card">
              <div className="title">{o.item} • ₹{o.amount}</div>
              <div className="sub">{o.date}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

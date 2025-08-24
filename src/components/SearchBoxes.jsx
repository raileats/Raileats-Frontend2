import React, { useState } from "react";

export default function SearchBoxes(){
  const [pnr,setPnr]=useState(""); const [train,setTrain]=useState(""); const [station,setStation]=useState("");
  const go=(type)=>{
    const val = type==="pnr"?pnr:type==="train"?train:station;
    if(!val) return alert("Please enter a value");
    alert(`Searching by ${type.toUpperCase()} → ${val}`);
  };
  const clear=(type)=>{ if(type==="pnr")setPnr(""); if(type==="train")setTrain(""); if(type==="station")setStation(""); };

  return (
    <div id="search" className="section">
      <h2>Search Food Delivery</h2>
      <div className="search-grid">
        <div className="search-card">
          <h3>Search by PNR</h3>
          <input className="input" value={pnr} onChange={e=>setPnr(e.target.value)} placeholder="Enter PNR" />
          <div className="row" style={{marginTop:8}}>
            <button className="btn" onClick={()=>go("pnr")}>Search</button>
            <button className="btn btn-outline" onClick={()=>clear("pnr")}>Clear</button>
          </div>
        </div>
        <div className="search-card">
          <h3>Search by Train</h3>
          <input className="input" value={train} onChange={e=>setTrain(e.target.value)} placeholder="Enter Train No./Name" />
          <div className="row" style={{marginTop:8}}>
            <button className="btn" onClick={()=>go("train")}>Search</button>
            <button className="btn btn-outline" onClick={()=>clear("train")}>Clear</button>
          </div>
        </div>
        <div className="search-card">
          <h3>Search by Station</h3>
          <input className="input" value={station} onChange={e=>setStation(e.target.value)} placeholder="Enter Station" />
          <div className="row" style={{marginTop:8}}>
            <button className="btn" onClick={()=>go("station")}>Search</button>
            <button className="btn btn-outline" onClick={()=>clear("station")}>Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
}

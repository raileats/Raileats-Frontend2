import React, { useState } from "react";

export default function SearchBoxes() {
  const [pnr, setPnr] = useState("");
  const [train, setTrain] = useState("");
  const [station, setStation] = useState("");

  const handleSearch = (type) => {
    if (type === "pnr" && !pnr) return alert("Please enter PNR");
    if (type === "train" && !train) return alert("Please enter Train No./Name");
    if (type === "station" && !station) return alert("Please enter Station");
    alert(`Searching by ${type.toUpperCase()}...`);
  };

  const handleClear = (type) => {
    if (type === "pnr") setPnr("");
    if (type === "train") setTrain("");
    if (type === "station") setStation("");
  };

  return (
    <div id="search" className="section">
      <h2>Search Food Delivery</h2>
      <div className="search-grid">
        <div className="search-card">
          <h3>Search by PNR</h3>
          <input className="input" placeholder="Enter PNR" value={pnr} onChange={(e) => setPnr(e.target.value)} />
          <div className="search-actions">
            <button className="btn" onClick={() => handleSearch("pnr")}>Search</button>
            <button className="btn btn-outline" onClick={() => handleClear("pnr")}>Clear</button>
          </div>
        </div>

        <div className="search-card">
          <h3>Search by Train</h3>
          <input className="input" placeholder="Enter Train No. or Name" value={train} onChange={(e) => setTrain(e.target.value)} />
          <div className="search-actions">
            <button className="btn" onClick={() => handleSearch("train")}>Search</button>
            <button className="btn btn-outline" onClick={() => handleClear("train")}>Clear</button>
          </div>
        </div>

        <div className="search-card">
          <h3>Search by Station</h3>
          <input className="input" placeholder="Enter Station" value={station} onChange={(e) => setStation(e.target.value)} />
          <div className="search-actions">
            <button className="btn" onClick={() => handleSearch("station")}>Search</button>
            <button className="btn btn-outline" onClick={() => handleClear("station")}>Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
}

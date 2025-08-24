import React from "react";

const ITEMS = [
  { name: "Veg Thali", sub: "Healthy & tasty", price: 120 },
  { name: "Paneer Butter Masala", sub: "With 4 Butter Roti", price: 150 },
  { name: "Chicken Biryani", sub: "Spicy & delicious", price: 180 },
  { name: "Masala Dosa", sub: "Crispy with chutney", price: 100 },
];

export default function PopularItems() {
  return (
    <div id="popular" className="section">
      <h2>Popular Items</h2>
      <div className="card-grid">
        {ITEMS.map((it) => (
          <div key={it.name} className="card">
            <div className="title">{it.name}</div>
            <div className="sub">{it.sub}</div>
            <div className="price">₹{it.price}</div>
            <div style={{ marginTop: 10 }}>
              <button className="btn">Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

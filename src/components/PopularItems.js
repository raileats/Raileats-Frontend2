import React from "react";

const PopularItems = () => {
  const items = [
    { id: 1, name: "Veg Thali", price: "₹150" },
    { id: 2, name: "Paneer Butter Masala", price: "₹180" },
    { id: 3, name: "Chicken Biryani", price: "₹200" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#f9a825" }}>🍴 Popular Items</h2>
      <div style={{ display: "grid", gap: "10px", marginTop: "10px" }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
              background: "#fff",
            }}
          >
            <p><b>{item.name}</b></p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularItems;

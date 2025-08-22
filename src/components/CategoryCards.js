
import React from "react";

const categories = [
  { name: "North Indian", img: "https://images.unsplash.com/photo-1604909052681-c8b3f4f2fc6b?auto=format&fit=crop&w=1200&q=60" },
  { name: "South Indian", img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1200&q=60" },
  { name: "Snacks & Fast Food", img: "https://images.unsplash.com/photo-1544025165-1bace2b64e0d?auto=format&fit=crop&w=1200&q=60" },
];

export default function CategoryCards() {
  return (
    <div className="grid grid-3">
      {categories.map((cat, i) => (
        <div className="card" key={i}>
          <img src={cat.img} alt={cat.name} />
          <div className="p">
            <h3 style={{margin:0}}>{cat.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

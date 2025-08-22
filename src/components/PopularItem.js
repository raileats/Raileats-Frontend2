import React from "react";

const items = [
  { id: 1, name: "Veg Biryani", price: "₹120" },
  { id: 2, name: "Paneer Butter Masala", price: "₹180" },
  { id: 3, name: "Masala Dosa", price: "₹90" },
  { id: 4, name: "Cold Coffee", price: "₹60" },
];

export default function PopularItems() {
  return (
    <section className="px-4 py-6 bg-white">
      <h2 className="text-2xl font-bold text-[#222] mb-4">
        Popular Items
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-2xl shadow-md border border-[#FFD700] bg-[#FFF8DC] hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold text-black">{item.name}</h3>
            <p className="text-sm text-green-700 font-medium">{item.price}</p>
            <button className="mt-2 px-3 py-1 rounded-lg bg-[#FFD700] text-black font-semibold hover:bg-[#FFC107] transition-colors duration-300">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

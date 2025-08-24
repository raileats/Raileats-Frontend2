import React from "react";

const categories = [
  { id: 1, name: "🍱 Thali", description: "North & South Indian Thali" },
  { id: 2, name: "🍔 Fast Food", description: "Burgers, Sandwiches, Fries" },
  { id: 3, name: "🍕 Pizza", description: "Cheesy & Delicious" },
  { id: 4, name: "🥤 Beverages", description: "Soft Drinks & Juices" },
];

export default function CategoryCards() {
  return (
    <section className="px-4 py-6 bg-[#FFF8DC]">
      <h2 className="text-2xl font-bold text-[#222] mb-4">
        Explore Categories
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="p-4 rounded-2xl shadow-md bg-[#FFD700] hover:bg-[#FFC107] transition-colors duration-300 cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-black">{cat.name}</h3>
            <p className="text-sm text-gray-800">{cat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

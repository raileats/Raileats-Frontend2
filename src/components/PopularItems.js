import React from "react";

const PopularItems = () => {
  const items = [
    { id: 1, name: "Veg Thali", desc: "Healthy & tasty", price: "₹120" },
    { id: 2, name: "Paneer Butter Masala", desc: "With 4 Butter Roti", price: "₹150" },
    { id: 3, name: "Chicken Biryani", desc: "Spicy & delicious", price: "₹180" },
    { id: 4, name: "Masala Dosa", desc: "Crispy with chutney", price: "₹100" },
  ];

  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-4 text-yellow-600">Popular Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.desc}</p>
            <p className="mt-2 font-bold">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularItems;

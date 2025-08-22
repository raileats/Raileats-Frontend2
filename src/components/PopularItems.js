import React from "react";

const items = [
  { id: 1, name: "Veg Thali", price: "₹150", img: "https://via.placeholder.com/150" },
  { id: 2, name: "Paneer Butter Masala", price: "₹180", img: "https://via.placeholder.com/150" },
  { id: 3, name: "Chicken Biryani", price: "₹220", img: "https://via.placeholder.com/150" },
  { id: 4, name: "Masala Dosa", price: "₹120", img: "https://via.placeholder.com/150" },
];

const PopularItems = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-yellow-600 mb-4">🍴 Popular Items</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white shadow rounded-xl overflow-hidden">
            <img src={item.img} alt={item.name} className="w-full h-32 object-cover" />
            <div className="p-2 text-center">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-700">{item.price}</p>
              <button className="mt-2 bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularItems;

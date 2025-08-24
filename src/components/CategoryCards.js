import React from "react";

const DATA=[
  {icon:"🍱",title:"Thali",sub:"North & South Indian Thali"},
  {icon:"🍔",title:"Fast Food",sub:"Burgers, Sandwiches, Fries"},
  {icon:"🍕",title:"Pizza",sub:"Cheesy & Delicious"},
  {icon:"🥤",title:"Beverages",sub:"Soft Drinks & Juices"},
];
export default function CategoryCards(){
  return (
    <div className="section">
      <h2>Explore Categories</h2>
      <div className="grid">
        {DATA.map(c=>(
          <div key={c.title} className="card">
            <div className="title">{c.icon} {c.title}</div>
            <div className="sub">{c.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

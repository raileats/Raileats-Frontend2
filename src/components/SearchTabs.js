import React from "react";

function SearchTabs() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <input className="p-2 border rounded" placeholder="Enter PNR" />
      <input className="p-2 border rounded" placeholder="Enter Station" />
      <input className="p-2 border rounded" placeholder="Enter Train No." />
    </div>
  );
}
export default SearchTabs;

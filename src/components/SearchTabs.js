import React, { useState } from 'react';

const SearchTabs = () => {
  const [activeTab, setActiveTab] = useState('PNR');
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    alert(`Searching ${activeTab}: ${inputValue}`);
    // Backend API integration goes here
  };

  return (
    <div className="p-6 bg-white">
      <div className="flex justify-around mb-4">
        {['PNR', 'Station', 'Train No.'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
              activeTab === tab
                ? 'bg-yellow-500 text-white font-bold'
                : 'bg-yellow-100 text-gray-800 hover:bg-yellow-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <div className="flex gap-2">
        <input
          type="text"
          placeholder={`Enter ${activeTab}`}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Search

import React, { useState } from 'react';

const SearchTabs = () => {
  const [activeTab, setActiveTab] = useState('PNR');
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    alert(`Searching ${activeTab}: ${inputValue}`);
    // Backend API integration goes here
  };

  return (
    <div style={{ padding: '20px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginBottom: '10px',
        }}
      >
        {['PNR', 'Station', 'Train No.'].map((tab) => (
          <button
            key={tab}
            style={{
              backgroundColor: activeTab === tab ? '#f9a825' : '#fff8dc',
              fontWeight: activeTab === tab ? 'bold' : 'normal',
              padding: '8px 16px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              cursor: 'pointer',
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <input
        type="text"
        placeholder={`Enter ${activeTab}`}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{
          padding: '8px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          marginRight: '8px',
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          backgroundColor: '#f9a825',
          padding: '8px 16px',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchTabs;

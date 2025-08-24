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
      {/* Tabs */}
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '10px' }}>
        {['PNR', 'Station', 'Train No.'].map((tab) => (
          <button
            key={tab}
            style={{
              backgroundColor: activeTab === tab ? '#f9a825' : '#fff8dc',
              fontWeight: activeTab === tab ? 'bold' : 'normal',
              padding: '8px 16px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              cursor: 'pointer'
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Input + Button */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder={`Enter ${activeTab}`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ flex: 1, padding: '8px', borderRadius: '6px', border: '1px solid #ccc' }}
        />
        <button
          onClick={handleSearch}
          style={{ backgroundColor: '#f9a825', padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchTabs;

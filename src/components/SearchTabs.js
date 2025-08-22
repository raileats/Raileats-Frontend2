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
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '10px' }}>
        {['PNR', 'Station', 'Train No.'].map(tab => (
          <button
            key={tab}
            style={{
              backgroundColor: activeTab === tab ? '#f9a825' : '#fff8dc',
              fontWeight: activeTab === tab ? 'bold' : 'normal'
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
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchTabs;

import React, { useState } from 'react';
import HeroBanner from './components/HeroBanner';
import SearchTabs from './components/SearchTabs';
import LoginModal from './components/LoginModal';
import OrderHistory from './components/OrderHistory';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [viewHistory, setViewHistory] = useState(false);

  return (
    <div>
      <HeroBanner />
      <button onClick={() => setShowLogin(true)} style={{ margin: '20px' }}>Login / Sign Up</button>
      <SearchTabs />
      {viewHistory && <OrderHistory />}
      <LoginModal show={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
}

export default App;

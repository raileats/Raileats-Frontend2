import React, { useState } from "react";
import HeroBanner from "./components/HeroBanner";
import SearchTabs from "./components/SearchTabs";
import PopularItems from "./components/PopularItems";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import Profile from "./pages/Profile";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="bg-yellow-100 min-h-screen text-black">
      <HeroBanner />
      <SearchTabs />

      {isLoggedIn ? (
        <Profile />
      ) : (
        <>
          <PopularItems />
          <Footer onLoginClick={() => setShowLogin(true)} />
        </>
      )}

      <LoginModal
        show={showLogin}
        onClose={() => {
          setShowLogin(false);
          setIsLoggedIn(true);
        }}
      />
    </div>
  );
}

export default App;

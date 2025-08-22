
import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

export default function App() {
  return (
    <Router>
      <header className="header">
        <div className="container nav">
          <div className="hstack">
            <span style={{fontWeight: 800, fontSize: 18}}>raileats<span style={{color:'#2563eb'}}>.in</span></span>
          </div>
          <nav>
            <NavLink to="/" className={({isActive}) => isActive ? "active" : undefined} end>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "active" : undefined}>About</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "active" : undefined}>Contact</NavLink>
            <NavLink to="/faq" className={({isActive}) => isActive ? "active" : undefined}>FAQ</NavLink>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

import React from "react";
import heroImg from "../assets/hero-boy-food.jpg"; // delivery boy photo
import banner from "../assets/banner.png";          // optional small banner (top)

export default function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero-card">
        <img src={banner} alt="Raileats Banner" style={{ width: 160, height: "auto", marginBottom: 10 }} />
        <h1>Rail Journey ka Swad</h1>
        <p>Only Raileats ke saath 🚆🍴 — Fresh food delivered to your seat.</p>
        <div style={{ marginTop: 14, display: "flex", gap: 10 }}>
          <a href="#search" className="btn">Order Now</a>
          <a href="#popular" className="btn btn-outline">View Popular</a>
        </div>
      </div>
      <div className="hero-img-wrap" aria-hidden="true">
        <img src={heroImg} alt="Delivery boy serving food" />
      </div>
    </section>
  );
}

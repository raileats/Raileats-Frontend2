import React from "react";

export default function HeroBanner(){
  return (
    <section className="hero">
      <div className="hero-card">
        <span className="badge">Fresh Food on Trains</span>
        <h1>Rail Journey ka Swad</h1>
        <p>Only Raileats ke saath — Taza khana, seedha aapki seat par.</p>
        <div className="row" style={{marginTop:12}}>
          <a href="#search" className="btn">Order Now</a>
          <a href="#popular" className="btn btn-outline">See Popular</a>
        </div>
      </div>
      <div className="hero-img">
        <img src="/delivery-boy.jpg" alt="Delivery boy delivering food on train"/>
      </div>
    </section>
  );
}

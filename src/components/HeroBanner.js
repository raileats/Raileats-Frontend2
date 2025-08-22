
import React from "react";

export default function HeroBanner() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Fresh, hot meals at your seat.</h1>
        <p>Order from trusted station vendors. Enter PNR or choose station.</p>
        <div style={{marginTop:16}}>
          <form className="hstack" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Enter 10-digit PNR" maxLength={10} />
            <button className="btn" type="submit">Find Food</button>
            <button className="btn outline" type="button">Browse Stations</button>
          </form>
        </div>
        <div className="hstack small" style={{marginTop:12}}>
          <span>✔ FSSAI Partners</span>
          <span>✔ On-time delivery</span>
          <span>✔ UPI & COD</span>
        </div>
      </div>
    </section>
  );
}

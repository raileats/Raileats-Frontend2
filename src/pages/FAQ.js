
import React from "react";
import Footer from "../components/Footer";

const faqs = [
  { q: "Kya main PNR ke bina order kar sakta hoon?", a: "Haan, aap station select karke bhi order kar sakte ho." },
  { q: "Payment options kya hain?", a: "UPI, cards, aur Cash on Delivery supported hai." },
  { q: "Delivery timing kaise match hota hai?", a: "Hum train ETA ke mutabik partner ko dispatch karte hain." },
];

export default function FAQ() {
  return (
    <>
      <div className="section">
        <div className="container">
          <h1>FAQ</h1>
          <div className="grid" style={{gap: 12}}>
            {faqs.map((f, i) => (
              <div key={i} className="card">
                <div className="p">
                  <strong>{f.q}</strong>
                  <p className="small">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

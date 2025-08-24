
import React from "react";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <div className="section">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="small">We usually respond within a few hours.</p>
          <form className="grid" style={{gap: 12, maxWidth: 560}} onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Your name" required />
            <input type="email" placeholder="Email" required />
            <input placeholder="Phone (optional)" />
            <textarea placeholder="How can we help?" rows={5} required />
            <div className="hstack">
              <button className="btn" type="submit">Send message</button>
              <span className="small">or email support@raileats.in</span>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

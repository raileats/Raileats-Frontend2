import React from 'react';
import HeroBoyFood from '../assets/hero-boy-food.jpg';
const HeroBanner = () => {
  return (
    <div style={{ position: 'relative', textAlign: 'center' }}>
      <img
        src={heroImg}
        alt="Raileats Hero"
        style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
      />
      <h1
        className="hero-text"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff',
          backgroundColor: 'rgba(0,0,0,0.5)',
          padding: '10px 20px',
          borderRadius: '10px',
        }}
      >
        Rail Journey ka Swad, only Raileats ke Paas!
      </h1>
    </div>
  );
};

export default HeroBanner;

import React from "react";
import heroImg from "../assets/banner.jpg"; // Train + Food image

const HeroBanner = () => {
  return (
    <div className="relative text-center">
      <img
        src={heroImg}
        alt="Raileats Hero"
        className="w-full max-h-[350px] object-cover"
      />
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        text-2xl md:text-4xl font-bold text-black bg-[#FFD700]/80 px-4 py-2 rounded-xl shadow-lg">
        Rail Journey ka Swad, only Raileats ke saath!
      </h1>
    </div>
  );
};

export default HeroBanner;

import React from "react";

export default function HeroBanner() {
  return (
    <section className="relative w-full">
      <img
        src="/banner.jpg" // public folder se direct load hoga
        alt="Raileats Hero"
        className="w-full max-h-[350px] object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold text-[#FFD700]">
          Rail Journey ka Swad
        </h1>
        <p className="text-lg mt-2">Only Raileats ke saath 🚆🍴</p>
      </div>
    </section>
  );
}

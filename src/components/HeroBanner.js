import React from "react";

export default function HeroBanner() {
  return (
    <section className="bg-yellow-400 text-black py-12 px-6 rounded-2xl shadow-lg relative overflow-hidden">
      {/* Decorative circle background */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-black opacity-10 rounded-full"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black opacity-10 rounded-full"></div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left Side - Text */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Rail Journey ka <span className="text-black">Swad</span>,
            <br />
            only <span className="text-white bg-black px-2 py-1 rounded-md">RailEats</span> ke Paas!
          </h1>
          <p className="mt-4 text-lg text-black/80">
            Order fresh & hygienic food from top restaurants while traveling in train. 
            Enjoy your favorite meals delivered right to your seat.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-black text-yellow-400 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-800 transition">
              Order by PNR
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition">
              Search by Train
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
            alt="Train Food Delivery"
            className="w-72 md:w-96 drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-indigo-100 to-blue-100">
      <Navbar />

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Text Left */}
        <div className="text-center md:text-left md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Home to All your Gadgets
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Discover and get all your cutting-edge gadgets in our store.
          </p>
        </div>

        {/* Image Right */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="/home.jpg" // use your public folder image
            alt="AI Shopping"
            className="w-150 lg:w-200 rounded-md shadow-md"
          />
        </div>
      </section>

      {/* SCROLLING PRODUCTS */}
      <section id="products" className="overflow-hidden py-8 px-4">
        <div className="flex gap-6 animate-scroll">
          {[...products, ...products].map((product, index) => (
            <div key={index} className="min-w-[400px] ">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

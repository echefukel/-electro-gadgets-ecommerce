import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

const Products = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Browse All Products
        </h2>

        {/* 🔍 Search Input */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search for gadgets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-1/2 block mx-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-400"
          />
        </div>

        {/* 🧱 Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No products match your search.</p>
        )}
      </div>
    </div>
  );
};

export default Products;

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Success = () => {
  return (
    <div className="min-h-screen bg-green-50 text-center">
      <Navbar />
      <div className="max-w-xl mx-auto mt-20 p-8 bg-white shadow rounded">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          🎉 Order Placed!
        </h2>
        <p className="text-gray-700 mb-6">
          Thank you for your purchase. We’ll contact you soon with delivery details.
        </p>
        <Link
          to="/products"
          className="inline-block bg-indigo-600 text-indigo-600 px-6 py-2 rounded cursor-pointer"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Success;

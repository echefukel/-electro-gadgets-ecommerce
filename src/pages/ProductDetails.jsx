import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import Button from "../components/Button";


const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold text-red-500">Product Not Found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {product.name}
          </h2>
          <p className="text-gray-600 text-lg mb-4">{product.description}</p>
          <p className="text-indigo-600 font-bold text-xl mb-4">
            ${product.price.toFixed(2)}
          </p>
          <Button
            onClick={() => addToCart(product)}
            className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

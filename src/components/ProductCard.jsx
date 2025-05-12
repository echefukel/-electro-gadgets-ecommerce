import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Button from "./Button";
const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover: -translate-y-1 transition duration-200">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold">{product.name}</h3>
        </Link>
        <p className="text-sm text-gray-500 mt-1">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-sm mt-2 mb-4">{product.description}</p>
        <Button
          onClick={() => addToCart(product)}
          className="mt-8   bg-gray-950 text-white p-2  rounded hover:bg-gray-800 transition"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

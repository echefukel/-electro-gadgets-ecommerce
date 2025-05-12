import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="w-full mx-auto px-8 py-4 flex justify-between items-center sticky z-50 top-0 bg-white shadow-md font-poppin">
      <h1 className="text-lg font-bold text-indigo-600">
        <Link to="/" className="text-[20px]">Electro Gadgets</Link>
      </h1>

      <nav className="space-x-6 text-gray-700 font-medium flex items-center relative">
        <Link to="/products" className="hover:text-indigo-500 font-bold">
          Products
        </Link>

        <Link to="/cart" className="hover:text-indigo-500 font-bold relative">
          Cart
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

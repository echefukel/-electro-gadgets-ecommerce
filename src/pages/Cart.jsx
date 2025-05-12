import React from "react";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

        {cartItems.length === 0 ? (
  <div className="text-center py-16">
    <img
      src='/empty-cart.jpg'
      alt="Empty cart"
      className="w-64 rounded-sm mx-auto mb-6 lg:w-120"
    />
    <h3 className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h3>
    <p className="text-gray-500 mb-4">Looks like you haven’t added anything yet.</p>
    <Link to="/products">
      <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
        Shop Now
      </button>
    </Link>
  </div>
) : (

          <>
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-right">
              <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
              <button
                onClick={clearCart}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="mt-8 flex justify-center">
          <Link to="/checkout">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 font-semibold">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <Toaster position="top-right" />
      <div className="font-inter">
        <App />
      </div>
    </CartProvider>
  </StrictMode>
);

import React from "react";

const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 font-medium transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

// app/(views)/ShoppingCart.tsx
"use client";
import React from "react";
import { useCart } from "../../../context/CartContext";
import Image from "next/image";

export default function ShoppingCart() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.product.id}
              className="flex items-center justify-between mb-4 border-b pb-4"
            >
              <div className="flex items-center">
                <div className="w-24 h-24 relative">
                  <Image
                    src={item.product.image || "/placeholder.svg"}
                    alt={item.product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{item.product.name}</h2>
                  <p className="text-gray-500">${item.product.price}</p>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.product.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={clearCart}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

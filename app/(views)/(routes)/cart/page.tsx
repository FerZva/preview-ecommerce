// app/(views)/ShoppingCart.tsx
"use client";

import React, { useState } from "react";
import { useCart } from "../../../context/CartContext";
import Image from "next/image";
import Link from "next/link";

/**
 * Función de ayuda para calcular el subtotal.
 * Ajusta según tu estructura y tipos de datos.
 */
const getSubTotal = (cart: any[]) => {
  return cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
};

export default function ShoppingCart() {
  const { cart, removeFromCart, clearCart } = useCart();

  // Subtotal del carrito
  const subTotal = getSubTotal(cart);

  // Estado para el código de cupón
  const [couponCode, setCouponCode] = useState("");

  // Manejadores de ejemplo
  const handleUpdateCart = () => {
    // Aquí puedes actualizar la lógica de tu carrito (cantidades, etc.)
    console.log("Carrito actualizado");
  };

  const handleApplyCoupon = () => {
    // Lógica para aplicar cupón
    console.log("Cupón aplicado:", couponCode);
  };

  // Si el carrito está vacío
  if (cart.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <p>Your cart is empty.</p>
        <Link
          href="/"
          className="mt-4 inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Return To Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Título */}
      <h1 className="text-2xl font-bold mb-6">Cart</h1>

      {/* Tabla de productos */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="pb-3 text-left">Product</th>
              <th className="pb-3 text-left">Price</th>
              <th className="pb-3 text-left">Quantity</th>
              <th className="pb-3 text-left">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              const itemSubtotal = item.product.price * item.quantity;
              return (
                <tr
                  key={item.product.id}
                  className="border-b border-gray-100 last:border-none"
                >
                  {/* Producto */}
                  <td className="py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 relative">
                        <Image
                          src={item.product.image || "/placeholder.svg"}
                          alt={item.product.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{item.product.name}</p>
                      </div>
                    </div>
                  </td>
                  {/* Precio */}
                  <td className="py-4">${item.product.price}</td>
                  {/* Cantidad (en caso de implementar lógica para actualizar) */}
                  <td className="py-4">{item.quantity}</td>
                  {/* Subtotal */}
                  <td className="py-4">${itemSubtotal}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Sección de botones y cupón */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="flex gap-4">
          <Link
            href="/"
            className="bg-white border border-gray-300 text-black px-4 py-2 rounded hover:bg-gray-100"
          >
            Return To Shop
          </Link>
          <button
            onClick={handleUpdateCart}
            className="bg-white border border-gray-300 text-black px-4 py-2 rounded hover:bg-gray-100"
          >
            Update Cart
          </button>
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border border-gray-300 px-4 py-2 rounded"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button
            onClick={handleApplyCoupon}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Apply Coupon
          </button>
        </div>
      </div>

      {/* Sección de Totales */}
      <div className="flex justify-end">
        <div className="w-full md:w-1/3 border border-gray-200 p-4">
          <h2 className="text-lg font-bold mb-4">Cart Total</h2>
          {/* Subtotal */}
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold">${subTotal}</span>
          </div>
          {/* Shipping */}
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Shipping</span>
            <span className="font-semibold">Free</span>
          </div>
          {/* Total */}
          <div className="flex justify-between mb-4 border-b border-gray-200 pb-2">
            <span className="text-gray-600">Total</span>
            <span className="font-semibold">${subTotal}</span>
          </div>
          <button className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600">
            Proceed to checkout
          </button>
        </div>
      </div>

      {/* Botón para limpiar el carrito (opcional) */}
      <div className="mt-8">
        <button
          onClick={clearCart}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

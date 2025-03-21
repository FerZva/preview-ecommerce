"use client";

import React, { useState } from "react";
import { useCart } from "../../../../context/CartContext";
import Image from "next/image";

const Checkout = () => {
  // Obtenemos los productos del carrito
  const { cart, clearCart } = useCart();

  // Estado para mostrar el mensaje de confirmación
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Estado para campos del formulario
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    aptSuite: "",
    city: "",
    phone: "",
    email: "",
    saveInfo: false,
  });

  // Estado para la información de pago
  const [paymentInfo, setPaymentInfo] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    paymentMethod: "card", // "card" o "bank" o "cash"
    couponCode: "",
  });

  // Maneja el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí iría la lógica de “pago”
    console.log("Procesando pago ficticio...", {
      billingDetails,
      paymentInfo,
      cart,
    });

    clearCart();
    // Simulamos que se completó la compra
    setOrderPlaced(true);
  };

  // Cálculo del subtotal y total (ajusta según tu lógica)
  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const shipping = 0; // Ficticio: "Free"
  const total = subtotal + shipping;

  // Vista final con mensaje de agradecimiento
  if (orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Thank you!</h1>
        <p>Your order has been placed successfully.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Encabezado con migas de pan (opcional) */}
      <div className="mb-4 text-sm text-gray-600">
        Account / My Account / Product / View Cart /{" "}
        <span className="font-bold">CheckOut</span>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Columna Izquierda: Billing Details */}
        <div>
          <h2 className="text-xl font-bold mb-4">Billing Details</h2>

          {/* Nombre */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="firstName"
            >
              First Name*
            </label>
            <input
              id="firstName"
              type="text"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={billingDetails.firstName}
              onChange={(e) =>
                setBillingDetails({
                  ...billingDetails,
                  firstName: e.target.value,
                })
              }
            />
          </div>

          {/* Company Name */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="companyName"
            >
              Company Name
            </label>
            <input
              id="companyName"
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={billingDetails.companyName}
              onChange={(e) =>
                setBillingDetails({
                  ...billingDetails,
                  companyName: e.target.value,
                })
              }
            />
          </div>

          {/* Street Address */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="streetAddress"
            >
              Street Address*
            </label>
            <input
              id="streetAddress"
              type="text"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={billingDetails.streetAddress}
              onChange={(e) =>
                setBillingDetails({
                  ...billingDetails,
                  streetAddress: e.target.value,
                })
              }
            />
          </div>

          {/* Apt/Suite */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="aptSuite"
            >
              Apartment, suite, etc. (optional)
            </label>
            <input
              id="aptSuite"
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={billingDetails.aptSuite}
              onChange={(e) =>
                setBillingDetails({
                  ...billingDetails,
                  aptSuite: e.target.value,
                })
              }
            />
          </div>

          {/* City */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="city">
              Town/City*
            </label>
            <input
              id="city"
              type="text"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={billingDetails.city}
              onChange={(e) =>
                setBillingDetails({ ...billingDetails, city: e.target.value })
              }
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="phone">
              Phone Number*
            </label>
            <input
              id="phone"
              type="tel"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={billingDetails.phone}
              onChange={(e) =>
                setBillingDetails({ ...billingDetails, phone: e.target.value })
              }
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email Address*
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={billingDetails.email}
              onChange={(e) =>
                setBillingDetails({ ...billingDetails, email: e.target.value })
              }
            />
          </div>

          {/* Checkbox de guardar info */}
          <div className="mb-6 flex items-center gap-2">
            <input
              id="saveInfo"
              type="checkbox"
              checked={billingDetails.saveInfo}
              onChange={(e) =>
                setBillingDetails({
                  ...billingDetails,
                  saveInfo: e.target.checked,
                })
              }
            />
            <label htmlFor="saveInfo" className="text-sm text-gray-700">
              Save this information for faster check-out next time
            </label>
          </div>
        </div>

        {/* Columna Derecha: Resumen y Pago */}
        <div>
          <div className="border border-gray-200 p-4 mb-6">
            {/* Resumen de Productos */}
            <ul className="divide-y divide-gray-200 mb-4">
              {cart.map((item) => {
                const itemSubtotal = item.product.price * item.quantity;
                return (
                  <li
                    key={item.product.id}
                    className="flex justify-between py-2"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-12 relative">
                        <Image
                          src={item.product.image || "/placeholder.svg"}
                          alt={item.product.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span>{item.product.name}</span>
                    </div>
                    <span className="font-medium">${itemSubtotal}</span>
                  </li>
                );
              })}
            </ul>

            {/* Subtotal y envío */}
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-semibold">${subtotal}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Shipping:</span>
              <span className="font-semibold">Free</span>
            </div>

            {/* Total */}
            <div className="flex justify-between border-t border-gray-200 pt-2 mb-4">
              <span className="text-gray-600">Total:</span>
              <span className="font-semibold">${total}</span>
            </div>

            {/* Métodos de pago */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <input
                  id="bank"
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  checked={paymentInfo.paymentMethod === "bank"}
                  onChange={(e) =>
                    setPaymentInfo({
                      ...paymentInfo,
                      paymentMethod: e.target.value,
                    })
                  }
                />
                <label htmlFor="bank" className="text-sm">
                  Bank
                </label>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <input
                  id="card"
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentInfo.paymentMethod === "card"}
                  onChange={(e) =>
                    setPaymentInfo({
                      ...paymentInfo,
                      paymentMethod: e.target.value,
                    })
                  }
                />
                <label htmlFor="card" className="text-sm">
                  Visa / MasterCard
                </label>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <input
                  id="cash"
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={paymentInfo.paymentMethod === "cash"}
                  onChange={(e) =>
                    setPaymentInfo({
                      ...paymentInfo,
                      paymentMethod: e.target.value,
                    })
                  }
                />
                <label htmlFor="cash" className="text-sm">
                  Cash on delivery
                </label>
              </div>
            </div>

            {/* Si elige tarjeta, mostramos campos ficticios */}
            {paymentInfo.paymentMethod === "card" && (
              <div className="mb-4 border border-gray-200 p-4">
                <h3 className="font-semibold mb-2">Card Details</h3>
                <div className="mb-2">
                  <label className="block text-sm mb-1" htmlFor="cardName">
                    Cardholder Name
                  </label>
                  <input
                    id="cardName"
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={paymentInfo.cardName}
                    onChange={(e) =>
                      setPaymentInfo({
                        ...paymentInfo,
                        cardName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm mb-1" htmlFor="cardNumber">
                    Card Number
                  </label>
                  <input
                    id="cardNumber"
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={paymentInfo.cardNumber}
                    onChange={(e) =>
                      setPaymentInfo({
                        ...paymentInfo,
                        cardNumber: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="flex gap-2">
                  <div className="mb-2 w-1/2">
                    <label className="block text-sm mb-1" htmlFor="expiryDate">
                      Expiry Date (MM/YY)
                    </label>
                    <input
                      id="expiryDate"
                      type="text"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      value={paymentInfo.expiryDate}
                      onChange={(e) =>
                        setPaymentInfo({
                          ...paymentInfo,
                          expiryDate: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-2 w-1/2">
                    <label className="block text-sm mb-1" htmlFor="cvv">
                      CVV
                    </label>
                    <input
                      id="cvv"
                      type="text"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      value={paymentInfo.cvv}
                      onChange={(e) =>
                        setPaymentInfo({ ...paymentInfo, cvv: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Cupón */}
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Coupon Code"
                className="flex-1 border border-gray-300 rounded px-3 py-2"
                value={paymentInfo.couponCode}
                onChange={(e) =>
                  setPaymentInfo({ ...paymentInfo, couponCode: e.target.value })
                }
              />
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Apply Coupon
              </button>
            </div>

            {/* Botón para Finalizar Compra */}
            <button
              type="submit"
              className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;

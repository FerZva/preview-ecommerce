"use client";
import type React from "react";

import { Products } from "../services/interfaces";
import { useState } from "react";
import Image from "next/image";
import { Heart, Eye } from "lucide-react";

interface ProductCardProps {
  product: Products;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    console.log(`Added ${product.name} to cart`);
    // Here you would typically dispatch to a cart context or make an API call
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    console.log(
      `${isWishlisted ? "Removed from" : "Added to"} wishlist: ${product.name}`
    );
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Quick view: ${product.name}`);
    // Here you would typically open a modal with product details
  };

  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`star-${i}`}
          className="w-4 h-4 text-yellow-400 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg
          key="half-star"
          className="w-4 h-4 text-yellow-400 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          <path
            d="M12 17.27V2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
            className="text-yellow-400 fill-current"
          />
        </svg>
      );
    }

    // Add empty stars to make total of 5
    const emptyStars = 5 - Math.ceil(product.rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-star-${i}`}
          className="w-4 h-4 text-gray-300 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div
      className="relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Discount badge */}
      {product.discount > 0 && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
          -{product.discount}%
        </div>
      )}

      {/* Wishlist button */}
      <button
        onClick={handleToggleWishlist}
        className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm z-10 transition-colors hover:bg-gray-100"
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart
          className={`w-5 h-5 ${
            isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
          }`}
        />
      </button>

      {/* Quick view button */}
      <button
        onClick={handleQuickView}
        className="absolute top-10 right-2 p-1.5 bg-white rounded-full shadow-sm z-10 transition-colors hover:bg-gray-100"
        aria-label="Quick view"
      >
        <Eye className="w-5 h-5 text-gray-600" />
      </button>

      {/* Product image with Add to Cart button */}
      <div className="relative h-48 bg-gray-100">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-4"
        />

        {/* Add to cart button (visible on hover) */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-black text-white text-center py-3 font-medium transition-opacity duration-300 cursor-pointer ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleAddToCart}
        >
          Add To Cart
        </div>
      </div>

      {/* Product info */}
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
        <div className="flex items-center mb-1">
          <span className="text-red-500 font-bold mr-2">${product.price}</span>
          {product.originalPrice > product.price && (
            <span className="text-gray-500 line-through text-sm">
              ${product.originalPrice}
            </span>
          )}
        </div>
        <div className="flex items-center">
          <div className="flex mr-2">{renderStars()}</div>
          <span className="text-gray-500 text-sm">({product.reviews})</span>
        </div>
      </div>
    </div>
  );
}

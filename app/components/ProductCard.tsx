import React from "react";

const ProductCard = () => {
  return (
    <article className="w-full h-auto flex flex-col items-center justify-center rounded-md">
      {/* Image */}
      <div className="bg-slate-200 overflow-hidden relative w-full h-full max-w-[200px] max-h-[200px]">
        <img
          src="/iphone16.png"
          alt="iPhone"
          className="w-full h-full max-w-[200px] max-h-[200px] absolute inset-0 object-cover"
        />
        <button className="bg-slate-950 w-full text-white">Add To Cart</button>
      </div>
    </article>
  );
};

export default ProductCard;

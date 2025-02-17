import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="w-full h-auto text-center bg-slate-950 text-white flex flex-wrap items-center justify-center p-2">
      <p>Summer Sale For All Suits And Free Express Delivery - OFF 50%</p>
      <Link href="#" className="ml-4 underline font-semibold">
        ShopNow
      </Link>
    </div>
  );
};

export default Banner;

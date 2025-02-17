import React from "react";
import Link from "next/link";
import { Search, ShoppingCart, Heart } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full sticky flex justify-between items-center py-4 lg:px-20 border border-solid border-gray-200 dark:border-gray-800">
      <div>
        <h1 className="text-bold">LOGO</h1>
      </div>
      <nav>
        <ul className="flex gap-4">
          <li className="font-bold hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="font-bold hover:underline">
            <Link href="/about">About</Link>
          </li>
          <li className="font-bold hover:underline">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="font-bold hover:underline">
            <Link href="/contact">Sign Up</Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-2">
        {/* Search Bar */}
        <div className="flex gap-2 bg-gray-200 justify-between items-center p-2 w-auto">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-gray-200 w-full outline-none"
          />
          <button className="ml-4">
            <Search />
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <Link href="#" className="mx-2">
            <Heart />
          </Link>
          <Link href="#" className="mx-2">
            <ShoppingCart />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";
import React from "react";
import Link from "next/link";
import { Search, ShoppingCart, Heart } from "lucide-react";
import Image from "next/image";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import LOGO from "../../public/LOGO.png";
import { useCart } from "../context/CartContext";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { user, isAuthenticated, isLoading } = useKindeBrowserClient();
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <header className="w-full sticky top-0 flex justify-between items-center py-4 lg:px-20 border border-solid border-gray-200 dark:border-gray-800">
      <div>
        <Image
          src={LOGO}
          alt="Logo"
          width={1000}
          height={1000}
          placeholder="blur"
          className="max-w-20 max-h-20"
        />
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
          <Link href="/cart" className="mx-2 flex justify-center items-center">
            <ShoppingCart />
            {totalItems > 0 && (
              <span className="flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger>
              {isAuthenticated && user?.picture && (
                <Image
                  src={user?.picture}
                  alt="Profile Picture"
                  width={50}
                  height={50}
                  className="rounded-full mx-auto my-2 cursor-pointer"
                  placeholder="blur"
                  blurDataURL={user?.picture}
                />
              )}
              {isAuthenticated && user && !user?.picture && (
                <div className="h-7 w-7 rounded-full mx-auto my-2 bg-zinc-800 text-xs flex justify-center items-center">
                  {user?.given_name?.[0]}
                </div>
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-4 w-48">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-slate-200" />
              <DropdownMenuItem className="cursor-pointer">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Team
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogoutLink>Log out</LogoutLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;

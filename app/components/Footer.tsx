import React from "react";
import {
  SendHorizontal,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full p-4 bg-slate-950 text-white">
      <div className="flex justify-between">
        {/* First Column */}
        <div className="flex flex-col gap-4 m-4">
          <h3 className="text-2xl font-bold">Exclusive</h3>
          <p className="font-bold">Subscribe</p>
          <div>
            <p className="mb-2">Get 10% off your first order</p>
            <div className="flex gap-2 items-center p-2 border border-white rounded-sm">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-slate-950 outline-none"
              />
              <button>
                <SendHorizontal />
              </button>
            </div>
          </div>
        </div>
        {/* Second Column */}
        <div className="flex flex-col gap-4 m-4">
          <h3 className="text-2xl font-bold">Support</h3>
          <ul className="flex flex-col gap-4">
            <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>
        {/* Third Column */}
        <div className="flex flex-col gap-4 m-4">
          <h3 className="text-2xl font-bold">Account</h3>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/login">My Account</Link>
            </li>
            <li>
              <Link href="/login">Login / Register</Link>
            </li>
            <li>
              <Link href="/login">Cart</Link>
            </li>
            <li>
              <Link href="/login">Wishlist</Link>
            </li>
            <li>
              <Link href="/login">Shop</Link>
            </li>
          </ul>
        </div>
        {/* Fourth Column */}
        <div className="flex flex-col gap-4 m-4">
          <h3 className="text-2xl font-bold">Quick Link</h3>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/about">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/contact">Term Of Use</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/terms">Contact</Link>
            </li>
          </ul>
        </div>
        {/* Fith Column */}
        <div className="flex flex-col gap-4 m-4">
          <h3 className="text-2xl font-bold">Follow Us</h3>
          <div>
            <div>
              <p>Save $3 with App New Users Only</p>
              <div className="flex gap-4">
                <div>
                  <img src="/QR_code.png" alt="facebook" />
                </div>
                <div>
                  <img src="/googlepaybtn.svg" alt="twitter" />
                  <img src="/appstorebtn.svg" alt="instagram" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <Link href="">
                  <Facebook />
                </Link>
              </li>
              <li>
                <Link href="">
                  <Twitter />
                </Link>
              </li>
              <li>
                <Link href="">
                  <Instagram />
                </Link>
              </li>
              <li>
                <Link href="">
                  <Linkedin />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

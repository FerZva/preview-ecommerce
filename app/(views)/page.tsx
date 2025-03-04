import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { slides } from "../services/data";
import Slider from "../components/Slider";
import ProductCard from "../components/ProductCard";
import CountdownTimer from "../components/CountDownTimer";
import { products } from "../services/data";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="w-full flex items-center justify-evenly">
        <div className="border-r border-gray-400">
          <ul className="flex flex-col gap-4 w-full h-full font-medium">
            <li className="flex justify-between items-center gap-2">
              <Link href="">Woman&apos;s Fashion</Link>{" "}
              <ChevronRight className="ml-4" />
            </li>
            <li className="flex justify-between items-center gap-2">
              <Link href="">Men&apos;s Fashion</Link>{" "}
              <ChevronRight className="ml-4" />
            </li>
            <li>
              <Link href="">Electronics</Link>
            </li>
            <li>
              <Link href="">Home &amp; Lifestyle</Link>
            </li>
            <li>
              <Link href="">Medicine</Link>
            </li>
            <li>
              <Link href="">Sports &amp; Outdoor</Link>
            </li>
            <li>
              <Link href="">Baby&apos;s &amp; Toys</Link>
            </li>
            <li>
              <Link href="">Grocery &amp; Pets</Link>
            </li>
            <li>
              <Link href="">Health &amp; Beauty</Link>
            </li>
          </ul>
        </div>
        <div className="p-4 min-w-[70%] h-full max-h-[330px]sam">
          {/* <Slider /> */}
          <Slider slides={slides} />
        </div>
      </section>
      {/* Today's Section */}
      <section className="overflow-hidden w-full h-auto mt-20">
        <div className="flex justify-between items-center mx-20">
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="40"
              viewBox="0 0 20 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="40" rx="4" fill="#DB4444" />
            </svg>

            <h2 className="text-red-500 font-bold">Today&apos;s</h2>
          </div>
          <div></div>
        </div>
        <div className="flex justify-between items-center mx-20 mt-8">
          <div className="flex items-center gap-14">
            <h2 className="text-4xl font-bold">Flash Sales</h2>
            <CountdownTimer
              initialDays={3}
              initialHours={23}
              initialMinutes={19}
              initialSeconds={56}
            />
          </div>
          <div className="flex gap-4">
            <ArrowLeft className="cursor-pointer" />
            <ArrowRight className="cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-row gap-8 mx-20 my-8 ">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      {/* Categories */}
      <div>Categories</div>
      {/* This Month */}
      <div>This Month</div>
      {/* Our Products */}
      <div>Our Products</div>
      {/* Featured */}
      <div>Featured</div>
      {/* Services */}
      <div>Services</div>
    </div>
  );
}

import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="w-full h-96 flex items-center justify-center">
        <div className="border-r border-gray-400">
          <ul className="flex flex-col gap-4 w-full h-full">
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
        <div className="p-4 min-w-[70%] h-full">
          <div className="min-w-full bg-slate-800 min-h-full text-white">
            Banners
          </div>
        </div>
      </section>
      {/* Today's Section */}
      <div>Today Offers</div>
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

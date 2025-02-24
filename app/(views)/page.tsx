import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { products } from "../services/data";
// import Slider from "../components/Slider";

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
        <div className="p-4 min-w-[70%] h-full">{/* <Slider /> */}</div>
      </section>
      {/* Today's Section */}
      <div className="overflow-hidden w-full h-auto">
        <div className="flex justify-between items-center">
          <h2>Flash Sales</h2>
          <div>Timer</div>
        </div>
        <div className="flex flex-row gap-8">
          {products.map((product) => (
            <article key={product.productName}>
              <div>
                {product.images && product.images[0] && (
                  <img src={product.images[0]} alt={product.productName} />
                )}
              </div>
              <div>{product.productName}</div>
              <div>{product.productPrice}</div>
            </article>
          ))}
        </div>
      </div>
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

"use client";
import { ArrowLeft, ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { slides, products } from "../services/data";
import Slider from "../components/Slider";
import ProductCard from "../components/ProductCard";
import CountdownTimer from "../components/CountDownTimer";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
    containScroll: "trimSnaps",
    slidesToScroll: "auto",
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((current) => {
        if (
          current.days === 0 &&
          current.hours === 0 &&
          current.minutes === 0 &&
          current.seconds === 0
        ) {
          clearInterval(timer);
          return current;
        }

        let newSeconds = current.seconds - 1;
        let newMinutes = current.minutes;
        let newHours = current.hours;
        let newDays = current.days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
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
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className=" mx-20 overflow-hidden mt-6" ref={emblaRef}>
          <div className="flex gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[calc(20%-8px)] flex-shrink-0"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-red-500 text-white font-bold py-4 px-4 rounded-sm">
            View All Products
          </button>
        </div>
      </section>
      {/* Categories */}
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

            <h2 className="text-red-500 font-bold">Categories</h2>
          </div>
          <div></div>
        </div>
        <div className="flex justify-between items-center mx-20 mt-8">
          <div className="flex items-center gap-14">
            <h2 className="text-4xl font-bold">Browse By Categories</h2>
          </div>
          <div className="flex gap-4">
            <ArrowLeft className="cursor-pointer" />
            <ArrowRight className="cursor-pointer" />
          </div>
        </div>
      </section>
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

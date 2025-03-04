"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SlideItem {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

interface ImageSliderProps {
  slides: SlideItem[];
  autoPlayInterval?: number;
  height?: number;
}

export default function ImageSlider({
  slides,
  autoPlayInterval = 5000,
  height = 600,
}: ImageSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [nextSlide, autoPlayInterval, isPaused]);

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div
      className="relative w-full overflow-hidden shadow-xl max-h-[330px]"
      style={{ height: `${height}px` }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.imageUrl || "/placeholder.svg"}
            alt={slide.title}
            fill
            priority={index === 0}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />

          <div className="absolute bottom-16 left-8 md:left-12 z-20 max-w-md">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {slide.title}
            </h2>
            <p className="text-white/90 mb-6 hidden md:block">
              {slide.description}
            </p>
            <button className="px-4 flex items-center gap-2">
              <Link
                href={slide.link}
                className="text-white border-b-2 py-1 font-medium"
              >
                Shop Now
              </Link>
              <ArrowRight className="text-white" />
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

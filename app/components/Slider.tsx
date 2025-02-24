// import type React from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import { ShoppingBagIcon } from "@heroicons/react/24/outline";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // Define the structure of our slide data
// interface Slide {
//   id: number;
//   imageUrl: string;
//   altText: string;
// }

// // Sample slide data
// const slides: Slide[] = [
//   {
//     id: 1,
//     imageUrl: "../../public/iphonebanner.jpg",
//     altText: "Slide 1",
//   },
//   {
//     id: 2,
//     imageUrl: "../../public/iphonebanner.jpg",
//     altText: "Slide 2",
//   },
//   {
//     id: 3,
//     imageUrl: "../../public/iphonebanner.jpg",
//     altText: "Slide 3",
//   },
// ];

// const ImageSlider: React.FC = () => {
//   return (
//     <div className="relative w-full h-[600px]">
//       <Swiper
//         modules={[Pagination, Autoplay]}
//         pagination={{
//           clickable: true,
//           bulletActiveClass: "swiper-pagination-bullet-active bg-white",
//         }}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         loop={true}
//         className="w-full h-full"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div className="relative w-full h-full">
//               <Image
//                 src={slide.imageUrl || "/placeholder.svg"}
//                 alt={slide.altText}
//                 layout="fill"
//                 objectFit="cover"
//                 priority
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-30" />
//               <button
//                 className="absolute bottom-8 left-8 z-10 flex items-center px-6 py-3 bg-white text-black rounded-full transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
//                 onClick={() =>
//                   console.log(`Shop Now clicked for slide ${slide.id}`)
//                 }
//               >
//                 <ShoppingBagIcon className="w-5 h-5 mr-2" />
//                 Shop Now
//               </button>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ImageSlider;

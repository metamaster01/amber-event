// "use client";
// import Image from "next/image";

// const HeroSection = () => {
//   return (
//     <section className="relative text-center px-6 py-20 overflow-hidden">
//       {/* BASE BACKGROUND COLOR */}
//       <div className="absolute inset-0 -z-10 bg-[#C14600]" />

//       {/* COLORED BLOBS */}
//       <div className="absolute inset-0 -z-10">
//         <div
//           className="absolute w-[500px] h-[500px] top-[-100px] left-[-150px] rounded-full blur-3xl opacity-40"
//           style={{ background: "#C14600" }}
//         />
//         <div
//           className="absolute w-[400px] h-[400px] bottom-[-100px] right-[-100px] rounded-full blur-3xl opacity-40"
//           style={{ background: "#F2E8C6" }}
//         />
//         <div
//           className="absolute w-[300px] h-[300px] top-[30%] left-[50%] -translate-x-1/2 rounded-full blur-3xl opacity-30"
//           style={{ background: "#C14600" }}
//         />
//       </div>

//       {/* Heading */}
//       <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative z-10">
//         Amber Events – Turning<br />Celebrations into Memories
//       </h1>

//       {/* Subtitle */}
//       <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 relative z-10">
//         We design weddings & events filled with joy, elegance, and unforgettable moments.
//       </p>

//       {/* Button */}
//       <button className="relative z-10 bg-[#F2E8C6] text-[#C14600] font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#e6dcc0] transition">
//         Plan Your Event
//       </button>

//       {/* Images with 3D Effect */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 relative z-10">
//         {/* Left Tilted Image */}
//         <div className="relative w-full h-64 overflow-hidden"
//              style={{ perspective: "1000px" }}>
//           <Image
//             src="/hero1.png"
//             alt="Event setup 1"
//             fill
//             className="object-cover rounded-lg shadow transition-transform duration-500 hover:scale-105"
//             style={{
//               transform: "rotateY(15deg)", // thoda left se bahar rotate
//               transformOrigin: "left center",
//             }}
//           />
//         </div>

//         {/* Center Image (Straight) */}
//         <div className="relative w-full h-64 overflow-hidden rounded-lg shadow">
//           <Image
//             src="/hero2.png"
//             alt="Event setup 2"
//             fill
//             className="object-cover"
//           />
//         </div>

//         {/* Right Tilted Image */}
//         <div className="relative w-full h-64 overflow-hidden"
//              style={{ perspective: "1000px" }}>
//           <Image
//             src="/hero3.png"
//             alt="Event setup 3"
//             fill
//             className="object-cover rounded-lg shadow transition-transform duration-500 hover:scale-105"
//             style={{
//               transform: "rotateY(-15deg)", // thoda right se bahar rotate
//               transformOrigin: "right center",
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import DomeGallery from "@/components/DomeGallery";

// const HeroSection = () => {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     setTimeout(() => setLoaded(true), 100);
//   }, []);

//   return (
//     <>
//       <style jsx global>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeInScale {
//           from {
//             opacity: 0;
//             transform: scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes slideInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-60px) rotateY(25deg);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0) rotateY(15deg);
//           }
//         }

//         @keyframes slideInRight {
//           from {
//             opacity: 0;
//             transform: translateX(60px) rotateY(-25deg);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0) rotateY(-15deg);
//           }
//         }

//         @keyframes slideInCenter {
//           from {
//             opacity: 0;
//             transform: translateY(30px) scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         @keyframes blobFloat1 {
//           0%,
//           100% {
//             transform: translate(0, 0) scale(1);
//           }
//           50% {
//             transform: translate(30px, -30px) scale(1.1);
//           }
//         }

//         @keyframes blobFloat2 {
//           0%,
//           100% {
//             transform: translate(0, 0) scale(1);
//           }
//           50% {
//             transform: translate(-20px, 20px) scale(1.15);
//           }
//         }

//         @keyframes blobFloat3 {
//           0%,
//           100% {
//             transform: translate(0, 0) scale(1);
//           }
//           50% {
//             transform: translate(15px, 25px) scale(1.08);
//           }
//         }

//         @keyframes buttonPulse {
//           0%,
//           100% {
//             box-shadow: 0 4px 15px rgba(242, 232, 198, 0.3);
//           }
//           50% {
//             box-shadow: 0 6px 25px rgba(242, 232, 198, 0.5);
//           }
//         }

//         .hero-heading {
//           animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards;
//         }

//         .hero-subtitle {
//           animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s backwards;
//         }

//         .hero-button {
//           animation: fadeInScale 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s
//               backwards,
//             buttonPulse 2s ease-in-out 1.5s infinite;
//           transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .hero-button:hover {
//           transform: translateY(-3px) scale(1.05);
//           box-shadow: 0 10px 30px rgba(242, 232, 198, 0.4);
//         }

//         .hero-button:active {
//           transform: translateY(-1px) scale(1.02);
//         }

//         .image-left {
//           animation: slideInLeft 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s backwards;
//         }

//         .image-center {
//           animation: slideInCenter 1s cubic-bezier(0.16, 1, 0.3, 1) 1s backwards;
//         }

//         .image-right {
//           animation: slideInRight 1s cubic-bezier(0.16, 1, 0.3, 1) 1.2s
//             backwards;
//         }

//         .blob-1 {
//           animation: blobFloat1 8s ease-in-out infinite;
//         }

//         .blob-2 {
//           animation: blobFloat2 10s ease-in-out infinite;
//         }

//         .blob-3 {
//           animation: blobFloat3 12s ease-in-out infinite;
//         }

//         .gallery-container {
//           animation: fadeInScale 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1.4s
//             backwards;
//         }

//         .image-wrapper:hover {
//           transform: scale(1.08) translateZ(20px);
//           z-index: 10;
//         }

//         .image-left:hover {
//           transform: rotateY(20deg) scale(1.05);
//         }

//         .image-right:hover {
//           transform: rotateY(-20deg) scale(1.05);
//         }

//         .text-shimmer {
//           background: linear-gradient(90deg, #fff 0%, #f2e8c6 50%, #fff 100%);
//           background-size: 200% auto;
//           -webkit-background-clip: text;
//           background-clip: text;
//           -webkit-text-fill-color: transparent;
//           animation: shimmer 3s linear infinite;
//         }

//         @keyframes shimmer {
//           to {
//             background-position: 200% center;
//           }
//         }

//         .dome-gallery-wrapper {
//           border-radius: 30px;
//           overflow: hidden;
//           box-shadow: 0 20px 60px rgba(193, 70, 0, 0.3);
//         }
//       `}</style>

//       <section className="relative px-6 py-20 overflow-hidden min-h-screen flex items-center">
//         {/* BASE BACKGROUND COLOR */}
//         <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#C14600] via-[#D55000] to-[#C14600]" />

//         {/* ANIMATED COLORED BLOBS */}
//         <div className="absolute inset-0 -z-10">
//           <div
//             className="blob-1 absolute w-[500px] h-[500px] top-[-100px] left-[-150px] rounded-full blur-3xl opacity-40"
//             style={{ background: "#C14600" }}
//           />
//           <div
//             className="blob-2 absolute w-[400px] h-[400px] bottom-[-100px] right-[-100px] rounded-full blur-3xl opacity-40"
//             style={{ background: "#F2E8C6" }}
//           />
//           <div
//             className="blob-3 absolute w-[300px] h-[300px] top-[30%] left-[50%] -translate-x-1/2 rounded-full blur-3xl opacity-30"
//             style={{ background: "#FFD700" }}
//           />
//         </div>

//         <div className="container mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* LEFT SIDE - Content */}
//             <div className="text-center lg:text-left space-y-6 relative z-10">
//               {/* Heading with Shimmer Effect */}
//               <h1 className="hero-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
//                 <span className="text-shimmer">Amber Events</span>
//                 <br />
//                 <span className="text-white">Turning Celebrations</span>
//                 <br />
//                 <span className="text-[#F2E8C6]">Into Memories</span>
//               </h1>

//               {/* Subtitle */}
//               <p className="hero-subtitle text-lg md:text-xl text-white/90 max-w-xl mx-auto lg:mx-0">
//                 We design weddings & events filled with joy, elegance, and
//                 unforgettable moments.
//               </p>

//               {/* Button */}
//               <div className="flex justify-center lg:justify-start">
//                 <button className="hero-button bg-[#F2E8C6] text-[#C14600] font-bold px-8 py-4 rounded-full shadow-xl hover:bg-[#FFD700] transition-all text-lg">
//                   Plan Your Event
//                 </button>
//               </div>

//               {/* Images with 3D Effect - Mobile/Tablet */}
//               <div className="lg:hidden grid grid-cols-3 gap-4 mt-12">
//                 {/* Left Tilted Image */}
//                 <div
//                   className="image-wrapper image-left relative w-full h-48 overflow-hidden transition-all duration-500"
//                   style={{ perspective: "1000px" }}
//                 >
//                   <div
//                     className="relative w-full h-full"
//                     style={{
//                       transform: "rotateY(15deg)",
//                       transformOrigin: "left center",
//                       transition: "transform 0.5s ease",
//                     }}
//                   >
//                     <Image
//                       src="/hero1.png"
//                       alt="Event setup 1"
//                       fill
//                       className="object-cover rounded-lg shadow-2xl"
//                     />
//                   </div>
//                 </div>

//                 {/* Center Image (Straight) */}
//                 <div className="image-wrapper image-center relative w-full h-48 overflow-hidden rounded-lg shadow-2xl transition-all duration-500">
//                   <Image
//                     src="/hero2.png"
//                     alt="Event setup 2"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>

//                 {/* Right Tilted Image */}
//                 <div
//                   className="image-wrapper image-right relative w-full h-48 overflow-hidden transition-all duration-500"
//                   style={{ perspective: "1000px" }}
//                 >
//                   <div
//                     className="relative w-full h-full"
//                     style={{
//                       transform: "rotateY(-15deg)",
//                       transformOrigin: "right center",
//                       transition: "transform 0.5s ease",
//                     }}
//                   >
//                     <Image
//                       src="/hero3.png"
//                       alt="Event setup 3"
//                       fill
//                       className="object-cover rounded-lg shadow-2xl"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT SIDE - Dome Gallery */}
//             <div className="gallery-container hidden lg:block relative h-[600px] w-full">
//               <div className="dome-gallery-wrapper">
//                 <DomeGallery
//                   images={[
//                     "/hero1.png",
//                     "/hero2.png",
//                     "/hero3.png",
//                     "/hero1.png",
//                     "/hero2.png",
//                     "/hero3.png",
//                     "/hero1.png",
//                   ]}
//                   fit={0.6}
//                   minRadius={450}
//                   maxVerticalRotationDeg={5}
//                   segments={22}
//                   dragDampening={0}
//                   grayscale={false}
//                   imageBorderRadius="20px"
//                   openedImageBorderRadius="30px"
//                   overlayBlurColor="#060010"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HeroSection;


// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import DomeGallery from "@/components/DomeGallery";

// const HeroSection = () => {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     setTimeout(() => setLoaded(true), 100);
//   }, []);

//   const galleryImages = [
//     "/hero1.png",
//     "/hero2.png",
//     "/hero3.png",
//     "/hero1.png",
//     "/hero2.png",
//     "/hero3.png",
//     "/hero1.png",
//   ];

//   return (
//     <>
//       <style jsx global>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeInScale {
//           from {
//             opacity: 0;
//             transform: scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes slideInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-60px) rotateY(25deg);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0) rotateY(15deg);
//           }
//         }

//         @keyframes slideInRight {
//           from {
//             opacity: 0;
//             transform: translateX(60px) rotateY(-25deg);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0) rotateY(-15deg);
//           }
//         }

//         @keyframes slideInCenter {
//           from {
//             opacity: 0;
//             transform: translateY(30px) scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         @keyframes blobFloat1 {
//           0%, 100% {
//             transform: translate(0, 0) scale(1);
//           }
//           50% {
//             transform: translate(30px, -30px) scale(1.1);
//           }
//         }

//         @keyframes blobFloat2 {
//           0%, 100% {
//             transform: translate(0, 0) scale(1);
//           }
//           50% {
//             transform: translate(-20px, 20px) scale(1.15);
//           }
//         }

//         @keyframes blobFloat3 {
//           0%, 100% {
//             transform: translate(0, 0) scale(1);
//           }
//           50% {
//             transform: translate(15px, 25px) scale(1.08);
//           }
//         }

//         @keyframes buttonPulse {
//           0%, 100% {
//             box-shadow: 0 4px 15px rgba(242, 232, 198, 0.3);
//           }
//           50% {
//             box-shadow: 0 6px 25px rgba(242, 232, 198, 0.5);
//           }
//         }

//         .hero-heading {
//           animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards;
//         }

//         .hero-subtitle {
//           animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s backwards;
//         }

//         .hero-button {
//           animation: fadeInScale 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s backwards,
//                      buttonPulse 2s ease-in-out 1.5s infinite;
//           transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .hero-button:hover {
//           transform: translateY(-3px) scale(1.05);
//           box-shadow: 0 10px 30px rgba(242, 232, 198, 0.4);
//         }

//         .hero-button:active {
//           transform: translateY(-1px) scale(1.02);
//         }

//         .image-left {
//           animation: slideInLeft 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s backwards;
//         }

//         .image-center {
//           animation: slideInCenter 1s cubic-bezier(0.16, 1, 0.3, 1) 1s backwards;
//         }

//         .image-right {
//           animation: slideInRight 1s cubic-bezier(0.16, 1, 0.3, 1) 1.2s backwards;
//         }

//         .blob-1 {
//           animation: blobFloat1 8s ease-in-out infinite;
//         }

//         .blob-2 {
//           animation: blobFloat2 10s ease-in-out infinite;
//         }

//         .blob-3 {
//           animation: blobFloat3 12s ease-in-out infinite;
//         }

//         .gallery-container {
//           animation: fadeInScale 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1.4s backwards;
//         }

//         .image-wrapper:hover {
//           transform: scale(1.08) translateZ(20px);
//           z-index: 10;
//         }

//         .image-left:hover {
//           transform: rotateY(20deg) scale(1.05);
//         }

//         .image-right:hover {
//           transform: rotateY(-20deg) scale(1.05);
//         }

//         .text-shimmer {
//           background: linear-gradient(90deg, #fff 0%, #F2E8C6 50%, #fff 100%);
//           background-size: 200% auto;
//           -webkit-background-clip: text;
//           background-clip: text;
//           -webkit-text-fill-color: transparent;
//           animation: shimmer 3s linear infinite;
//         }

//         @keyframes shimmer {
//           to {
//             background-position: 200% center;
//           }
//         }

//         .dome-gallery-wrapper {
//           border-radius: 30px;
//           overflow: hidden;
//           box-shadow: 0 20px 60px rgba(193, 70, 0, 0.3);
//           background: rgba(0, 0, 0, 0.1);
//         }
//       `}</style>

//       <section className="relative px-6 py-20 overflow-hidden min-h-screen flex items-center">
//         {/* BASE BACKGROUND COLOR */}
//         <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#C14600] via-[#D55000] to-[#C14600]" />

//         {/* ANIMATED COLORED BLOBS */}
//         <div className="absolute inset-0 -z-10">
//           <div
//             className="blob-1 absolute w-[500px] h-[500px] top-[-100px] left-[-150px] rounded-full blur-3xl opacity-40"
//             style={{ background: "#C14600" }}
//           />
//           <div
//             className="blob-2 absolute w-[400px] h-[400px] bottom-[-100px] right-[-100px] rounded-full blur-3xl opacity-40"
//             style={{ background: "#F2E8C6" }}
//           />
//           <div
//             className="blob-3 absolute w-[300px] h-[300px] top-[30%] left-[50%] -translate-x-1/2 rounded-full blur-3xl opacity-30"
//             style={{ background: "#FFD700" }}
//           />
//         </div>

//         <div className="container mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* LEFT SIDE - Content */}
//             <div className="text-center lg:text-left space-y-6 relative z-10">
//               {/* Heading with Shimmer Effect */}
//               <h1 className="hero-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
//                 <span className="text-shimmer">Amber Events</span>
//                 <br />
//                 <span className="text-white">Turning Celebrations</span>
//                 <br />
//                 <span className="text-[#F2E8C6]">Into Memories</span>
//               </h1>

//               {/* Subtitle */}
//               <p className="hero-subtitle text-lg md:text-xl text-white/90 max-w-xl mx-auto lg:mx-0">
//                 We design weddings & events filled with joy, elegance, and unforgettable moments.
//               </p>

//               {/* Button */}
//               <div className="flex justify-center lg:justify-start">
//                 <button className="hero-button bg-[#F2E8C6] text-[#C14600] font-bold px-8 py-4 rounded-full shadow-xl hover:bg-[#FFD700] transition-all text-lg">
//                   Plan Your Event
//                 </button>
//               </div>

//               {/* Images with 3D Effect - Mobile/Tablet */}
//               <div className="lg:hidden grid grid-cols-3 gap-4 mt-12">
//                 <div
//                   className="image-wrapper image-left relative w-full h-48 overflow-hidden transition-all duration-500"
//                   style={{ perspective: "1000px" }}
//                 >
//                   <div
//                     className="relative w-full h-full"
//                     style={{
//                       transform: "rotateY(15deg)",
//                       transformOrigin: "left center",
//                       transition: "transform 0.5s ease",
//                     }}
//                   >
//                     <Image
//                       src="/hero1.png"
//                       alt="Event setup 1"
//                       fill
//                       className="object-cover rounded-lg shadow-2xl"
//                     />
//                   </div>
//                 </div>

//                 <div className="image-wrapper image-center relative w-full h-48 overflow-hidden rounded-lg shadow-2xl transition-all duration-500">
//                   <Image
//                     src="/hero2.png"
//                     alt="Event setup 2"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>

//                 <div
//                   className="image-wrapper image-right relative w-full h-48 overflow-hidden transition-all duration-500"
//                   style={{ perspective: "1000px" }}
//                 >
//                   <div
//                     className="relative w-full h-full"
//                     style={{
//                       transform: "rotateY(-15deg)",
//                       transformOrigin: "right center",
//                       transition: "transform 0.5s ease",
//                     }}
//                   >
//                     <Image
//                       src="/hero3.png"
//                       alt="Event setup 3"
//                       fill
//                       className="object-cover rounded-lg shadow-2xl"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT SIDE - Dome Gallery */}
//             <div className="gallery-container hidden lg:block relative h-[600px] w-full">
//               <div className="dome-gallery-wrapper h-full">
//                 <DomeGallery
//                   images={galleryImages}
//                   fit={0.8}
//                   minRadius={650}
//                   maxVerticalRotationDeg={5}
//                   segments={22}
//                   dragDampening={0}
//                   grayscale={false}
//                   imageBorderRadius="20px"
//                   openedImageBorderRadius="30px"
//                   overlayBlurColor="#C14600"
//                   dragSensitivity={20}
//                   enlargeTransitionMs={400}
//                   openedImageWidth="500px"
//                   openedImageHeight="500px"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HeroSection;

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import DomeGallery from "./DomeGallery";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px) rotateY(25deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotateY(15deg);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px) rotateY(-25deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotateY(-15deg);
          }
        }

        @keyframes slideInCenter {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes blobFloat1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -30px) scale(1.1);
          }
        }

        @keyframes blobFloat2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-20px, 20px) scale(1.15);
          }
        }

        @keyframes blobFloat3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(15px, 25px) scale(1.08);
          }
        }

        @keyframes buttonPulse {
          0%, 100% {
            box-shadow: 0 4px 15px rgba(242, 232, 198, 0.3);
          }
          50% {
            box-shadow: 0 6px 25px rgba(242, 232, 198, 0.5);
          }
        }

        .hero-heading {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards;
        }

        .hero-subtitle {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s backwards;
        }

        .hero-button {
          animation: fadeInScale 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s backwards,
                     buttonPulse 2s ease-in-out 1.5s infinite;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 30px rgba(242, 232, 198, 0.4);
        }

        .hero-button:active {
          transform: translateY(-1px) scale(1.02);
        }

        .image-left {
          animation: slideInLeft 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s backwards;
        }

        .image-center {
          animation: slideInCenter 1s cubic-bezier(0.16, 1, 0.3, 1) 1s backwards;
        }

        .image-right {
          animation: slideInRight 1s cubic-bezier(0.16, 1, 0.3, 1) 1.2s backwards;
        }

        .blob-1 {
          animation: blobFloat1 8s ease-in-out infinite;
        }

        .blob-2 {
          animation: blobFloat2 10s ease-in-out infinite;
        }

        .blob-3 {
          animation: blobFloat3 12s ease-in-out infinite;
        }

        .gallery-container {
          animation: fadeInScale 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1.4s backwards;
        }

        .image-wrapper:hover {
          transform: scale(1.08) translateZ(20px);
          z-index: 10;
        }

        .image-left:hover {
          transform: rotateY(20deg) scale(1.05);
        }

        .image-right:hover {
          transform: rotateY(-20deg) scale(1.05);
        }

        .text-shimmer {
          background: linear-gradient(90deg, #fff 0%, #F2E8C6 50%, #fff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }

        @keyframes shimmer {
          to {
            background-position: 200% center;
          }
        }
      `}</style>

      <section className="relative px-6 py-20 overflow-hidden min-h-screen flex items-center">
        {/* BASE BACKGROUND COLOR */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#C14600] via-[#D55000] to-[#C14600]" />

        {/* ANIMATED COLORED BLOBS */}
        <div className="absolute inset-0 -z-10">
          <div
            className="blob-1 absolute w-[500px] h-[500px] top-[-100px] left-[-150px] rounded-full blur-3xl opacity-40"
            style={{ background: "#C14600" }}
          />
          <div
            className="blob-2 absolute w-[400px] h-[400px] bottom-[-100px] right-[-100px] rounded-full blur-3xl opacity-40"
            style={{ background: "#F2E8C6" }}
          />
          <div
            className="blob-3 absolute w-[300px] h-[300px] top-[30%] left-[50%] -translate-x-1/2 rounded-full blur-3xl opacity-30"
            style={{ background: "#FFD700" }}
          />
        </div>

        <div className="container mx-auto max-w-[1600px]">
          <div className="grid lg:grid-cols-[40%_60%] gap-8 items-center">
            {/* LEFT SIDE - Content */}
            <div className="text-center lg:text-left space-y-6 relative z-10">
              {/* Heading with Shimmer Effect */}
              <h1 className="hero-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-shimmer">Amber Events</span>
                <br />
                <span className="text-white">Turning Celebrations</span>
                <br />
                <span className="text-[#F2E8C6]">Into Memories</span>
              </h1>

              {/* Subtitle */}
              <p className="hero-subtitle text-lg md:text-xl text-white/90 max-w-xl mx-auto lg:mx-0">
                We design weddings & events filled with joy, elegance, and unforgettable moments.
              </p>

              {/* Button */}
              <div className="flex justify-center lg:justify-start">
                <button className="hero-button bg-[#F2E8C6] text-[#C14600] font-bold px-8 py-4 rounded-full shadow-xl hover:bg-[#FFD700] transition-all text-lg">
                  Plan Your Event
                </button>
              </div>

              {/* Images with 3D Effect - Mobile/Tablet */}
              <div className="lg:hidden grid grid-cols-3 gap-4 mt-12">
                {/* Left Tilted Image */}
                <div
                  className="image-wrapper image-left relative w-full h-48 overflow-hidden transition-all duration-500"
                  style={{ perspective: "1000px" }}
                >
                  <div
                    className="relative w-full h-full"
                    style={{
                      transform: "rotateY(15deg)",
                      transformOrigin: "left center",
                      transition: "transform 0.5s ease",
                    }}
                  >
                    <Image
                      src="/hero1.png"
                      alt="Event setup 1"
                      fill
                      className="object-cover rounded-lg shadow-2xl"
                    />
                  </div>
                </div>

                {/* Center Image (Straight) */}
                <div className="image-wrapper image-center relative w-full h-48 overflow-hidden rounded-lg shadow-2xl transition-all duration-500">
                  <Image
                    src="/hero2.png"
                    alt="Event setup 2"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right Tilted Image */}
                <div
                  className="image-wrapper image-right relative w-full h-48 overflow-hidden transition-all duration-500"
                  style={{ perspective: "1000px" }}
                >
                  <div
                    className="relative w-full h-full"
                    style={{
                      transform: "rotateY(-15deg)",
                      transformOrigin: "right center",
                      transition: "transform 0.5s ease",
                    }}
                  >
                    <Image
                      src="/hero3.png"
                      alt="Event setup 3"
                      fill
                      className="object-cover rounded-lg shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Dome Gallery */}
            <div className="gallery-container hidden lg:block relative h-[700px] w-full">
              <DomeGallery
                images={[
                  '/hero1.png',
                  '/gallery-1.png',
                  '/hero2.png',
                  '/gallery-2.png',
                  '/hero3.png',
                  '/gallery-3.png',
                  'portfolio1.png',
                  'portfolio3.png',
                  '/gallery-4.png',
                  
                ]}
                fit={0.8}
                minRadius={500}
                maxVerticalRotationDeg={5}
                segments={22}
                dragDampening={0}
                grayscale={false}
                imageBorderRadius="20px"
                openedImageBorderRadius="30px"
                overlayBlurColor="rgba(193, 70, 0, 0)"
                autoRotate={true}
                autoRotateSpeed={0.3}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
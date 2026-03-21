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

// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import DomeGallery from "./DomeGallery";

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

//         <div className="container mx-auto max-w-[1600px]">
//           <div className="grid lg:grid-cols-[40%_60%] gap-8 items-center">
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
//             <div className="gallery-container hidden lg:block relative h-[700px] w-full">
//               <DomeGallery
//                 images={[
//                   '/hero1.png',
//                   '/gallery-1.png',
//                   '/hero2.png',
//                   '/gallery-2.png',
//                   '/hero3.png',
//                   '/gallery-3.png',
//                   'portfolio1.png',
//                   'portfolio3.png',
//                   '/gallery-4.png',
                  
//                 ]}
//                 fit={0.8}
//                 minRadius={500}
//                 maxVerticalRotationDeg={5}
//                 segments={22}
//                 dragDampening={0}
//                 grayscale={false}
//                 imageBorderRadius="20px"
//                 openedImageBorderRadius="30px"
//                 overlayBlurColor="rgba(193, 70, 0, 0)"
//                 autoRotate={true}
//                 autoRotateSpeed={0.3}
//               />
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
// import dynamic from "next/dynamic";

// // Dynamically import to avoid SSR issues
// const DomeGallery = dynamic(() => import("./DomeGallery"), { ssr: false });
// const CircularGallery = dynamic(() => import("./CircularGallery"), { ssr: false });

// const HeroSection = () => {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     setTimeout(() => setLoaded(true), 100);
//   }, []);

//   // Same images in same sequence as DomeGallery
//   const galleryImages = [
//     { image: '/hero1.png', text: 'Elegant Events' },
//     { image: '/gallery-1.png', text: 'Beautiful Venues' },
//     { image: '/hero2.png', text: 'Perfect Moments' },
//     { image: '/gallery-2.png', text: 'Stunning Decor' },
//     { image: '/hero3.png', text: 'Dream Weddings' },
//     { image: '/gallery-3.png', text: 'Magical Celebrations' },
//     { image: '/portfolio1.png', text: 'Unforgettable' },
//     { image: '/portfolio3.png', text: 'Pure Joy' },
//     { image: '/gallery-4.png', text: 'Timeless Beauty' },
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

//         @keyframes shimmer {
//           to {
//             background-position: 200% center;
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

//         .circular-gallery-mobile {
//           animation: fadeInScale 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s backwards;
//         }

//         .text-shimmer {
//           background: linear-gradient(90deg, #fff 0%, #F2E8C6 50%, #fff 100%);
//           background-size: 200% auto;
//           -webkit-background-clip: text;
//           background-clip: text;
//           -webkit-text-fill-color: transparent;
//           animation: shimmer 3s linear infinite;
//         }
//       `}</style>

//       <section className="relative px-6 py-20 overflow-hidden min-h-screen flex items-center">
//         {/* BASE BACKGROUND COLOR */}
//         <div className="absolute inset-0 -z-10 bg-gradient-to-br bg-white" />

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

//         <div className="container mx-auto max-w-[1600px]">
//           <div className="grid lg:grid-cols-[40%_60%] gap-8 items-center">
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

//               {/* Circular Gallery - Mobile/Tablet ONLY (replaces 3 tilted images) */}
//               <div className="lg:hidden circular-gallery-mobile mt-12">
//                 <div className="w-full h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden">
//                   <CircularGallery
//                     items={galleryImages}
//                     bend={-2}
//                     textColor="#F2E8C6"
//                     borderRadius={0.05}
//                     font="bold 28px sans-serif"
//                     scrollSpeed={1}
//                     scrollEase={0.1}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT SIDE - Dome Gallery (Desktop ONLY) */}
//             <div className="gallery-container hidden lg:block relative h-[700px] w-full">
//               <DomeGallery
//                 images={galleryImages.map(item => item.image)}
//                 fit={0.8}
//                 minRadius={500}
//                 maxVerticalRotationDeg={5}
//                 segments={22}
//                 dragDampening={0}
//                 grayscale={false}
//                 imageBorderRadius="20px"
//                 openedImageBorderRadius="30px"
//                 overlayBlurColor="rgba(193, 70, 0, 0)"
//                 autoRotate={true}
//                 autoRotateSpeed={0.3}
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HeroSection;




"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Background zoom-in
      tl.fromTo(
        bgRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 1.8, ease: "power2.out" },
        0
      );

      // Decorative circles
      tl.fromTo(
        decorRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.6)" },
        0.3
      );

      // Headline split text animation
      if (headlineRef.current) {
        const split = new SplitText(headlineRef.current, {
          type: "words,chars",
        });
        tl.fromTo(
          split.chars,
          { y: 80, opacity: 0, rotateX: -40, filter: "blur(4px)" },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            filter: "blur(0px)",
            stagger: 0.018,
            duration: 0.7,
            ease: "power3.out",
          },
          0.4
        );
      }

      // Subtitle fade up
      tl.fromTo(
        subRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        1.0
      );

      // Button pop
      tl.fromTo(
        btnRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)" },
        1.2
      );

      // Hero image slide + clip
      tl.fromTo(
        imageWrapRef.current,
        {
          x: 80,
          opacity: 0,
          clipPath: "inset(0 100% 0 0)",
        },
        {
          x: 0,
          opacity: 1,
          clipPath: "inset(0 0% 0 0)",
          duration: 1.2,
          ease: "power4.out",
        },
        0.5
      );

      // Parallax on scroll
      gsap.to(imageWrapRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(headlineRef.current, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      // Floating blobs animation
      gsap.to(".blob-1", {
        x: 30,
        y: -20,
        repeat: -1,
        yoyo: true,
        duration: 5,
        ease: "sine.inOut",
      });
      gsap.to(".blob-2", {
        x: -20,
        y: 30,
        repeat: -1,
        yoyo: true,
        duration: 7,
        ease: "sine.inOut",
        delay: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FF2D78 0%, #FF5CA0 50%, #FF2D78 100%)" }}
    >
      {/* Animated background layer */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "256px 256px",
          }}
        />
        {/* Radial highlight */}
        <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-white/10 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-pink-900/20 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4" />
      </div>

      {/* Decorative blobs */}
      <div ref={decorRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="blob-1 absolute top-20 left-[8%] w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20" />
        <div className="blob-2 absolute bottom-32 left-[15%] w-8 h-8 rounded-full bg-white/15 border border-white/20" />
        <div className="blob-1 absolute top-[40%] left-[38%] w-5 h-5 rounded-full bg-white/20" />
        <div className="blob-2 absolute top-[20%] left-[55%] w-3 h-3 rounded-full bg-white/30" />

        {/* Large circle ring */}
        <div className="absolute -bottom-20 -left-20 w-[380px] h-[380px] rounded-full border border-white/10" />
        <div className="absolute -bottom-10 -left-10 w-[280px] h-[280px] rounded-full border border-white/08" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-2 items-center gap-8 pt-20 pb-12 min-h-screen">
        {/* Left: Text */}
        <div className="flex flex-col justify-center">
          <div className="overflow-hidden mb-2">
            <span
              className="inline-block text-white/70 text-sm tracking-[0.25em] uppercase font-medium mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              ✦ Premium Event Planning
            </span>
          </div>

          <h1
            ref={headlineRef}
            className="text-5xl md:text-6xl xl:text-[72px] leading-[1.0] font-bold text-white mb-6"
            style={{ perspective: "800px" }}
          >
            <span
              className="block font-extrabold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Amber Events
            </span>
            <span
              className="block text-white/90"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              &ndash;{" "}
              <em
                className="italic font-normal"
                style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.15em" }}
              >
                Turning
              </em>
            </span>
            <span
              className="block"
              style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.1em", fontWeight: 400 }}
            >
              Celebrations Into Memories
            </span>
          </h1>

          <p
            ref={subRef}
            className="text-white/80 text-base md:text-lg max-w-md leading-relaxed mb-10"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            We design weddings &amp; events filled with joy, elegance, and
            unforgettable moments.
          </p>

          <div className="flex items-center gap-4">
            <button
              ref={btnRef}
              className="group relative px-8 py-4 bg-white text-pink-600 font-semibold rounded-full text-[15px] tracking-wide overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-pink-900/30 hover:scale-105 active:scale-100"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {/* Hover fill effect */}
              <span className="absolute inset-0 bg-pink-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
              <span className="relative z-10 flex items-center gap-2">
                Plan Your Event
                <svg
                  className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>

            {/* Stats badge */}
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-5 py-3">
              <div className="text-center">
                <div className="text-white font-bold text-lg leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>500+</div>
                <div className="text-white/70 text-xs mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>Events</div>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="text-center">
                <div className="text-white font-bold text-lg leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>98%</div>
                <div className="text-white/70 text-xs mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>Happy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="relative flex justify-end items-center">
          <div
            ref={imageWrapRef}
            className="relative w-full max-w-[480px] ml-auto"
          >
            {/* Image card with rounded corners */}
            <div className="relative rounded-[28px] overflow-hidden shadow-2xl shadow-pink-900/40">
              <Image
                src="/hero-image.png"
                alt="Amber Events - Wedding Couple"
                width={480}
                height={580}
                className="w-full h-auto object-cover block"
                priority
              />
              {/* Subtle gradient over image bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-pink-700/40 to-transparent pointer-events-none" />
            </div>

            {/* Floating badge: Top */}
            <div className="absolute -top-0 -left-0 bg-white rounded-2xl px-4 py-3 shadow-xl shadow-pink-900/20 flex items-center gap-2">
              <span className="text-xl">✨</span>
              <div>
                <div className="text-pink-600 font-bold text-sm leading-none" style={{ fontFamily: "'DM Sans', sans-serif" }}>Premium</div>
                <div className="text-gray-500 text-xs mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>Planning</div>
              </div>
            </div>

            {/* Floating badge: Bottom */}
            <div className="absolute -bottom-0 -right-0 bg-white rounded-2xl px-4 py-3 shadow-xl shadow-pink-900/20">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-gray-600 text-xs font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>5.0 Rating</div>
            </div>

            {/* Decorative ring behind image */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-full h-full rounded-[28px] border-2 border-white/20" />
            <div className="absolute -z-10 -bottom-14 -right-14 w-full h-full rounded-[28px] border border-white/10" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/60 text-xs tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
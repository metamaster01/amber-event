"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
  }, [])

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedImage])

  const galleryImages = [
    {
      src: "/gallery-1.png",
      alt: "Beautiful wedding setup with floral arch",
      title: "Floral Paradise",
    },
    {
      src: "/gallery-2.png",
      alt: "Elegant decor details",
      title: "Elegant Details",
    },
    {
      src: "/gallery-3.png",
      alt: "Stunning tent decoration",
      title: "Dreamy Tents",
    },
    {
      src: "/gallery-4.png",
      alt: "Grand ceremony setup",
      title: "Grand Celebrations",
    },
  ]

  const handleImageClick = (index: number) => {
    setSelectedImage(index)
  }

  const handleClose = () => {
    setSelectedImage(null)
  }

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === "Escape") handleClose()
        if (e.key === "ArrowLeft") handlePrevious()
        if (e.key === "ArrowRight") handleNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage])

  return (
    <>
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes modalFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modalImageScale {
          from {
            opacity: 0;
            transform: scale(0.7) translateY(30px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .gallery-heading {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards;
        }

        .gallery-subtitle {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s backwards;
        }

        .gallery-item-1 {
          animation: slideInLeft 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s backwards;
        }

        .gallery-item-2 {
          animation: fadeInScale 1s cubic-bezier(0.16, 1, 0.3, 1) 0.7s backwards;
        }

        .gallery-item-3 {
          animation: fadeInScale 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s backwards;
        }

        .gallery-item-4 {
          animation: slideInRight 1s cubic-bezier(0.16, 1, 0.3, 1) 0.9s backwards;
        }

        .gallery-image-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        }

        .gallery-image-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(193, 70, 0, 0.1) 0%,
            rgba(242, 232, 198, 0.1) 100%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 1;
        }

        .gallery-image-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at center,
            transparent 0%,
            rgba(0, 0, 0, 0.3) 100%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 1;
        }

        .gallery-image-wrapper:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 20px 60px rgba(193, 70, 0, 0.3),
                      0 0 40px rgba(255, 215, 0, 0.2);
        }

        .gallery-image-wrapper:hover::before {
          opacity: 1;
        }

        .gallery-image-wrapper:hover::after {
          opacity: 0.5;
        }

        .gallery-image-wrapper:hover .gallery-image {
          transform: scale(1.1);
        }

        .gallery-image-wrapper:hover .gallery-overlay {
          opacity: 1;
          transform: translateY(0);
        }

        .gallery-image {
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8) 0%,
            transparent 100%
          );
          padding: 24px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 2;
        }

        .modal-backdrop {
          animation: modalFadeIn 0.3s ease-out;
          backdrop-filter: blur(20px);
        }

        .modal-content {
          animation: modalImageScale 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .text-shimmer {
          background: linear-gradient(90deg, #C14600 0%, #FFD700 50%, #C14600 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }

        @media (max-width: 768px) {
          .gallery-image-wrapper:hover {
            transform: translateY(-8px) scale(1.01);
          }
        }
      `}</style>

      <section className="relative py-20 px-6 bg-gradient-to-br from-[#f8f2df] via-[#f8f4ed] to-[#fffefc] overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute w-[400px] h-[400px] top-[10%] left-[-150px] rounded-full blur-3xl opacity-20"
            style={{ background: "#C14600" }}
          />
          <div
            className="absolute w-[500px] h-[500px] bottom-[-100px] right-[-200px] rounded-full blur-3xl opacity-20"
            style={{ background: "#FFD700" }}
          />
        </div>

        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="gallery-heading text-5xl md:text-6xl lg:text-7xl font-bold text-[#C14600]">
              Our <span className="text-shimmer">Gallery</span>
            </h2>
            <p className="gallery-subtitle text-xl md:text-2xl text-[#8B3000] max-w-3xl mx-auto">
              Witness the magic we create through stunning visuals of our unforgettable events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Top Row */}
            <div className="grid grid-cols-1 md:col-span-2 md:grid-cols-5 gap-6 lg:gap-8">
              {/* Image 1 - Large Landscape (Top Left - 60% width) */}
              <div className="gallery-item-1 gallery-image-wrapper md:col-span-3" onClick={() => handleImageClick(0)}>
                <div className="relative w-full h-[350px] md:h-[400px] lg:h-[450px]">
                  <Image
                    src={galleryImages[0].src || "/placeholder.svg"}
                    alt={galleryImages[0].alt}
                    fill
                    className="gallery-image object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority
                  />
                </div>
                <div className="gallery-overlay">
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">{galleryImages[0].title}</h3>
                  <p className="text-white/80 text-sm md:text-base">Click to view full size</p>
                </div>
              </div>

              {/* Image 2 - Medium Portrait (Top Right - 40% width) */}
              <div className="gallery-item-2 gallery-image-wrapper md:col-span-2" onClick={() => handleImageClick(1)}>
                <div className="relative w-full h-[350px] md:h-[400px] lg:h-[450px]">
                  <Image
                    src={galleryImages[1].src || "/placeholder.svg"}
                    alt={galleryImages[1].alt}
                    fill
                    className="gallery-image object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                  />
                </div>
                <div className="gallery-overlay">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2">{galleryImages[1].title}</h3>
                  <p className="text-white/80 text-sm">Click to view full size</p>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:col-span-2 md:grid-cols-5 gap-6 lg:gap-8">
              {/* Image 3 - Medium Square (Bottom Left - 40% width) */}
              <div className="gallery-item-3 gallery-image-wrapper md:col-span-2" onClick={() => handleImageClick(2)}>
                <div className="relative w-full h-[350px] md:h-[380px] lg:h-[420px]">
                  <Image
                    src={galleryImages[2].src || "/placeholder.svg"}
                    alt={galleryImages[2].alt}
                    fill
                    className="gallery-image object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <div className="gallery-overlay">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2">{galleryImages[2].title}</h3>
                  <p className="text-white/80 text-sm">Click to view full size</p>
                </div>
              </div>

              {/* Image 4 - Large Landscape (Bottom Right - 60% width) */}
              <div className="gallery-item-4 gallery-image-wrapper md:col-span-3" onClick={() => handleImageClick(3)}>
                <div className="relative w-full h-[350px] md:h-[380px] lg:h-[420px]">
                  <Image
                    src={galleryImages[3].src || "/placeholder.svg"}
                    alt={galleryImages[3].alt}
                    fill
                    className="gallery-image object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                </div>
                <div className="gallery-overlay">
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">{galleryImages[3].title}</h3>
                  <p className="text-white/80 text-sm md:text-base">Click to view full size</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal/Lightbox */}
        {selectedImage !== null && (
          <div
            className="modal-backdrop fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              aria-label="Close gallery"
            >
              <X size={28} />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePrevious()
              }}
              className="absolute left-4 md:left-8 z-50 bg-white/10 hover:bg-white/20 text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              className="absolute right-4 md:right-8 z-50 bg-white/10 hover:bg-white/20 text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            {/* Image Container */}
            <div className="modal-content relative max-w-7xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-full h-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={galleryImages[selectedImage].src || "/placeholder.svg"}
                    alt={galleryImages[selectedImage].alt}
                    width={1200}
                    height={900}
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>

              {/* Image Info */}
              <div className="mt-6 text-center">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">{galleryImages[selectedImage].title}</h3>
                <p className="text-white/70 text-sm md:text-base">
                  {selectedImage + 1} / {galleryImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default GallerySection

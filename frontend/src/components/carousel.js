import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"; // ✅ import navigation
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
  const navigate = useNavigate(); // ✅ navigation hook

  const images = [
    "carousel1.jpg",
    "https://picsum.photos/id/1015/1920/1080",
    "carousel2.jpg",
    "https://picsum.photos/id/1022/1920/1080",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slider Images */}
      <Slider {...settings} className="w-full h-full">
        {images.map((img, idx) => (
          <div key={idx} className="w-full h-screen">
            <img
              src={img}
              alt={`slide-${idx}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Fixed Text Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
          Adventure is worthwhile
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Discover new places with us, Adventure awaits
        </p>
        <button
          onClick={() => navigate("/destinations")} // ✅ go to destinations page
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
        >
          Discover More
        </button>
      </div>

      {/* Custom Arrow Styling */}
      <style jsx global>{`
        .slick-prev {
          z-index: 20;
          width: 50px;
          height: 50px;
          padding-left: 20px;
        }
        .slick-next {
          z-index: 20;
          width: 50px;
          height: 50px;
          padding-right: 60px;
        }
        .slick-prev:before,
        .slick-next:before {
          font-size: 40px;
          color: white; /* ✅ visible on images */
        }
      `}</style>
    </div>
  );
};

export default HeroCarousel;

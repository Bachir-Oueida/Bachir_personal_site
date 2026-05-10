
'use client';

// import { useState, useEffect, useRef } from 'react';
import '../styles/banner.css';

export default function Banner() {
  // Animation / carousel temporarily disabled
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const [isAnimating, setIsAnimating] = useState(false);

  const bannerContent = {
    mainText: "Los Angeles' Premier Luxury Real Estate Advisor",
    description: "Where Extraordinary Properties Meet Exceptional Representation.",
    buttonText: "View Exclusive Properties",
    buttonLink: "/properties",
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsAnimating(false);
  //     setTimeout(() => {
  //       setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
  //       setIsAnimating(false);
  //     }, 800);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [bannerContent.length]);

  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0 w-full h-[100vh]">
        <div className="relative w-full h-full overflow-hidden">
          <video
            src="/videos/bg-video.mp4"
            autoPlay
            loop
            muted
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[100%] min-h-[100%] w-auto h-[100vh] object-cover"
          />
          <div className="absolute inset-0 bg-black/30 z-10"></div>
        </div>
      </div>

      {/* Banner content — stacked, equal spacing (gap) */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <div className="banner-content-wrapper flex flex-col items-center gap-8 max-w-7xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider">
            {bannerContent.mainText}
          </h1>
          <p className="text-lg md:text-xl italic leading-relaxed max-w-2xl">
            {bannerContent.description}
          </p>
          <a
            href={bannerContent.buttonLink}
            className="bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-medium tracking-wide uppercase hover:bg-white hover:text-black"
          >
            {bannerContent.buttonText}
          </a>
        </div>
      </div>

      {/* Previous animated markup (disabled):
          - topText row with isAnimating transitions, animate-pulse
          - main/description/button with transition-all, animate-text-glow, animate-fade-in, animate-bounce-slow
      */}
    </div>
  );
}

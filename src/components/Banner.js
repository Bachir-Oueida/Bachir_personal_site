
'use client';

import { useState, useEffect, useRef } from 'react';
import '../styles/banner.css';

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Content for the three different slides
  const bannerContent = [
    {
      topText: "EXCEPTIONAL",
      mainText: "REPRESENTATION",
      description: "Find your Dream Home. Douglas Elliman Real Estate.",
      buttonText: "View Exclusive Properties"
    },
    {
      topText: "LUXURY",
      mainText: "LIFESTYLE",
      description: "Experience the finest in Beverly Hills luxury living with personalized service.",
      buttonText: "Explore Properties"
    },
    {
      topText: "PREMIUM",
      mainText: "SERVICE",
      description: "Dedicated to excellence in every real estate transaction and client relationship.",
      buttonText: "Contact Us Today"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
        setIsAnimating(false);
      }, 800); // Animation duration
      
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentContent = bannerContent[currentSlide];

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
          {/* Overlay to darken the video */}
          <div className="absolute inset-0 bg-black/30 z-10"></div>
        </div>
      </div>

      {/* Banner content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <div className="banner-content-wrapper">
          {/* Top small text */}
          <div className={`mb-4 transition-all duration-700 ease-out ${
            isAnimating 
              ? 'opacity-0 transform -translate-y-12 scale-90' 
              : 'opacity-100 transform translate-y-0 scale-100'
          }`} style={{ transitionDelay: isAnimating ? '0ms' : '200ms' }}>
            <p className="text-lg md:text-xl font-light tracking-widest uppercase animate-pulse">
              {currentContent.topText}
            </p>
          </div>
          
          {/* Large main text */}
          <div className={`mb-5 transition-all duration-800 ease-out ${
            isAnimating 
              ? 'opacity-0 transform translate-x-16 rotate-3 scale-110' 
              : 'opacity-100 transform translate-x-0 rotate-0 scale-100'
          }`} style={{ transitionDelay: isAnimating ? '100ms' : '400ms' }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider animate-text-glow">
              {currentContent.mainText}
            </h1>
          </div>
          
          {/* Description */}
          <div className={`mb-5 max-w-2xl transition-all duration-700 ease-out ${
            isAnimating 
              ? 'opacity-0 transform translate-y-12 scale-95' 
              : 'opacity-100 transform translate-y-0 scale-100'
          }`} style={{ transitionDelay: isAnimating ? '200ms' : '600ms' }}>
            <p className="text-lg md:text-xl f-italic leading-relaxed animate-fade-in">
              {currentContent.description}
            </p>
          </div>
          
          {/* Button */}
          <div className={`transition-all duration-900 ease-out ${
            isAnimating 
              ? 'opacity-0 transform -translate-x-20 rotate-6 scale-75' 
              : 'opacity-100 transform translate-x-0 rotate-0 scale-100'
          }`} style={{ transitionDelay: isAnimating ? '300ms' : '800ms' }}>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-medium tracking-wide uppercase hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 animate-bounce-slow">
              {currentContent.buttonText}
            </button>
          </div>
        </div>

        {/* Slide indicators */}
        {/* <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {bannerContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}
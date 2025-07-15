'use client';

import { useState, useEffect, useRef } from 'react';
// import video from '../../public/videos/bg-video.mp4';

export default function Banner() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      {/* YouTube video background */}
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
          {/* <div className="absolute inset-0 bg-white/70 z-10"></div> */}
        </div>
      </div>

      {/* Banner content */}
      {/* <div className="relative z-20 flex flex-col items-center justify-center h-full text-gray-800 text-center px-4">
        <div className="relative mb-8">
          <img 
            src="/ribbon.svg" 
            alt="Coming Soon" 
            className="w-[300px] md:w-[400px] h-auto transform rotate-0 filter drop-shadow-lg"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Dream Home</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">Discover the perfect property that matches your lifestyle</p>
        <div className="flex flex-col sm:flex-row gap-4">
        </div>
      </div> */}
    </div>
  );
}
'use client';

import { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';

export default function Banner() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  
  const videoRef = useRef(null);

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
  
  // Ensure video keeps playing
  useEffect(() => {
    if (videoRef.current) {
      // Try to play the video if it's paused
      const interval = setInterval(() => {
        if (videoRef.current && videoRef.current.getPlayerState && videoRef.current.getPlayerState() !== 1) {
          videoRef.current.playVideo();
        }
      }, 5000); // Check every 5 seconds
      
      return () => clearInterval(interval);
    }
  }, [videoRef.current]);

  // YouTube video options
  const videoId = 'oALbPaPlGcE'; // Define videoId in one place for consistency
  
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      mute: 1,
      controls: 0,
      showinfo: 0,
      rel: 0,
      loop: 1,
      modestbranding: 1,
      playlist: videoId, // Must match videoId for looping to work
      playsinline: 1, // Better mobile experience
      disablekb: 1, // Disable keyboard controls
      fs: 0, // Disable fullscreen button
      iv_load_policy: 3, // Hide video annotations
    },
  };

  const onReady = (event) => {
    // Store the player reference
    videoRef.current = event.target;
    // Play the video
    event.target.playVideo();
  };

  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      {/* YouTube video background */}
      <div className="absolute inset-0 z-0 w-full h-[100vh]">
        <div className="relative w-full h-full overflow-hidden">
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={onReady}
            onEnd={(event) => event.target.playVideo()} // Ensure video replays when it ends
            onPause={(event) => event.target.playVideo()} // Resume if paused
            onError={(event) => event.target.playVideo()} // Try to recover from errors
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[100%] min-h-[100%] w-auto h-[100vh] object-cover"
          />
          {/* Overlay to darken the video */}
          <div className="absolute inset-0 bg-white/70 z-10"></div>
        </div>
      </div>

      {/* Banner content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-gray-800 text-center px-4">
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
          {/* <button className="bg-red-600 text-white hover:bg-red-700 px-8 py-3 rounded-full font-medium text-lg transition-colors">
            Browse Properties
          </button>
          <button className="bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600/10 px-8 py-3 rounded-full font-medium text-lg transition-colors">
            Contact Agent
          </button> */}
        </div>
      </div>
    </div>
  );
}
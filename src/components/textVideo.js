'use client';

import "../styles/textVideo.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function TextVideo() {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.2 });
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [videoRef, videoVisible] = useScrollAnimation({ threshold: 0.3 });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <div 
      ref={sectionRef}
      className="text-video-section"
    >
      <div 
        ref={titleRef}
        className={`text-video-header slide-in-down ${titleVisible ? 'animate' : ''}`}
      >
        <h2>The Century</h2>
      </div>
      
      <div className="text-video-container">
        <div 
          ref={videoRef}
          className={`text-video-video ${videoVisible ? 'animate' : ''}`}
        >
          <video 
            src="/videos/century-video.mp4" 
            controls 
            poster="/images/bg-century.png"
            className="video-player"
            autoPlay
            loop
            muted
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div 
          ref={contentRef}
          className={`text-video-content ${contentVisible ? 'animate' : ''}`}
        >
          {/* <div className="text-video-badge">
            THE CENTURY
          </div> */}
          <p className="text-video-description">
            The Century, a 42-story masterpiece designed by world-renowned Robert A.M. Stern Architects, provides a new reality from 
            its perch atop the tallest building in Western Los Angeles. Soaring above Century City&apos;s premier locale, the tower offers 
            sweeping vistas of downtown Los Angeles across the Santa Monica Mountains to the Pacific Ocean. The Century&apos;s living. 
            Chef Concierge is an exclusive member of the internationally renowned Les Clefs d&apos;Or Organization. The building residents 
            and business expressed timeless West Coast elegance and contemporary international refinement. The Century&apos;s Penthouse 
            residences feature open floor plan design and private outdoor space.
          </p>
        </div>
      </div>
    </div>
  );
}
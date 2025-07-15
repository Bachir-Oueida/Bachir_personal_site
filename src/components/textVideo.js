import "../styles/textVideo.css";

export default function TextVideo() {
  return (
    <div className="text-video-section">
      <div className="text-video-container">
        <div className="text-video-video">
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
        <div className="text-video-content">
          <div className="text-video-badge">
            THE CENTURY
          </div>
          <p className="text-video-description">
            The Century, a 42-story masterpiece designed by world-renowned Robert A.M. Stern Architects, provides a new reality from 
            its perch atop the tallest building in Western Los Angeles. Soaring above Century City's premier locale, the tower offers 
            sweeping vistas of downtown Los Angeles across the Santa Monica Mountains to the Pacific Ocean. The Century's living. 
            Chef Concierge is an exclusive member of the internationally renowned Les Clefs d'Or Organization. The building residents 
            and business expressed timeless West Coast elegance and contemporary international refinement. The Century's Penthouse 
            Collection Interior architecture, curated by interior design luminary Rose Tarlow, captures the refined aesthetic of 
            Century has been grounded in timeless excellence by the U.S. Green Building Council.
          </p>
        </div>
      </div>
    </div>
  );
}
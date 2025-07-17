"use client";

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/highRiseSlider.css";
import image1 from "../../public/images/highrises1.jpg";
import image2 from "../../public/images/highrises2.jpg";
import image3 from "../../public/images/highrises3.jpg";
import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Dynamically import the Slider component
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function HighRiseSlider() {
  const [containerRef, containerVisible] = useScrollAnimation({ 
    threshold: 0.1, 
    rootMargin: '0px 0px -50px 0px' 
  });
  const [titleRef, titleVisible] = useScrollAnimation({ 
    threshold: 0.2, 
    rootMargin: '0px 0px -100px 0px' 
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // nextArrow: <div className="slick-arrow slick-next"></div>,
    // prevArrow: <div className="slick-arrow slick-prev"></div>,
  };

  return (
    <div 
      ref={containerRef}
      className={`high-rise-slider-container slider-container mb-20 fade-in ${containerVisible ? 'animate' : ''}`}
    >
      <div 
        ref={titleRef}
        className={`slider-title text-center slide-in-down ${titleVisible ? 'animate' : ''}`}
      >
        <h2 className="text-black">High Rises</h2>
      </div>
      <div className="slider mt-10">
        <Slider {...settings} className="slider">
        <div className="slide">
          <div className="slide-content">
            <div className="slide-image-container">
              <Image src={image1} alt="Slide Image" className="slide-image" />
            </div>
            <div className="slide-text">
              <h2 className="text-black">The Avery</h2>
              <h5 className="text-black">
                Located in San Francisco in close proximity to the offices of
                some of the biggest companies in the world.
              </h5>
              <p className="text-black text-justify pr-10">
                Unparalleled luxury with sculpted glass exterior designed by
                world renowned architecture firm DMA, and contemporary and
                expansive design by Clodagh Design – floor to ceiling windows
                that take in panoramic views of San Francisco Bay and the city
                skyline. Amenities include a 60- foot lap pool, an equinox
                curated fitness center and yoga room, outdoor terrace and
                barbecue and valet parking with electronic docking station.
              </p>
              <button className="slide-button global-btn">Learn More</button>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="slide-content">
            <div className="slide-image-container">
              <Image src={image2} alt="Slide Image" className="slide-image" />
            </div>
            <div className="slide-text">
              <h2 className="text-black">Royal Atlantis</h2>
              <h5 className="text-black">Exclusive beach homes in Dubai</h5>
              <p className="text-black text-justify pr-10">
                Introducing the most exclusive beach homes and apartments Dubai
                has to offer. Each home includes the height of interior design,
                creating a haven of space and joy for every Resident.
              </p>
              <p className="text-black text-justify pr-10">
                The Royal Atlantis Residences are destined to become a
                world-renowned address. These contemporary living spaces feature
                architecture from the finest designers, as well as uninterrupted
                sights of the Dubai skyline and astonishing ocean views.
              </p>
              <button className="slide-button global-btn">Learn More</button>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="slide-content">
            <div className="slide-image-container">
              <Image src={image3} alt="Slide Image" className="slide-image" />
            </div>
            <div className="slide-text">
              <h2 className="text-black">
              The Century
              </h2>
              <h5 className="text-black">2 BR | 3 BA.</h5>
              <p className="text-black text-justify pr-10">
              An elliptical masterpiece designed by world-renowned Robert A.M. Stern Architects ascends 42 stories into the skies of Century City. The Century boasts panoramic views stretching from downtown, to across the Santa Monica Mountains and the Pacific Ocean. Within this private four-acre enclave of lush gardens, calming water features with soaring mature pines, residences of unprecedented scale define the evolution of estate living. Every conceivable detail has been carefully thought through in creating true West Coast elegance. It is a lifestyle never before realized in Los Angeles.
              </p>
              <button className="slide-button global-btn">Learn More</button>
            </div>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  </div>
  );
}

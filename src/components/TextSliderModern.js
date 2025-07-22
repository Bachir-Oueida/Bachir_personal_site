"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "../styles/textSliderModern.css";

// Import images
import image1 from "../../public/images/slider1.jpg";
import image2 from "../../public/images/slider2.jpg";
import image3 from "../../public/images/slider3.jpeg";

// Dynamically import the Slider component
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const propertyData = [
  {
    id: 1,
    image: image1,
    address: "635 PERUGIA WAY, BEL AIR",
    location: "CA 90077",
    bedrooms: 5,
    bathrooms: 7,
    price: "$12,500,000",
    area: "8,500",
    status: "For Sale",
    description: "This traditional designed home is situated on a Cul-de-sac in prime lower Bel Air overlooking the Bel Air Country Club Golf Course and on a clear day you can see the ocean. There is a newer state-of-the-art eat in kitchen, with center island, cozy dining room with fireplace, sun filled living room with fireplace, large family room with fireplace and paneled den/library with fireplace.",
    features: ["Golf Course Views", "Ocean Views", "State-of-the-Art Kitchen", "Multiple Fireplaces", "Premium Location"]
  },
  {
    id: 2,
    image: image2,
    address: "1518 BEL AIR RD",
    location: "LOS ANGELES, CA 90077",
    bedrooms: 6,
    bathrooms: 8,
    price: "$18,750,000",
    area: "9,310",
    status: "For Sale",
    description: "The absolute ultimate in glamorous contemporary living. A true timeless masterpiece featuring the latest in technology and materials and infused with Old World class and spectacular magic. Completely remodeled and completed in 2014. A state-of-the-art open floor plan with grand open kitchen/family room and breakfast nook seating for 10.",
    features: ["Contemporary Design", "Latest Technology", "Remodeled 2014", "Open Floor Plan", "Grand Kitchen"]
  },
  {
    id: 3,
    image: image3,
    address: "1 W CENTURY DRIVE, 14D",
    location: "WESTWOOD / CENTURY CITY, CA",
    bedrooms: 2,
    bathrooms: 3,
    price: "$2,850,000",
    area: "2,100",
    status: "For Sale",
    description: "This is a beautiful two bedroom, three bath, unit with an open gourmet kitchen and stunning panoramic views. This residence features a private elevator lobby, fireplaces, generous terraces. One of the most sought after buildings in Los Angeles/Century City. Designed by Robert A.M Stern.",
    features: ["Panoramic Views", "Gourmet Kitchen", "Private Elevator", "Generous Terraces", "Robert A.M Stern Design"]
  }
];

export default function TextSliderModern() {
  const [containerRef, containerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    beforeChange: (current, next) => {
      setIsAnimating(true);
      setActiveSlide(next);
    },
    afterChange: () => {
      setIsAnimating(false);
    }
  };

  const goToSlide = (slideIndex) => {
    if (sliderRef) {
      sliderRef.slickGoTo(slideIndex);
    }
  };

  return (
          <div 
        ref={containerRef}
        className="modern-property-slider"
      >
      <div className="container">
        {/* Header Section */}
        <div className="slider-header">
          <div className="header-badge">
            <span>FEATURED LISTINGS</span>
          </div>
          <h2 className="main-title">
            Exclusive Properties
            <span className="title-accent"> in Prime Locations</span>
          </h2>
          <p className="header-description">
            Discover our handpicked selection of luxury properties in Los Angeles&apos; 
            most prestigious neighborhoods.
          </p>
        </div>

        {/* Slider Container */}
        <div className="property-slider-wrapper">
          <Slider 
            {...settings} 
            className="property-slider"
            ref={slider => setSliderRef(slider)}
          >
            {propertyData.map((property, index) => (
              <div key={property.id} className="property-slide">
                <div className="slide-container">
                  {/* Image Section */}
                  <div className="slide-image-section">
                    <div className="image-container">
                      <Image
                        src={property.image}
                        alt={property.address}
                        fill
                        className="property-image"
                        priority={index === 0}
                      />
                      <div className="image-overlay"></div>
                      <div className="status-badge">
                        {property.status}
                      </div>
                      <div className="price-badge">
                        {property.price}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="slide-content-section">
                    <div className="property-content">
                      <div className="property-header">
                        <div className="property-location">
                          <h3 className="property-address">{property.address}</h3>
                          <p className="property-city">{property.location}</p>
                        </div>
                        
                        <div className="property-stats">
                          <div className="stat-item">
                            <span className="stat-number">{property.bedrooms}</span>
                            <span className="stat-label">Bedrooms</span>
                          </div>
                          <div className="stat-item">
                            <span className="stat-number">{property.bathrooms}</span>
                            <span className="stat-label">Bathrooms</span>
                          </div>
                          <div className="stat-item">
                            <span className="stat-number">{property.area}</span>
                            <span className="stat-label">sq ft Area</span>
                          </div>
                        </div>
                      </div>

                      <div className="property-description">
                        <p>{property.description}</p>
                      </div>

                      {/* <div className="property-features">
                        <h4>Key Features</h4>
                        <div className="features-list">
                          {property.features.map((feature, idx) => (
                            <span key={idx} className="feature-tag">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div> */}

                      <div className="property-actions">
                        <button className="action-btn primary">
                          View Details
                          <span className="btn-arrow">→</span>
                        </button>
                        {/* <button className="action-btn secondary">
                          Schedule Tour
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom Navigation */}
          <div className="slider-navigation">
            <div className="nav-dots">
              {propertyData.map((_, index) => (
                <button
                  key={index}
                  className={`nav-dot ${index === activeSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                >
                  <span className="dot-number">{index + 1}</span>
                  <span className="dot-label">Property {index + 1}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="slider-stats">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">$50M+</div>
              <div className="stat-label">Properties Sold</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">95%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">30</div>
              <div className="stat-label">Days Average Sale</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">24/7</div>
              <div className="stat-label">Client Support</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
} 
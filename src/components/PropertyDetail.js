'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Import PropertyMap dynamically to prevent SSR issues
const PropertyMap = dynamic(() => import('./PropertyMap'), {
  ssr: false,
  loading: () => (
    <div className="property-map">
      <div className="map-container">
        <div className="luxury-map-placeholder">
          <div className="luxury-marker">
            <div className="marker-pin"></div>
          </div>
          <div className="luxury-map-info">
            <h4>Loading Map...</h4>
            <p className="map-note">Please wait while we load the interactive map</p>
          </div>
          <div className="map-gradient"></div>
        </div>
      </div>
    </div>
  )
});

export default function PropertyDetail({ property }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  if (!property) {
    return (
      <div className="property-detail">
        <div className="container">
          <p>Property not found.</p>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    );
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Handle contact form submission
    alert('Thank you for your interest! We will contact you soon.');
    setShowContactForm(false);
  };

  const openImageModal = () => {
    console.log('Opening image modal for:', property.images[currentImageIndex]);
    setShowImageModal(true);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
  };

  return (
    <div className="property-detail">
      {/* Property Hero Section */}
      <section className="property-hero">
        <div className="property-gallery">
          <div className="main-image">
            <Image
              src={property.images[currentImageIndex]}
              alt={`${property.title} - Image ${currentImageIndex + 1}`}
              width={800}
              height={600}
              className="gallery-image"
              onClick={openImageModal}
              style={{ cursor: 'zoom-in' }}
            />
            <button className="gallery-nav prev" onClick={prevImage}>
              &#8249;
            </button>
            <button className="gallery-nav next" onClick={nextImage}>
              &#8250;
            </button>
          </div>
          
          <div className="thumbnail-grid">
            {property.images.map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => selectImage(index)}
              >
                <Image
                  src={image}
                  alt={`${property.title} thumbnail ${index + 1}`}
                  width={100}
                  height={80}
                  className="thumbnail-image"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="property-info">
          <div className="property-header">
            <span className="property-status">{property.status}</span>
            <h1>{property.title}</h1>
            <p className="property-location">{property.location}</p>
            <div className="property-price">${property.price}</div>
          </div>

          <div className="property-features">
            <div className="feature">
              <span className="feature-icon">🛏️</span>
              <span>{property.bedrooms} Bedrooms</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🚿</span>
              <span>{property.bathrooms} Bathrooms</span>
            </div>
            <div className="feature">
              <span className="feature-icon">📐</span>
              <span>{property.sqft} sq ft</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🚗</span>
              <span>{property.parking} Parking</span>
            </div>
          </div>

          <div className="property-actions">
            <button 
              className="btn-primary"
              onClick={() => setShowContactForm(true)}
            >
              Contact Agent
            </button>
            <Link href="/properties" className="btn-secondary">
              Back to Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Property Description */}
      <section className="property-description">
        <div className="container">
          <h2>Property Description</h2>
          <p>{property.description}</p>
          
          {property.amenities && property.amenities.length > 0 && (
            <div className="property-amenities">
              <h3>Amenities</h3>
              <ul className="amenities-list">
                {property.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Property Location */}
      <section className="property-location-section">
        <div className="container">
          <h2>Location</h2>
          <PropertyMap lat={property.lat} lng={property.lng} title={property.title} />
        </div>
      </section>

      {/* Image Modal */}
      {showImageModal && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="image-modal-close"
              onClick={closeImageModal}
            >
              ×
            </button>
            
            <div className="image-modal-image-container">
              <button 
                className="image-modal-nav prev" 
                onClick={prevImage}
                disabled={property.images.length <= 1}
              >
                &#8249;
              </button>
              
              <img
                src={property.images[currentImageIndex]}
                alt={`${property.title} - Full Size Image ${currentImageIndex + 1}`}
                className="image-modal-image"
              />
              
              <button 
                className="image-modal-nav next" 
                onClick={nextImage}
                disabled={property.images.length <= 1}
              >
                &#8250;
              </button>
            </div>
            
            <div className="image-modal-info">
              <span>{currentImageIndex + 1} of {property.images.length}</span>
            </div>
            
            <div className="image-modal-thumbnails">
              {property.images.map((image, index) => (
                <div
                  key={index}
                  className={`image-modal-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => selectImage(index)}
                >
                  <img
                    src={image}
                    alt={`${property.title} thumbnail ${index + 1}`}
                    className="image-modal-thumbnail-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="modal-overlay" onClick={() => setShowContactForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setShowContactForm(false)}
            >
              ×
            </button>
            
            <h3>Contact Agent</h3>
            <form onSubmit={handleContactSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4"
                  placeholder={`I'm interested in ${property.title}...`}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 
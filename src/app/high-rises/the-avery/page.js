import Image from 'next/image';
import Link from 'next/link';
import "../../../styles/highrise-avery.css";

export default function TheAveryPage() {
  return (
    <div className="avery-page">
      {/* Immersive Hero Section */}
      <section className="hero-section">
        <div className="hero-image-container">
          <Image
            src="/images/highrises1.jpg"
            alt="The Avery - Century City"
            fill
            className="hero-image"
            priority
          />
        </div>
        
        <div className="hero-content">
          <div className="hero-badge-container">
            <span className="hero-badge">ULTRA LUXURY LIVING</span>
          </div>
          <h1 className="hero-title">
            <span className="title-line">THE</span>
            <span className="title-line main">AVERY</span>
          </h1>
          <p className="hero-subtitle">Where Sky Meets Sophistication</p>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">42</span>
              <span className="stat-label">Floors</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">$3.5M+</span>
              <span className="stat-label">Starting From</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">2025</span>
              <span className="stat-label">Completion</span>
            </div>
          </div>
          
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">
              Schedule Tour
            </Link>
            <Link href="/properties" className="btn-secondary">
              View Residences
            </Link>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Explore</span>
        </div>
      </section>

      {/* Floating Introduction */}
      <section className="floating-intro">
        <div className="container">
          <div className="intro-card">
            <div className="intro-content">
              <h2>Architectural Excellence</h2>
              <p className="intro-lead">
                The Avery redefines luxury living in the heart of Century City. This 42-story 
                architectural masterpiece offers unparalleled sophistication with breathtaking 
                360-degree views from downtown Los Angeles to the Pacific Ocean.
              </p>
              <div className="intro-features">
                <div className="feature-point">
                  <div className="feature-icon">🏗️</div>
                  <span>Architectural Marvel</span>
                </div>
                <div className="feature-point">
                  <div className="feature-icon">🌆</div>
                  <span>Panoramic Views</span>
                </div>
                <div className="feature-point">
                  <div className="feature-icon">🎯</div>
                  <span>Prime Location</span>
                </div>
              </div>
            </div>
            <div className="intro-image">
              <Image
                src="/images/highrises2.jpg"
                alt="The Avery Architecture"
                width={500}
                height={600}
                className="intro-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Residences Showcase */}
      <section className="residences-section">
        <div className="container">
          <div className="section-header">
            <h2>Exceptional Residences</h2>
            <p>Each home is a masterpiece of design and craftsmanship</p>
          </div>
          
          <div className="residences-grid">
            <div className="residence-card featured">
              <div className="residence-image">
                <Image
                  src="/images/slider1.jpg"
                  alt="Penthouse Suite"
                  width={600}
                  height={400}
                />
                <div className="residence-overlay">
                  <div className="residence-details">
                    <h3>Penthouse Collection</h3>
                    <p>$15M - $25M</p>
                    <span className="residence-size">4,500 - 7,000 sq ft</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="residence-card">
              <div className="residence-image">
                <Image
                  src="/images/slider2.jpg"
                  alt="Sky Homes"
                  width={400}
                  height={300}
                />
                <div className="residence-overlay">
                  <div className="residence-details">
                    <h3>Sky Homes</h3>
                    <p>$5M - $12M</p>
                    <span className="residence-size">2,000 - 3,500 sq ft</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="residence-card">
              <div className="residence-image">
                <Image
                  src="/images/slider3.jpeg"
                  alt="Premium Studios"
                  width={400}
                  height={300}
                />
                <div className="residence-overlay">
                  <div className="residence-details">
                    <h3>Premium Collection</h3>
                    <p>$3.5M - $6M</p>
                    <span className="residence-size">1,200 - 2,000 sq ft</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Experience */}
      <section className="amenities-section">
        <div className="amenities-background">
          <Image
            src="/images/highrises3.jpg"
            alt="Luxury Amenities"
            fill
            className="amenities-bg"
          />
          <div className="amenities-overlay"></div>
        </div>
        
        <div className="container">
          <div className="amenities-content">
            <h2>World-Class Amenities</h2>
            <p>Experience luxury beyond imagination</p>
            
            <div className="amenities-grid">
              <div className="amenity-item">
                <div className="amenity-icon">🏊‍♂️</div>
                <h3>Sky Pool & Spa</h3>
                <p>75-foot infinity pool on the 30th floor with panoramic city views</p>
              </div>
              
              <div className="amenity-item">
                <div className="amenity-icon">🍽️</div>
                <h3>Private Chef Service</h3>
                <p>Michelin-starred dining experiences in your own residence</p>
              </div>
              
              <div className="amenity-item">
                <div className="amenity-icon">🚁</div>
                <h3>Helipad Access</h3>
                <p>Private helicopter landing for ultimate convenience</p>
              </div>
              
              <div className="amenity-item">
                <div className="amenity-icon">🎭</div>
                <h3>Private Theater</h3>
                <p>50-seat screening room with state-of-the-art technology</p>
              </div>
              
              <div className="amenity-item">
                <div className="amenity-icon">🏋️‍♂️</div>
                <h3>Wellness Center</h3>
                <p>Complete fitness and spa facility with personal trainers</p>
              </div>
              
              <div className="amenity-item">
                <div className="amenity-icon">🌟</div>
                <h3>Concierge Elite</h3>
                <p>24/7 white-glove service for all your lifestyle needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantage */}
      <section className="location-section">
        <div className="container">
          <div className="location-content">
            <div className="location-text">
              <h2>Century City Excellence</h2>
              <p className="location-subtitle">
                Positioned at the epicenter of Los Angeles&apos; most prestigious business district
              </p>
              
              <div className="location-highlights">
                <div className="highlight">
                  <h4>Beverly Hills Adjacent</h4>
                  <p>Minutes from Rodeo Drive and world-class shopping</p>
                </div>
                <div className="highlight">
                  <h4>Business Hub</h4>
                  <p>Walking distance to major entertainment studios and corporate headquarters</p>
                </div>
                <div className="highlight">
                  <h4>Cultural Access</h4>
                  <p>Close proximity to museums, theaters, and fine dining</p>
                </div>
              </div>
              
              <Link href="/contact" className="location-cta">
                Discover Your New Address
              </Link>
            </div>
            
            <div className="location-visual">
              <div className="location-map">
                <Image
                  src="/images/bg-house.jpg"
                  alt="Century City Location"
                  width={500}
                  height={400}
                  className="map-image"
                />
                <div className="location-pins">
                  <div className="pin avery-pin">
                    <span>The Avery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Elevate Your Lifestyle</h2>
            <p>Join the exclusive community at The Avery</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn-primary-large">
                Schedule Private Tour
              </Link>
              <Link href="/properties" className="btn-outline-large">
                View All Properties
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
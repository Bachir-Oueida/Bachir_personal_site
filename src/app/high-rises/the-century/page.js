import Image from 'next/image';
import Link from 'next/link';
import "../../../styles/highrise-century.css";

export default function TheCenturyPage() {
  return (
    <div className="century-page">
      {/* Hero Section - Matching The Avery Design */}
      <section className="hero-section">
        <div className="hero-image-container">
          <Image
            src="/images/bg-century.png"
            alt="The Century - Luxury Living"
            fill
            className="hero-image"
            priority
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge-container">
            <span className="hero-badge">LUXURY LIVING</span>
          </div>
          <h1 className="hero-title">
            <span className="title-line">THE</span>
            <span className="title-line main">CENTURY</span>
          </h1>
          <p className="hero-subtitle">Century City&apos;s Most Prestigious Address</p>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">46</span>
              <span className="stat-label">Floors</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">$20M</span>
              <span className="stat-label">Record Sale</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">2010</span>
              <span className="stat-label">Established</span>
            </div>
          </div>
          
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">
              Private Consultation
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

      {/* Clean Introduction */}
      <section className="intro-century">
        <div className="container">
          <div className="intro-layout-century">
            <div className="intro-content-century">
              <h2>Architectural Excellence</h2>
              <p className="intro-lead-century">
                The Century stands as the ultimate expression of luxury living in Century City. 
                This 46-story architectural masterpiece has redefined sophisticated urban living 
                since 2010, attracting the world&apos;s most discerning residents to Los Angeles&apos; 
                most prestigious address.
              </p>
              <p>
                Each residence embodies timeless elegance with contemporary innovation, featuring 
                floor-to-ceiling windows, premium materials, and meticulous attention to detail. 
                The building&apos;s iconic design and uncompromising quality have established it as 
                the gold standard for luxury high-rise living.
              </p>
              
              <div className="intro-highlights-century">
                <div className="highlight-century">
                  <div className="highlight-icon-century">🏆</div>
                  <span>Record-Breaking Sales</span>
                </div>
                <div className="highlight-century">
                  <div className="highlight-icon-century">⭐</div>
                  <span>Celebrity Residents</span>
                </div>
                <div className="highlight-century">
                  <div className="highlight-icon-century">💎</div>
                  <span>Premium Amenities</span>
                </div>
              </div>
            </div>
            
            <div className="intro-visual-century">
              <Image
                src="/images/highrises3.jpg"
                alt="The Century Architecture"
                width={500}
                height={600}
                className="intro-image-century"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Highlight */}
      <section className="achievement-section">
        <div className="container">
          <div className="achievement-content">
            <div className="achievement-badge">
              <span>BACHIR OUEIDA&apos;S ACHIEVEMENT</span>
            </div>
            <h2>$20M Record-Breaking Sale</h2>
            <p>
              Bachir Oueida made headlines with his record-breaking $20 million sale at The Century, 
              establishing it as Century City&apos;s most expensive residential transaction and cementing 
              the building&apos;s reputation as the pinnacle of luxury living.
            </p>
            <div className="achievement-stats">
              <div className="achievement-stat">
                <span className="achievement-number">$20M</span>
                <span className="achievement-label">Record Sale</span>
              </div>
              <div className="achievement-stat">
                <span className="achievement-number">#1</span>
                <span className="achievement-label">Century City</span>
              </div>
              <div className="achievement-stat">
                <span className="achievement-number">2023</span>
                <span className="achievement-label">Achievement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residence Collections */}
      <section className="collections-century">
        <div className="container">
          <div className="section-header-century">
            <h2>Luxury Residence Collections</h2>
            <p>Each home represents the pinnacle of sophisticated living</p>
          </div>
          
          <div className="collections-grid-century">
            <div className="collection-card-century featured-century">
              <div className="collection-image-century">
                <Image
                  src="/images/slider1.jpg"
                  alt="Penthouse Collection"
                  width={600}
                  height={400}
                />
                <div className="collection-overlay-century">
                  <div className="collection-details-century">
                    <h3>Penthouse Collection</h3>
                    <p className="collection-price-century">$15M - $35M</p>
                    <span className="collection-size-century">5,000 - 7,000 sq ft</span>
                    <div className="collection-features-century">
                      <span>Private Elevators</span>
                      <span>360° Views</span>
                      <span>Private Terraces</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="collection-card-century">
              <div className="collection-image-century">
                <Image
                  src="/images/slider2.jpg"
                  alt="Executive Residences"
                  width={400}
                  height={300}
                />
                <div className="collection-overlay-century">
                  <div className="collection-details-century">
                    <h3>Executive Residences</h3>
                    <p className="collection-price-century">$8M - $18M</p>
                    <span className="collection-size-century">2,500 - 4,500 sq ft</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="collection-card-century">
              <div className="collection-image-century">
                <Image
                  src="/images/slider3.jpeg"
                  alt="Luxury Residences"
                  width={400}
                  height={300}
                />
                <div className="collection-overlay-century">
                  <div className="collection-details-century">
                    <h3>Luxury Residences</h3>
                    <p className="collection-price-century">$4M - $9M</p>
                    <span className="collection-size-century">1,400 - 2,500 sq ft</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Amenities */}
      <section className="amenities-century">
        <div className="amenities-bg-century">
          <Image
            src="/images/highrises2.jpg"
            alt="Premium Amenities"
            fill
            className="amenities-background-century"
          />
          <div className="amenities-overlay-century"></div>
        </div>
        
        <div className="container">
          <div className="amenities-content-century">
            <h2>World-Class Amenities</h2>
            <p>Exceptional facilities for discerning residents</p>
            
            <div className="amenities-grid-century">
              <div className="amenity-card-century">
                <div className="amenity-icon-century">🏛️</div>
                <h3>Grand Lobby</h3>
                <p>Marble-clad entrance with 24/7 concierge service</p>
              </div>
              
              <div className="amenity-card-century">
                <div className="amenity-icon-century">🏊‍♂️</div>
                <h3>75-Foot Pool</h3>
                <p>Olympic-length pool with private cabanas</p>
              </div>
              
              <div className="amenity-card-century">
                <div className="amenity-icon-century">🎾</div>
                <h3>Tennis Court</h3>
                <p>Private regulation court with professional instruction</p>
              </div>
              
              <div className="amenity-card-century">
                <div className="amenity-icon-century">🍽️</div>
                <h3>Private Dining</h3>
                <p>Restaurant-quality dining room with chef services</p>
              </div>
              
              <div className="amenity-card-century">
                <div className="amenity-icon-century">🎭</div>
                <h3>Theater Room</h3>
                <p>State-of-the-art screening room with stadium seating</p>
              </div>
              
              <div className="amenity-card-century">
                <div className="amenity-icon-century">💼</div>
                <h3>Business Center</h3>
                <p>Professional meeting rooms and executive offices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Excellence */}
      <section className="location-century">
        <div className="container">
          <div className="location-layout-century">
            <div className="location-content-century">
              <h2>Century City Excellence</h2>
              <p className="location-description-century">
                Positioned at the heart of Century City, The Century offers unparalleled 
                access to Los Angeles&apos; premier business district, world-class shopping, 
                fine dining, and cultural attractions. This coveted location places 
                residents at the center of the city&apos;s most prestigious neighborhood.
              </p>
              
              <div className="location-benefits-century">
                <div className="benefit-century">
                  <h4>Beverly Hills Adjacent</h4>
                  <p>Walking distance to Rodeo Drive and luxury shopping</p>
                </div>
                <div className="benefit-century">
                  <h4>Business District</h4>
                  <p>Center of entertainment industry and corporate headquarters</p>
                </div>
                <div className="benefit-century">
                  <h4>Cultural Access</h4>
                  <p>Minutes from museums, theaters, and fine dining</p>
                </div>
              </div>
              
              <Link href="/contact" className="location-cta-century">
                Discover Your New Address
              </Link>
            </div>
            
            <div className="location-visual-century">
              <Image
                src="/images/bg-house.jpg"
                alt="Century City Location"
                width={500}
                height={400}
                className="location-image-century"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Excellence */}
      <section className="investment-century">
        <div className="container">
          <div className="investment-content">
            <h2>Investment Excellence</h2>
            <p className="investment-subtitle">
              The Century represents more than luxury living - it&apos;s a proven investment 
              in Los Angeles&apos; most stable and appreciating real estate market.
            </p>
            
            <div className="investment-metrics">
              <div className="investment-metric">
                <span className="metric-number">15%</span>
                <span className="metric-label">Annual Appreciation</span>
              </div>
              <div className="investment-metric">
                <span className="metric-number">140</span>
                <span className="metric-label">Exclusive Residences</span>
              </div>
              <div className="investment-metric">
                <span className="metric-number">15+</span>
                <span className="metric-label">Years of Excellence</span>
              </div>
              <div className="investment-metric">
                <span className="metric-number">100%</span>
                <span className="metric-label">Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Call to Action */}
      <section className="cta-century">
        <div className="container">
          <div className="cta-content-century">
            <h2>Join The Century</h2>
            <p>Become part of Los Angeles&apos; most prestigious residential community</p>
            <div className="cta-buttons-century">
              <Link href="/contact" className="cta-primary-century">
                Private Consultation
              </Link>
              <Link href="/properties" className="cta-secondary-century">
                View Available Units
              </Link>
            </div>
            <div className="cta-credentials">
              <p>Exclusively represented by <strong>Bachir Oueida</strong></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
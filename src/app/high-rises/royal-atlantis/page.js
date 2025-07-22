import Image from 'next/image';
import Link from 'next/link';
import "../../../styles/highrise-royal-atlantis.css";

export default function RoyalAtlantisPage() {
  return (
    <div className="royal-atlantis-page">
      {/* Hero Section - Matching The Avery Design */}
      <section className="hero-section">
        <div className="hero-image-container">
          <Image
            src="/images/marina-del-rey.jpg"
            alt="Royal Atlantis - Marina del Rey"
            fill
            className="hero-image"
            priority
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge-container">
            <span className="hero-badge">OCEANFRONT LIVING</span>
          </div>
          <h1 className="hero-title">
            <span className="title-line">ROYAL</span>
            <span className="title-line main">ATLANTIS</span>
          </h1>
          <p className="hero-subtitle">Marina del Rey&apos;s Premier Address</p>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">38</span>
              <span className="stat-label">Floors</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">$2.8M+</span>
              <span className="stat-label">Starting From</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">2024</span>
              <span className="stat-label">Move-in Ready</span>
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

      {/* Clean Introduction */}
      <section className="intro-clean">
        <div className="container">
          <div className="intro-layout-clean">
            <div className="intro-content-clean">
              <h2>Oceanfront Excellence</h2>
              <p className="intro-lead-clean">
                Royal Atlantis stands as Marina del Rey&apos;s most prestigious residential tower, 
                offering unparalleled luxury with direct Pacific Ocean access. This 38-story 
                architectural achievement provides residents with an exclusive waterfront lifestyle 
                in Los Angeles&apos; premier marina community.
              </p>
              <p>
                Every residence features expansive ocean views, premium finishes, and access to 
                world-class amenities. The building&apos;s modern design and prime location create 
                the perfect balance of urban sophistication and coastal tranquility.
              </p>
              
              <div className="intro-highlights-clean">
                <div className="highlight-clean">
                  <div className="highlight-icon-clean">🌊</div>
                  <span>Direct Ocean Access</span>
                </div>
                <div className="highlight-clean">
                  <div className="highlight-icon-clean">⛵</div>
                  <span>Private Marina</span>
                </div>
                <div className="highlight-clean">
                  <div className="highlight-icon-clean">🏖️</div>
                  <span>Beach Club</span>
                </div>
              </div>
            </div>
            
            <div className="intro-visual-clean">
              <Image
                src="/images/highrises2.jpg"
                alt="Royal Atlantis Architecture"
                width={500}
                height={600}
                className="intro-image-clean"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Residences Grid */}
      <section className="residences-clean">
        <div className="container">
          <div className="section-header-clean">
            <h2>Oceanfront Residences</h2>
            <p>Sophisticated living with panoramic Pacific views</p>
          </div>
          
          <div className="residences-grid-clean">
            <div className="residence-card-clean featured-clean">
              <div className="residence-image-clean">
                <Image
                  src="/images/slider1.jpg"
                  alt="Penthouse Collection"
                  width={600}
                  height={400}
                />
                <div className="residence-overlay-clean">
                  <div className="residence-details-clean">
                    <h3>Penthouse Collection</h3>
                    <p className="residence-price-clean">$12M - $18M</p>
                    <span className="residence-size-clean">3,500 - 4,800 sq ft</span>
                    <div className="residence-features-clean">
                      <span>Private Terrace</span>
                      <span>Ocean Views</span>
                      <span>Premium Finishes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="residence-card-clean">
              <div className="residence-image-clean">
                <Image
                  src="/images/slider2.jpg"
                  alt="Ocean Suites"
                  width={400}
                  height={300}
                />
                <div className="residence-overlay-clean">
                  <div className="residence-details-clean">
                    <h3>Ocean Suites</h3>
                    <p className="residence-price-clean">$5M - $9M</p>
                    <span className="residence-size-clean">2,000 - 3,000 sq ft</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="residence-card-clean">
              <div className="residence-image-clean">
                <Image
                  src="/images/slider3.jpeg"
                  alt="Marina Residences"
                  width={400}
                  height={300}
                />
                <div className="residence-overlay-clean">
                  <div className="residence-details-clean">
                    <h3>Marina Residences</h3>
                    <p className="residence-price-clean">$2.8M - $5M</p>
                    <span className="residence-size-clean">1,100 - 2,000 sq ft</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Amenities */}
      <section className="amenities-clean">
        <div className="amenities-bg-clean">
          <Image
            src="/images/highrises3.jpg"
            alt="Luxury Amenities"
            fill
            className="amenities-background"
          />
          <div className="amenities-overlay-clean"></div>
        </div>
        
        <div className="container">
          <div className="amenities-content-clean">
            <h2>Premium Amenities</h2>
            <p>Exceptional facilities for the modern lifestyle</p>
            
            <div className="amenities-grid-clean">
              <div className="amenity-card-clean">
                <div className="amenity-icon-clean">⛵</div>
                <h3>Private Marina</h3>
                <p>Exclusive boat slips with direct ocean access</p>
              </div>
              
              <div className="amenity-card-clean">
                <div className="amenity-icon-clean">🏊‍♂️</div>
                <h3>Infinity Pool</h3>
                <p>Resort-style pool overlooking the Pacific</p>
              </div>
              
              <div className="amenity-card-clean">
                <div className="amenity-icon-clean">🏋️‍♂️</div>
                <h3>Fitness Center</h3>
                <p>State-of-the-art equipment and wellness facilities</p>
              </div>
              
              <div className="amenity-card-clean">
                <div className="amenity-icon-clean">🍽️</div>
                <h3>Private Dining</h3>
                <p>Exclusive dining spaces with ocean views</p>
              </div>
              
              <div className="amenity-card-clean">
                <div className="amenity-icon-clean">💆‍♀️</div>
                <h3>Spa & Wellness</h3>
                <p>Full-service spa with treatment rooms</p>
              </div>
              
              <div className="amenity-card-clean">
                <div className="amenity-icon-clean">🌟</div>
                <h3>Concierge</h3>
                <p>24/7 white-glove resident services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marina Lifestyle */}
      <section className="lifestyle-clean">
        <div className="container">
          <div className="lifestyle-layout-clean">
            <div className="lifestyle-content-clean">
              <h2>Marina del Rey Living</h2>
              <p className="lifestyle-description-clean">
                Experience the finest in coastal luxury at the world&apos;s largest 
                man-made marina. Royal Atlantis offers immediate access to waterfront 
                dining, recreational boating, and the serene beauty of Pacific sunsets.
              </p>
              
              <div className="lifestyle-benefits-clean">
                <div className="benefit-clean">
                  <h4>Waterfront Recreation</h4>
                  <p>Direct access to sailing, kayaking, and water sports</p>
                </div>
                <div className="benefit-clean">
                  <h4>Coastal Dining</h4>
                  <p>World-class restaurants and cafés within walking distance</p>
                </div>
                <div className="benefit-clean">
                  <h4>Urban Connectivity</h4>
                  <p>Minutes from LAX, Beverly Hills, and downtown Los Angeles</p>
                </div>
              </div>
              
              <Link href="/contact" className="lifestyle-cta-clean">
                Discover Marina Living
              </Link>
            </div>
            
            <div className="lifestyle-visual-clean">
              <Image
                src="/images/marina-del-rey.jpg"
                alt="Marina del Rey Lifestyle"
                width={500}
                height={400}
                className="lifestyle-image-clean"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clean Call to Action */}
      <section className="cta-clean">
        <div className="container">
          <div className="cta-content-clean">
            <h2>Experience Royal Atlantis</h2>
            <p>Discover waterfront luxury at Marina del Rey&apos;s premier address</p>
            <div className="cta-buttons-clean">
              <Link href="/contact" className="cta-primary-clean">
                Schedule Private Tour
              </Link>
              <Link href="/properties" className="cta-secondary-clean">
                View All Properties
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
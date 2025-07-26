import Image from 'next/image';
import Link from 'next/link';
import "../styles/communityDetail.css";

export default function CommunityDetail({ community }) {
  return (
    <div className="community-detail">
      {/* Hero Section */}
      <section className="community-hero">
        <div className="community-hero-background">
          <Image
            src={community.image}
            alt={community.title}
            fill
            className="hero-bg-image"
            priority
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="breadcrumb">
              <Link href="/communities">Communities</Link>
              <span className="breadcrumb-separator">→</span>
              <span className="current-page">{community.title}</span>
            </div>
            <h1 className="hero-title">{community.title}</h1>
            <p className="hero-subtitle">
              Luxury Real Estate in Los Angeles&apos; Most Prestigious Neighborhood
            </p>
          </div>
        </div>
      </section>

      {/* Community Overview */}
      <section className="community-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>About {community.title}</h2>
              <div className="description-extended">
                <p>{community.description}</p>
                <p>
                  This exclusive neighborhood represents the pinnacle of luxury living in Los Angeles. 
                  With its prime location, architectural diversity, and prestigious reputation, 
                  {community.title.toLowerCase()} continues to attract discerning buyers seeking 
                  the ultimate in sophisticated living.
                </p>
                <p>
                  As a specialist in {community.title.toLowerCase()} real estate, I have extensive 
                  knowledge of the market trends, property values, and unique characteristics that 
                  make this community so special. Whether you&apos;re looking to buy or sell, I provide 
                  personalized service tailored to your specific needs.
                </p>
              </div>
            </div>
            
            <div className="overview-stats">
              <div className="stats-card">
                <h3>Market Insights</h3>
                <div className="stat-items">
                  <div className="stat-item">
                    <div className="stat-value">$3.2M</div>
                    <div className="stat-label">Median Home Price</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">95%</div>
                    <div className="stat-label">Sales Price to List Price</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">45</div>
                    <div className="stat-label">Days on Market</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="community-features">
        <div className="container">
          <h2>Why Choose {community.title}?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🏛️</div>
              <h4>Architectural Excellence</h4>
              <p>Stunning homes featuring diverse architectural styles from Mediterranean villas to contemporary masterpieces.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">📍</div>
              <h4>Prime Location</h4>
              <p>Strategic location providing easy access to Beverly Hills, Century City, and downtown Los Angeles.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🛡️</div>
              <h4>Security & Privacy</h4>
              <p>Gated communities and private estates offering the ultimate in security and discretion.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🎓</div>
              <h4>Top Schools</h4>
              <p>Access to some of the most prestigious public and private schools in Los Angeles.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🛍️</div>
              <h4>Luxury Shopping</h4>
              <p>Close proximity to Rodeo Drive, Beverly Center, and other world-class shopping destinations.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🍽️</div>
              <h4>Fine Dining</h4>
              <p>Home to award-winning restaurants and exclusive dining establishments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="community-properties">
        <div className="container">
          <div className="properties-header">
            <h2>Available Properties in {community.title}</h2>
            <p>Explore luxury homes and estates currently available in this prestigious neighborhood.</p>
          </div>
          
          <div className="properties-actions">
            <Link href="/properties" className="view-properties-btn">
              View All Properties
            </Link>
            <Link href="/contact" className="contact-btn">
              Get Market Report
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="community-contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-text">
              <h2>Ready to Explore {community.title}?</h2>
              <p>
                As your dedicated real estate expert, I&apos;m here to help you navigate the 
                {community.title.toLowerCase()} market and find your perfect home.
              </p>
              <ul className="contact-benefits">
                <li>✓ Exclusive market insights and off-market opportunities</li>
                <li>✓ Personalized property tours and consultations</li>
                <li>✓ Expert negotiation and transaction management</li>
                <li>✓ Comprehensive market analysis and pricing strategies</li>
              </ul>
            </div>
            
            <div className="contact-card">
              <h3>Contact Bachir Oueida</h3>
              <div className="contact-info">
                <div className="contact-method">
                  <span className="method-icon">📞</span>
                  <div>
                    <strong>Phone</strong>
                    <p>(310)-722-7727</p>
                  </div>
                </div>
                <div className="contact-method">
                  <span className="method-icon">✉️</span>
                  <div>
                    <strong>Email</strong>
                    <p>bachir@oueida.com</p>
                  </div>
                </div>
              </div>
              <div className="contact-actions">
                <Link href="/contact" className="contact-primary-btn">
                  Schedule Consultation
                </Link>
                <Link href="/properties" className="contact-secondary-btn">
                  View Properties
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
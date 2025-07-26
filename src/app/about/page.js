import Image from "next/image";
import Link from "next/link";
import "../../styles/about.css";

export default function AboutPage() {
  return (
    <>
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-background">
          <Image
            src="/images/bg-house.jpg"
            alt="Luxury Real Estate"
            fill
            className="hero-bg-image"
            priority
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">About <span className="">Bachir Oueida</span></h1>
            <p className="hero-subtitle">THE LEADING BEVERLY HILLS REALTOR</p>
            <div className="hero-description">
              <p>
                Specializing in Beverly Hills, Malibu, and the most prestigious
                neighborhoods in Los Angeles, delivering unparalleled service
                and expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="story-content">
            <div className="story-image">
              <Image
                src="/images/aboutImage.jpeg"
                alt="Bachir Oueida"
                width={500}
                height={600}
                className="profile-image"
              />
            </div>
            <div className="story-text">
              <h2>THE LEADING BEVERLY HILLS REALTOR</h2>
              <div className="story-description">
                <p>Beverly Hills Greater Los Angeles Association of Realtors</p>
                <p>
                  As an exceptionalBeverly Hills Realtor and beyond, Bachir
                  Oueida has acquired extensive knowledge and expertise in every
                  aspect of the real estate industry. His in depth knowledge and
                  valuable advise make him a leader in the industry, winning him
                  the representation of the most significant properties on the
                  market. Bachir possesses an outstanding track record of
                  ensuring personalized service resulting in an unsurpassed
                  client loyalty for over a decade.
                </p>
                <p>
                  His expertise in finance and economy coupled with a dedication
                  to service have earned Bachir a stellar reputation. Bachir has
                  made a name for himself among clients as the top go-to real
                  estate agent in Beverly Hills, Los Angeles and Southern
                  California. His commitment and integrity have helped him
                  navigate skillful negotiations that exceed industry standards.
                  His golden standards have resulted in building a clientele
                  that continues to rely on his service as a source to sell and
                  acquire assets that remain ahead of the curve in the
                  marketplace. Clients continuously turn to him as a trusted
                  resource with their most valuable assets.
                </p>
              </div>
            </div>
          </div>
          <div className="additional-info">
            <h3>INDUSTRY EXPERT, INTEGRITY AND DEDICATION</h3>
                <p>
                  MEMBER OF THE WORLD’S LEADING REAL ESTATE CONSULTANCY FIRM
                </p>
                <p>
                  Bachir Oueida is a full service Beverly Hills Realtor with
                  years of experience in Beverly Hills, Los Angles and beyond.
                  Dedicated to making the process of buying, selling or leasing
                  real estate seamless, efficient, and as enjoyable as possible
                  by providing solid guidance each step of the way. With a
                  dedicated approach, Bachir Oueida is your resource to all
                  things real estate. As a member of the worlds leading
                  independent consultancy firms Frank Knight, Bachir has a
                  competitive advantage to ensure clients have the most up to
                  date advice and guidance whether you’re buying, selling, or
                  investing. Bachir and his associates offer unforgettable world
                  class support and service.
                </p>
            </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <div className="values-header">
            <h2>Why Choose Me</h2>
            <p>
              Built on trust, expertise, and unwavering commitment to excellence
            </p>
          </div>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">🏆</div>
              <h3>Proven Excellence</h3>
              <p>
                Over $500M in luxury property sales with a track record of
                exceeding client expectations
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">🎯</div>
              <h3>Market Expertise</h3>
              <p>
                Deep knowledge of Beverly Hills, Malibu, and exclusive LA
                neighborhoods
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">💎</div>
              <h3>Luxury Focus</h3>
              <p>
                Specialized in high-end properties with attention to every
                detail
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h3>Personal Service</h3>
              <p>
                Dedicated one-on-one attention with 24/7 availability for all
                clients
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">🌟</div>
              <h3>Client Satisfaction</h3>
              <p>
                98% client satisfaction rate with numerous referrals and repeat
                business
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">🔒</div>
              <h3>Discretion & Trust</h3>
              <p>
                Maintaining the highest level of confidentiality and
                professionalism
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">$500M+</div>
              <div className="stat-label">Properties Sold</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="about-specialties">
        <div className="container">
          <div className="specialties-header">
            <h2>Areas of Expertise</h2>
            <p>
              Specializing in the most prestigious neighborhoods in Los Angeles
            </p>
          </div>
          <div className="specialties-grid">
            <div className="specialty-item">
              <Image
                src="/images/beverly-hills.jpg"
                alt="Beverly Hills"
                width={300}
                height={200}
                className="specialty-image"
              />
              <h3>Beverly Hills</h3>
              <p>
                Luxury estates and iconic properties in the heart of Beverly
                Hills
              </p>
            </div>
            <div className="specialty-item">
              <Image
                src="/images/malibu.jpg"
                alt="Malibu"
                width={300}
                height={200}
                className="specialty-image"
              />
              <h3>Malibu</h3>
              <p>Oceanfront properties and beachside luxury homes</p>
            </div>
            <div className="specialty-item">
              <Image
                src="/images/bel-air.jpg"
                alt="Bel Air"
                width={300}
                height={200}
                className="specialty-image"
              />
              <h3>Bel Air</h3>
              <p>
                Exclusive estates in one of LA&apos;s most prestigious neighborhoods
              </p>
            </div>
            <div className="specialty-item">
              <Image
                src="/images/holmby-hills.jpg"
                alt="Holmby Hills"
                width={300}
                height={200}
                className="specialty-image"
              />
              <h3>Holmby Hills</h3>
              <p>Ultra-luxury properties in the platinum triangle</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Find Your Dream Property?</h2>
            <p>
              Let&apos;s work together to find the perfect luxury property that
              matches your vision and lifestyle.
            </p>
            <div className="cta-buttons">
              <Link href="/properties" className="cta-button primary">
                View Properties
              </Link>
              <Link href="/contact" className="cta-button secondary">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

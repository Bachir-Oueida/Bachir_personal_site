import Image from 'next/image';
import ContactPageForm from '@/components/ContactPageForm';
import SocialLinks from '@/components/SocialLinks';
import "../../styles/contact.css";

export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-background">
          <Image
            src="/images/highrises1.jpg"
            alt="Los Angeles Skyline"
            fill
            className="hero-bg-image"
            priority
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Get In Touch</h1>
            <p className="hero-subtitle">
              Ready to find your dream property or discuss your real estate needs?
            </p>
            <div className="hero-description">
              <p>
                Let&apos;s start a conversation about how I can help you achieve your 
                real estate goals in Los Angeles&apos; most prestigious neighborhoods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <h2>Send a Message</h2>
                <p>I&apos;ll respond within 24 hours</p>
              </div>
              <ContactPageForm />
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <div className="contact-info-card">
                <Image
                  src="/logos/douglas-elliman-navy.png"
                  alt="Douglas Elliman"
                  width={1024}
                  height={142}
                  className="contact-brokerage-logo"
                />
                <h3>Contact Information</h3>
                
                <div className="contact-details">
                  <p>Bachir Oueida</p>
                  <p>Douglas Elliman Real Estate</p>
                  <p>
                    <a href="tel:+13107227727">Mobile 310.722.7727</a>
                  </p>
                  <p>
                    <a href="mailto:bachir@oueida.com">bachir@oueida.com</a>
                  </p>
                  <p>DRE #00936311</p>
                  <p>150 El Camino Drive, Suite 300, Beverly Hills, CA 90212</p>
                </div>

                <div className="social-links">
                  <h4>Connect</h4>
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location Section */}
      <section className="office-location">
        <div className="container">
          <div className="location-content">
            <div className="location-info">
              <h2>Visit My Office</h2>
              <p>
                Located in the heart of Beverly Hills, my office provides a 
                private and comfortable environment to discuss your real estate 
                needs. Schedule an appointment to meet in person.
              </p>
              <p className="office-address">
                150 El Camino Drive, Suite 300, Beverly Hills, CA 90212
              </p>
              <a
                className="directions-button office-directions"
                href="https://www.google.com/maps/search/?api=1&query=150+El+Camino+Drive+Suite+300+Beverly+Hills+CA+90212"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
              
              <div className="office-details">
                <div className="office-feature">
                  <div className="feature-icon">🅿️</div>
                  <div className="feature-text">
                    <strong>Valet Parking Available</strong>
                    <p>Complimentary valet service for all appointments</p>
                  </div>
                </div>
                
                <div className="office-feature">
                  <div className="feature-icon">☕</div>
                  <div className="feature-text">
                    <strong>Comfortable Meeting Space</strong>
                    <p>Private consultation rooms with refreshments</p>
                  </div>
                </div>
                
                <div className="office-feature">
                  <div className="feature-icon">📋</div>
                  <div className="feature-text">
                    <strong>Comprehensive Resources</strong>
                    <p>Market reports, property portfolios, and financial tools</p>
                  </div>
                </div>
              </div>

              <button className="schedule-button">
                Schedule an Appointment
              </button>
            </div>

            <div className="location-map">
              <iframe
                title="Map of 150 El Camino Drive, Beverly Hills"
                src="https://maps.google.com/maps?q=150%20El%20Camino%20Drive%2C%20Suite%20300%2C%20Beverly%20Hills%2C%20CA%2090212&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="container">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How quickly do you respond to inquiries?</h4>
              <p>I respond to all inquiries within 2-4 hours during business hours, and within 24 hours on weekends.</p>
            </div>
            
            <div className="faq-item">
              <h4>Do you offer virtual consultations?</h4>
              <p>Yes, I offer virtual consultations via video call for your convenience, especially for initial discussions.</p>
            </div>
            
            <div className="faq-item">
              <h4>What areas do you specialize in?</h4>
              <p>I specialize in Beverly Hills, Malibu, Bel Air, Holmby Hills, and other prestigious Los Angeles neighborhoods.</p>
            </div>
            
            <div className="faq-item">
              <h4>Is there a consultation fee?</h4>
              <p>Initial consultations are complimentary. I believe in building relationships and understanding your needs first.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
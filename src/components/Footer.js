import Image from "next/image";
import SocialLinks from "./SocialLinks";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* First Row - 3 Columns */}
        <div className="footer-row">
          {/* First Column - Company Info & Map */}
          <div className="footer-column">
            <div className="footer-logo">
              <h1>Bachir Oueida</h1>
            </div>
            <Image
              src="/logos/douglas-elliman-white.png"
              alt="Douglas Elliman"
              width={1024}
              height={142}
              className="footer-brokerage-logo"
            />
            <div className="footer-company">
              <h3 className="footer-company-name">
                Douglas Elliman Real Estate
              </h3>
            </div>
          </div>

          <div className="footer-column">
            <Image
              src="/logos/la-real-estate-logo.png"
              alt="L.A. Real Estate"
              width={767}
              height={225}
              unoptimized
              className="footer-la-logo"
            />
          </div>

          {/* Third Column - Contact Info */}
          <div className="footer-column">
            <div className="footer-contact">
              <h3 className="footer-contact-heading">Contact Us</h3>
              <p className="footer-contact-name">Bachir Oueida</p>
              <p className="footer-contact-company">Douglas Elliman Real Estate</p>
              <div className="footer-contact-item">
                <a href="tel:+13107227727" className="footer-phone">
                  Mobile 310.722.7727
                </a>
              </div>
              <div className="footer-contact-item">
                <a href="mailto:bachir@oueida.com" className="footer-email">
                  bachir@oueida.com
                </a>
              </div>
              <p className="footer-agent-id">DRE #00936311</p>
              <div className="footer-contact-item">
                <address className="footer-address">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=150+El+Camino+Drive+Suite+300+Beverly+Hills+CA+90212"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    150 El Camino Drive, Suite 300,
                    <br />
                    Beverly Hills, CA 90212
                  </a>
                </address>
              </div>
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Second Row - Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 Douglas Elliman Real Estate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

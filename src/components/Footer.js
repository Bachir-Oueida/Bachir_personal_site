import Image from "next/image";
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
              {/* <img src="/images/footerLogo.png" alt="Douglas Elliman" /> */}
            </div>
            <div className="footer-company">
              <h3 className="footer-company-name">
                Douglas Elliman Real Estate
              </h3>
              <p className="footer-agent-id f-italic">AGENT ID DRE# 00936311</p>
            </div>
          </div>

          {/* Second Column - Footer Image & Text */}
          <div className="footer-column">
            <div className="footer-map-section mb-10">
              <h4 className="footer-map-heading">Get Directions</h4>
              <div className="footer-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.0842742932626!2d-118.39876792335916!3d34.07011917314692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbf0bb4a4e4f%3A0x5e5c24a3b6e9f8c9!2s150%20S%20El%20Camino%20Dr%2C%20Beverly%20Hills%2C%20CA%2090212!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="footer-image-section">
              {/* <Image
                src="/images/footerImage.png"
                alt="Luxury Property"
                className="footer-image"
                width={400}
                height={300}
              /> */}
              {/* <p className="footer-disclaimer text-center f-italic">
                While some of the listings on this site may not be our exclusive
                listings, we have ongoing relationships with all of the listing
                agents.
              </p> */}
            </div>
          </div>

          {/* Third Column - Contact Info */}
          <div className="footer-column">
            <div className="footer-contact">
              <h3 className="footer-contact-heading">Contact Us</h3>
              <div className="footer-contact-item">
                <a href="mailto:bachir@oueida.com" className="footer-email">
                  bachir@oueida.com
                </a>
              </div>
              <div className="footer-contact-item">
                <a href="tel:310-722-7727" className="footer-phone">
                  (310)-722-7727
                </a>
              </div>
              <div className="footer-contact-item">
                <address className="footer-address">
                  150 S El Camino Dr, Beverly Hills,
                  <br />
                  CA 90212
                </address>
              </div>
              
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

'use client';

import "../styles/work.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Work() {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.2 });
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [subtitleRef, subtitleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [descRef, descVisible] = useScrollAnimation({ threshold: 0.3 });
  const [buttonRef, buttonVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={sectionRef} className="work-section">
      <div className="work-overlay">
        <div className="work-content">
          <h1 
            ref={titleRef}
            className={`work-title slide-in-down stagger-delay-1 ${titleVisible ? 'animate' : ''}`}
          >
            WORK WITH US
          </h1>
          <h2 
            ref={subtitleRef}
            className={`work-subtitle f-italic fade-in-up stagger-delay-2 ${subtitleVisible ? 'animate' : ''}`}
          >
            We offer the highest level of expertise, service, and integrity.
          </h2>
          <p 
            ref={descRef}
            className={`work-description text-reveal stagger-delay-3 ${descVisible ? 'animate' : ''}`}
          >
            Years of experience and a stellar global reputation make Bachir
            Oueida one of the Top Beverly Hills Luxury Real Estate Agent.
            Bachir&apos;s extensive knowledge and skill will provide you with the
            very best tools and knowledge to meet your real estate objectives.
            Client Satisfaction, integrity and professionalism are the number
            one priority.
          </p>
          <div 
            ref={buttonRef}
            className={`work-button-container bounce-in stagger-delay-4 ${buttonVisible ? 'animate' : ''}`}
          >
            <a href="#" className="work-button global-btn">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

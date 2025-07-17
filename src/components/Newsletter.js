'use client';

import "../styles/newsletter.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Newsletter() {
    const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.2 });
    const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
    const [subtitleRef, subtitleVisible] = useScrollAnimation({ threshold: 0.3 });
    const [formRef, formVisible] = useScrollAnimation({ threshold: 0.3 });

    return (
        <section ref={sectionRef} className="newsletter-section">
            <div className="newsletter-overlay"></div>
            <div className={`newsletter-container ${sectionVisible ? 'animate' : ''}`}>
                <div className="newsletter-content">
                    <h1 
                        ref={titleRef}
                        className={`newsletter-title slide-in-down stagger-delay-1 ${titleVisible ? 'animate' : ''}`}
                    >
                        NEWSLETTER
                    </h1>
                    <h2 
                        ref={subtitleRef}
                        className={`newsletter-subtitle f-italic fade-in-up stagger-delay-2 ${subtitleVisible ? 'animate' : ''}`}
                    >
                        Get the latest updates on luxury real estate market trends and exclusive property listings.
                    </h2>
                    <div 
                        ref={formRef}
                        className={`newsletter-form bounce-in stagger-delay-3 ${formVisible ? 'animate' : ''}`}
                    >
                        <input 
                            type="email" 
                            placeholder="Enter your email address"
                            className="newsletter-input"
                        />
                        <button className="newsletter-button global-btn mt-4">Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

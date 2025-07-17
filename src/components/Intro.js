'use client';

import "../styles/intro.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Intro() {
    const [containerRef, isVisible] = useScrollAnimation({ threshold: 0.2 });
    const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
    const [subtitleRef, subtitleVisible] = useScrollAnimation({ threshold: 0.3 });
    const [textRef, textVisible] = useScrollAnimation({ threshold: 0.3 });
    const [buttonRef, buttonVisible] = useScrollAnimation({ threshold: 0.3 });

    return (
        <div 
            ref={containerRef}
            className={`intro-container scale-in ${isVisible ? 'animate' : ''}`}
        >
            <h1 
                ref={titleRef}
                className={`intro-title slide-in-down stagger-delay-1 ${titleVisible ? 'animate' : ''}`}
            >
                BACHIR OUEIDA
            </h1>
            <h2 
                ref={subtitleRef}
                className={`intro-subtitle f-italic fade-in-up stagger-delay-2 ${subtitleVisible ? 'animate' : ''}`}
            >
                Top Beverly Hills Luxury Real Estate Agent
            </h2>
            <p 
                ref={textRef}
                className={`intro-text text-reveal stagger-delay-3 ${textVisible ? 'animate' : ''}`}
            >
                As a Top Beverly Hills Luxury Real Estate Agent, Bachir Oueida has acquired extensive knowledge and expertise in every aspect of the real estate industry. His in-depth knowledge and valuable advice make him a leader in the industry, winning him the representation of the most significant properties on the market including Beverly Hills homes. Bachir possesses an outstanding track record of ensuring personalized service resulting in an unsurpassed client loyalty for over a decade. His expertise in finance and economy coupled with a dedication to service have earned Bachir a stellar reputation. Bachir has made a name for himself among clients as the top go-to real estate agent in Beverly Hills, Los Angeles, and Southern California. His commitment and integrity have helped him navigate skillful negotiations that exceed industry standards. His golden standards have resulted in building a clientele that continues to rely on his services as a source to sell and acquire assets that remain ahead of the curve in the marketplace. Clients continuously turn to him as a trusted resource with their most valuable assets.
            </p>
            <div 
                ref={buttonRef}
                className={`intro-button-container bounce-in stagger-delay-4 ${buttonVisible ? 'animate' : ''}`}
            >
                <a href="#" className="intro-button global-btn">Learn More</a>
            </div>
        </div>
    )
}
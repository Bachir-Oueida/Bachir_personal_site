'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "../styles/agentProfile.css";

export default function AgentProfile() {
    const [containerRef, isVisible] = useScrollAnimation({ threshold: 0.1 });
    const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.3 });
    const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 });

    return (
        <section 
            ref={containerRef}
            className="agent-profile-section"
        >
            <div className="agent-profile-container">
                {/* Agent Image Side */}
                <div 
                    ref={imageRef}
                    className={`agent-image-section ${imageVisible ? 'animate' : ''}`}
                >
                    <div className="agent-image-wrapper">
                        <div className="agent-image-bg"></div>
                        <Image
                            src="/images/aboutImage.jpeg"
                            alt="Bachir Oueida - Beverly Hills Luxury Real Estate Agent"
                            width={500}
                            height={600}
                            className="agent-image"
                            priority
                        />
                        <div className="agent-image-overlay">
                            <div className="achievement-badge">
                                <span className="badge-number">10+</span>
                                <span className="badge-text">Years Experience</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Agent Content Side */}
                <div 
                    ref={contentRef}
                    className={`agent-content-section ${contentVisible ? 'animate' : ''}`}
                >
                    <div className="agent-content-wrapper">
                        <div className="agent-header">
                            <span className="agent-label">Beverly Hills Luxury Agent</span>
                            <h1 className="agent-name">
                                <span className="name-first">BACHIR</span>
                                <span className="name-last">OUEIDA</span>
                            </h1>
                            <p className="agent-title">Top Beverly Hills Luxury Real Estate Agent</p>
                        </div>

                        <div className="agent-description">
                            <p className="description-highlight">
                                Leading Beverly Hills luxury real estate with unmatched expertise, 
                                exceptional service, and a proven track record of success.
                            </p>
                            <p className="description-detail">
                                As a Top Beverly Hills Luxury Real Estate Agent, Bachir Oueida has acquired 
                                extensive knowledge and expertise in every aspect of the real estate industry. 
                                His in-depth knowledge and valuable advice make him a leader in the industry, 
                                winning him the representation of the most significant properties on the market.
                            </p>
                        </div>

                        <div className="agent-stats">
                            <div className="stat-item">
                                <span className="stat-number">$500M+</span>
                                <span className="stat-label">Sales Volume</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-number">200+</span>
                                <span className="stat-label">Happy Clients</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-number">98%</span>
                                <span className="stat-label">Success Rate</span>
                            </div>
                        </div>

                        <div className="agent-specialties">
                            <h3>Specializations</h3>
                            <div className="specialties-grid">
                                <div className="specialty-item">
                                    <span className="specialty-icon">🏰</span>
                                    <span>Luxury Estates</span>
                                </div>
                                <div className="specialty-item">
                                    <span className="specialty-icon">🏙️</span>
                                    <span>Beverly Hills</span>
                                </div>
                                <div className="specialty-item">
                                    <span className="specialty-icon">💎</span>
                                    <span>High-End Properties</span>
                                </div>
                                <div className="specialty-item">
                                    <span className="specialty-icon">📈</span>
                                    <span>Investment Properties</span>
                                </div>
                            </div>
                        </div>

                        <div className="agent-actions">
                            <Link href="/about" className="btn-primary">
                                Learn More About Me
                            </Link>
                            <Link href="/contact" className="btn-secondary">
                                <span className="btn-icon">💬</span>
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="bg-elements">
                <div className="bg-circle bg-circle-1"></div>
                <div className="bg-circle bg-circle-2"></div>
                <div className="bg-gradient"></div>
            </div>
        </section>
    );
} 
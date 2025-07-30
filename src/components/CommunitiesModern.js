'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import communitiesData from '@/data/communities';
import "../styles/communitiesModern.css";

export default function CommunitiesModern({ isFullPage = false }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  const handleCommunityClick = (community) => {
    const slug = community.title.toLowerCase().replace(/\s+/g, '-');
    router.push(`/communities/${slug}`);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return;

    // Fallback for browsers that don't support IntersectionObserver
    if (!window.IntersectionObserver) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('communities-modern');
    if (element) {
      observer.observe(element);
    } else {
      // If element not found, show animations anyway
      setIsVisible(true);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [isMounted]);

  return (
    <section id="communities-modern" className="communities-modern" style={{padding: isFullPage ? '60px 0px' : '0px'}}>
      <div className="container">
        {/* Header Section - Only show on full page */}
        {isFullPage && (
          <div className={`communities-header ${isMounted && isVisible ? 'animate-in' : ''}`}>
            <div className="header-badge">
              <span>EXCLUSIVE NEIGHBORHOODS</span>
            </div>
            <h2 className="main-title">
              Discover Los Angeles&apos; 
              <span className="title-accent"> Premier Communities</span>
            </h2>
            <p className="header-description">
              From the glamour of Beverly Hills to the coastal luxury of Malibu, 
              explore the most prestigious neighborhoods where I specialize in 
              delivering exceptional real estate experiences.
            </p>
          </div>
        )}

        {/* Featured Community */}
        <div className={`featured-community ${isMounted && isVisible ? 'animate-in' : ''}`}>
          <div className="featured-content">
            <div className="featured-image">
              <Image
                src={communitiesData[activeIndex].image}
                alt={communitiesData[activeIndex].title}
                fill
                className="featured-bg"
              />
              <div className="featured-overlay"></div>
              <div className="featured-info">
                <div className="featured-badge">FEATURED COMMUNITY</div>
                <h3 className="featured-title">{communitiesData[activeIndex].title}</h3>
                <p className="featured-description">
                  {communitiesData[activeIndex].description}
                </p>
                <button 
                  className="explore-button"
                  onClick={() => handleCommunityClick(communitiesData[activeIndex])}
                >
                  Explore Properties
                  <span className="button-arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Communities Grid */}
        <div className={`communities-grid ${isMounted && isVisible ? 'animate-in' : ''}`}>
          {communitiesData.map((community, index) => (
            <div
              key={index}
              className={`community-card ${index === activeIndex ? 'active' : ''}`}
              onClick={() => {
                setActiveIndex(index);
                handleCommunityClick(community);
              }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="card-image">
                <Image
                  src={community.image}
                  alt={community.title}
                  fill
                  className="community-bg"
                />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h4 className="community-name">{community.title}</h4>
                <div className="card-indicator">
                  <span className="indicator-dot"></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section - Only show on full page */}
        {isFullPage && (
          <div className={`communities-stats ${isMounted && isVisible ? 'animate-in' : ''}`}>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">8</div>
              <div className="stat-label">Premier Communities</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">$100M+</div>
              <div className="stat-label">Properties Sold</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years of Expertise</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Luxury Transactions</div>
            </div>
          </div>
        </div>
        )}

        {/* Call to Action - Only show on full page */}
        {isFullPage && (
          <div className={`communities-cta ${isMounted && isVisible ? 'animate-in' : ''}`}>
          <div className="cta-content">
            <h3>Ready to Explore These Communities?</h3>
            <p>Let me guide you to your perfect home in Los Angeles&apos; most prestigious neighborhoods.</p>
            <div className="cta-buttons">
              <button className="cta-primary">View All Properties</button>
              <button className="cta-secondary">Schedule Consultation</button>
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  );
} 
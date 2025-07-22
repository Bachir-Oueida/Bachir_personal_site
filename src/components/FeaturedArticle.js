'use client';

import Image from "next/image";
import "../styles/featuredArticle.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function FeaturedArticle() {
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <div className="featured-article">
      <div className="featured-article-image relative">
        <Image
          src="/images/bg-century.png"
          alt="Featured Article"
          width={800}
          height={600}
        />
        <div className="featured-article-overlay"></div>
        <div 
          ref={contentRef}
          className={`featured-article-content text-center fade-in-up ${contentVisible ? 'animate' : ''}`}
        >
          <h2><span style={{color: '#d4af37'}}>BACHIR OUEIDA&apos;S</span> $20M IS CENTURY CITY&apos;S PRICIEST SALE</h2>
          <p className="featured-article-excerpt">
            The Westwood/Century City area owes much of its history to Edwin and Harold Sans, who not only sold the city the 375-acre plot of land that would become UCLA at a discounted rate in 1925 but also developed Westwood Village.
          </p>
          <a href="#" className="global-btn-white">Read More</a>
        </div>
      </div>
    </div>
  );
}

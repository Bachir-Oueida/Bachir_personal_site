'use client';

import Image from "next/image";
import communitiesData from "../data/communities";
import "../styles/communities.css";
import { useScrollAnimation, useStaggeredAnimation } from "../hooks/useScrollAnimation";

export default function Communities() {
  const [gridRef, visibleItems] = useStaggeredAnimation(communitiesData.length + 1, 150);

  return (
    <div ref={gridRef} className="communities-grid">
      <div 
        key="0" 
        className={`community-item slide-in-left ${visibleItems.has(0) ? 'animate' : ''}`}
        style={{backgroundColor: "black"}}
      >
        <div className="text-content">
            <h3>Communities</h3>
            <a href="/communities">View All</a>
        </div>
      </div>
      {communitiesData.map((community, index) => (
        <div 
          key={index} 
          className={`community-item zoom-in ${visibleItems.has(index + 1) ? 'animate' : ''}`}
        >
          <Image
            src={community.image}
            alt={community.title}
            className="community-image"
          />
          <div className="overlay"></div>
          <div className="text-content">
            <h3>{community.title}</h3>
            <p>{community.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

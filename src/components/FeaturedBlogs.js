'use client';

import Image from "next/image";
import Link from "next/link";
import { getFeaturedBlogs, formatDate } from "../utils/blogUtils";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "../styles/featuredBlogs.css";

export default function FeaturedBlogs() {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.2 });
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [blogsRef, blogsVisible] = useScrollAnimation({ threshold: 0.3 });

  const featuredBlogs = getFeaturedBlogs().slice(0, 3); // Get first 3 featured blogs

  // Debug logging
  // console.log('Featured blogs:', featuredBlogs);
  // console.log('Featured blogs length:', featuredBlogs.length);

  return (
    <section 
      ref={sectionRef}
      className={`featured-blogs-section fade-in ${sectionVisible ? 'animate' : ''}`}
    >
      <div className="container">
        <div 
          ref={titleRef}
          className={`featured-blogs-header slide-in-down ${titleVisible ? 'animate' : ''}`}
        >
          <h2>Featured Articles</h2>
          <p className="f-italic">Insights and expertise from the luxury real estate market</p>
        </div>
        
        <div 
          ref={blogsRef}
          className={`featured-blogs-grid slide-in-up ${blogsVisible ? 'animate' : ''}`}
        >
          {featuredBlogs.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
              No featured blogs found. Debug info: Check console for details.
            </div>
          ) : (
            featuredBlogs.map((blog, index) => (
              <Link 
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className={`featured-blog-card ${blogsVisible ? 'animate' : ''}`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  opacity: blogsVisible ? 1 : 0,
                  transform: blogsVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s ease-out'
                }}
              >
                <div className="featured-blog-image">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={280}
                    className="blog-image"
                  />
                  <div className="blog-overlay"></div>
                  {/* <div className="blog-category-badge">{blog.category}</div> */}
                </div>
                
                <div className="featured-blog-content">
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-excerpt">{blog.excerpt}</p>
                  
                  <div className="blog-meta">
                    <div className="blog-date">
                      <span>{formatDate(blog.publishedDate)}</span>
                    </div>
                    <div className="blog-read-time">
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="blog-cta">
                    <span className="read-more">Read More</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
        
        <div className="featured-blogs-footer">
          <Link href="/blog" className="view-all-blogs">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
} 
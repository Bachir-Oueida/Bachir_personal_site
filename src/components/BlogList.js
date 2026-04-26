'use client';

import Image from "next/image";
import Link from "next/link";
import { getAllBlogs, formatDate } from "../utils/blogUtils";
import "../styles/blogList.css";

export default function BlogList() {
  const blogs = getAllBlogs();

  return (
    <div className="blog-list">
      <div className="container mx-auto">
        <div className="blog-list-header">
          <h2>Latest Articles</h2>
          <p>Insights and expertise from the luxury real estate market</p>
        </div>
        
        <div className="blog-grid">
          {blogs.map((blog) => (
            <article key={blog.id} className="blog-card">
              <div className="blog-card-image">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="blog-image"
                />
                {/* <div className="blog-category">{blog.category}</div> */}
              </div>
              
              <div className="blog-card-content">
                <h3 className="blog-title">
                  <Link href={`/blog/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h3>
                
                <p className="blog-excerpt">{blog.excerpt}</p>
                
                <div className="blog-meta">
                  {/* <div className="blog-author">
                    <span>By {blog.author}</span>
                  </div> */}
                  <div className="blog-date">
                    <span>{formatDate(blog.publishedDate)}</span>
                  </div>
                  <div className="blog-read-time">
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                
                <div className="blog-tags">
                  {/* {blog.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="blog-tag">
                      {tag}
                    </span>
                  ))} */}
                </div>
                
                <Link href={`/blog/${blog.slug}`} className="blog-read-more">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { getBlogBySlug, formatDate } from "../../../utils/blogUtils";
import "../../../styles/blogPost.css";
import blogbg from "../../../../public/images/blogs/bg-blogs.jpg";

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <article className="blog-post">
        <div className="blog-post-header">
          <div className="blog-post-image">
            <Image
              // src={blog.image}
              src={blogbg}
              alt={blog.title}
              width={1200}
              height={600}
              className="post-image"
            />
            <div className="blog-post-overlay"></div>
            <div className="blog-post-title-overlay">
              <h1>{blog.title}</h1>
              <div className="blog-post-meta">
                {/* <span className="blog-post-category">{blog.category}</span>
                <span className="blog-post-date">{formatDate(blog.publishedDate)}</span>
                <span className="blog-post-author">By {blog.author}</span>
                <span className="blog-post-read-time">{blog.readTime}</span> */}
                {blog.category ? (
                  <span className="blog-post-category">{blog.category}</span>
                ) : null}

                {blog.publishedDate ? (
                  <span className="blog-post-date">
                    {formatDate(blog.publishedDate)}
                  </span>
                ) : null}

                {blog.author ? (
                  <span className="blog-post-author">By {blog.author}</span>
                ) : null}

                {blog.readTime ? (
                  <span className="blog-post-read-time">{blog.readTime}</span>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="blog-post-content">
          <div className="container">
            {/* <div className="blog-post-excerpt">
              <p>{blog.excerpt}</p>
            </div> */}

            <div
              className="blog-post-body"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            <div className="blog-post-tags">
              <h4>Tags:</h4>
              <div className="tags-list">
                {/* {blog.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

// Generate static params for static generation (optional)
export async function generateStaticParams() {
  const blogs = await import("../../../data/blogs");
  return blogs.default.map((blog) => ({
    slug: blog.slug,
  }));
}
